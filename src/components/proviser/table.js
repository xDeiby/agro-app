/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useHistory } from "react-router";
import { useRowSelect, useTable } from "react-table";
import getFieldsName from "../../modules/metadata/getFieldsName";
import parseRequest from "../../modules/metadata/parseRequest";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import { Edit } from "@styled-icons/boxicons-regular";
import ButtonLineal from "../buttons/button-lineal";
import input from "../input";

// interface TableProps {
// 	currentEntity: EntityRelated;
// 	pathname: string;
// 	selects?: any[];
// }

// eslint-disable-next-line react/display-name
const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref, row = undefined) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		console.log(row, "WAKAWAKA");
		rest.checked = true;

		return (
			<>
				<input type="checkbox" ref={resolvedRef} {...rest} />
			</>
		);
	}
);

function Table(props) {
	// const columns = React.useMemo(() => COLUMNS, []);
	// const data = React.useMemo(() => DATA, []);

	const history = useHistory();

	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [selects, setSelects] = React.useState(props.selectDefault || []);

	const { currentEntity } = props;

	// const cols = getFieldsName(currentEntity).map((column) => ({
	// 	Header: column.header,
	// 	accessor: column.field,
	// }));

	const columns = React.useMemo(
		() =>
			getFieldsName(currentEntity).map((column) => ({
				Header: column.header,
				accessor: column.field,
			})),
		[selects]
	);

	// TODO: Cambiar
	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			// Headers
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
			wea.forEach((nose) => {
				for (const k in nose) {
					if (nose[k] instanceof Date) {
						// console.log(wea[k], "AKIIII");

						nose[k] = nose[k].toString();
					}
				}
			});

			setData(wea);
			setLoading(false);
		};

		fetchData();
	}, []);

	const table_instance = useTable(
		{
			columns: columns,
			data: data,
		},
		useRowSelect,
		(hooks) => {
			hooks.visibleColumns.push((columns) => [
				// Let's make a column for selection
				{
					id: "selection",
					// The header can use the table's getToggleAllRowsSelectedProps method
					// to render a checkbox
					// eslint-disable-next-line react/display-name
					Header: ({ getToggleAllRowsSelectedProps }) => (
						<div>
							{/* <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} /> */}
							Select
						</div>
					),
					// The cell can use the individual row's getToggleRowSelectedProps method
					// to the render a checkbox
					// eslint-disable-next-line react/display-name
					Cell: ({ row }) => {
						console.log(row.id);

						const wea = selects.includes(row.original.id) ? "X" : "ADD";

						return (
							<input
								checked={selects.includes(row.original.id)}
								type="checkbox"
								onChange={() =>
									setSelects(
										wea === "X"
											? selects.filter((e) => e !== row.original.id)
											: [...selects, row.original.id]
									)
								}
							/>
						);
					},
				},
				...columns,
			]);
		}
	);

	const {
		headerGroups,
		rows,
		prepareRow,
		getTableBodyProps,
		state,
		selectedFlatRows,
	} = table_instance;

	console.log(selects);

	return loading ? (
		<h1>loading...</h1>
	) : (
		<>
			<label>Nombre de la preorden</label>
			<input name="nose" />

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
		</>
	);
}

export default Table;
