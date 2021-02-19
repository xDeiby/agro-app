/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useHistory } from "react-router";
import { useTable } from "react-table";
import getFieldsName from "../../modules/metadata/getFieldsName";
import parseRequest from "../../modules/metadata/parseRequest";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import { Edit } from "@styled-icons/boxicons-regular";
import ButtonLineal from "../buttons/button-lineal";
import { StyledTable, StyledTh, StyledTd, StyledTr } from "./styled.Table";
import Loading from "../loading/Loading";

interface TableProps {
	currentEntity: EntityRelated;
	pathname: string;
}
function Table<T>(props: TableProps): JSX.Element {
	// const columns = React.useMemo(() => COLUMNS, []);
	// const data = React.useMemo(() => DATA, []);

	const history = useHistory();

	const [data, setData] = React.useState<any>([]);
	const [columns, setColumns] = React.useState<any>([]);
	const [loading, setLoading] = React.useState(false);

	const { currentEntity, pathname } = props;

	// TODO: Cambiar
	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			// Headers
			const cols: any = getFieldsName<T>(currentEntity).map((column) => ({
				Header: column.header,
				accessor: column.field,
			}));
			//

			// data
			const search = new AgroSearch();

			// Los rels
			const entities = (await search.getEntities(currentEntity)).data;
			// const propertys = entities.map((entity) => parseRequest(entity));

			// test
			const wea = await Promise.all(
				entities.map(async (entity) => await parseRequest(entity, false, [21]))
			);

			// TODO: Cambiar todo esto
			wea.forEach((nose: any) => {
				for (const k in nose) {
					if (nose[k] instanceof Date) {
						nose[k] = nose[k].toString() as any;
					}
				}
			});

			cols.push({
				Header: "Editar",
				accessor: "id" as keyof T,
				// eslint-disable-next-line react/display-name
				Cell: (pr: any) => (
					<ButtonLineal
						typeButton="danger"
						icon={Edit}
						size="small"
						onClick={() => history.push(`${pathname}/${pr.cell.value}`)}
					>
						Editar
					</ButtonLineal>
				),
			});

			setColumns(cols);
			setData(wea);
			setLoading(false);
		};

		fetchData();
	}, []);
	const table_instance = useTable({
		columns: columns,
		data: data,
	});

	const { headerGroups, rows, prepareRow, getTableBodyProps } = table_instance;

	return (
		<Loading isLoading={loading}>
			<StyledTable>
				<thead>
					{headerGroups.map((headerGroup) => (
						<StyledTr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<StyledTh {...column.getHeaderProps()}>
									{column.render("Header")}
								</StyledTh>
							))}
						</StyledTr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<StyledTr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<StyledTd {...cell.getCellProps()}>
										{cell.render("Cell")}
									</StyledTd>
								))}
							</StyledTr>
						);
					})}
				</tbody>
			</StyledTable>
		</Loading>
	);
}

export default Table;
