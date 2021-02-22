/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useHistory } from "react-router";
import { useTable } from "react-table";
import getFieldsName from "../../modules/metadata/getFieldsName";
import parseRequest from "../../modules/metadata/parseRequest";
import AgroSearch, {
	searchInstance,
} from "../../services/azure-search/indexs-instances/AgroSearch";
import { Edit } from "@styled-icons/boxicons-regular";
import ButtonLineal from "../buttons/button-lineal";
// import "./table.css";

// interface TableProps {
// 	currentEntity: EntityRelated;
// 	pathname: string;
// }
function PreOrder<T>(): JSX.Element {
	// const columns = React.useMemo(() => COLUMNS, []);
	// const data = React.useMemo(() => DATA, []);

	const history = useHistory();

	const [data, setData] = React.useState<any>([]);
	const [columns, setColumns] = React.useState<any>([]);
	const [loading, setLoading] = React.useState(false);

	// const { currentEntity, pathname } = props;

	// TODO: Cambiar
	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			// Headers
			const cols = getFieldsName(24, [], [10]).map((column) => ({
				Header: column.header,
				accessor: column.field,
			}));
			//

			// data

			// Los rels
			// const entities = (await search.getEntities(currentEntity)).data;
			// const propertys = entities.map((entity) => parseRequest(entity));

			// test
			// const wea = await Promise.all(
			// 	entities.map(async (entity) => await parseRequest(entity, false, [21]))
			// );

			const { data } = await searchInstance.getEntities(24, []);

			const entities = await Promise.all(
				data.map(async (entity) => await parseRequest(entity, false, [10]))
			);

			// TODO: Cambiar todo esto
			// wea.forEach((nose: any) => {
			// 	for (const k in nose) {
			// 		if (nose[k] instanceof Date) {
			// 			// console.log(wea[k], "AKIIII");

			// 			nose[k] = nose[k].toString() as any;
			// 		}
			// 	}
			// });

			cols.push({
				Header: "Editar",
				accessor: "id",
				// eslint-disable-next-line react/display-name
				Cell: (pr: any) => (
					<ButtonLineal
						typeButton="danger"
						icon={Edit}
						size="small"
						onClick={() => history.push(`/preorders/${pr.value}`)}
					>
						Preorder
					</ButtonLineal>
				),
			} as any);

			setColumns(cols);
			setData(entities);
			setLoading(false);
		};

		fetchData();
	}, []);

	const table_instance = useTable({
		columns: columns,
		data: data,
	});

	const { headerGroups, rows, prepareRow, getTableBodyProps } = table_instance;

	return loading ? (
		<h1>loading...</h1>
	) : (
		<table>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>

			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default PreOrder;
