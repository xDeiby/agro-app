/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import { useHistory } from "react-router";
import { useTable } from "react-table";
import { base_path, order_pathname } from "../../../config/statics";
import { IHeadersTable, WithTableProps } from "../../../HightOrderComponent/tables/types";
import { withTable } from "../../../HightOrderComponent/tables/withTable";
import getFieldsName from "../../../modules/metadata/getFieldsName";
import parseRequest from "../../../modules/metadata/parseRequest";
import { searchInstance } from "../../../services/azure-search/indexs-instances/AgroSearch";

interface OrderFolderProps {
	entity: EntityRelated;
}

const OrderFolder: React.FC<OrderFolderProps & WithTableProps> = (props) => {
	const { headers, data } = props;

	const { headerGroups, getTableBodyProps, prepareRow, rows } = useTable({
		columns: headers || [],
		data: data || [],
	});

	return (
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
};

// Controlador

const OrderFolderTable = withTable({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getData: async (entity: EntityRelated, page: number, total: number) => {
		const entities = await searchInstance.getEntities(entity);

		const data = await Promise.all(
			entities.data.map(
				async (entity) =>
					await parseRequest(entity, false, [EntityRelated.PHENOLOGICAL_EVENT])
			)
		);

		return data;
	},
	getHeaders: (entity: EntityRelated) => {
		const columns: IHeadersTable[] = getFieldsName(
			entity,
			[],
			[EntityRelated.PHENOLOGICAL_EVENT]
		).map((header) => ({
			Header: header.header,
			accessor: header.field,
		}));

		columns.push({
			Header: "PreOrders",
			accessor: "id",
			// eslint-disable-next-line react/display-name
			Cell: (row: any) => {
				const { push } = useHistory();

				return (
					<button
						onClick={() =>
							push(`/${base_path.order}/${order_pathname.preorder}/${row.value}`)
						}
					>
						aaaa
					</button>
				);
			},
		});

		return columns;
	},
})(OrderFolder);

export default OrderFolderTable;
