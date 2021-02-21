/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useRowSelect, useTable } from "react-table";
import getFieldsName from "../../modules/metadata/getFieldsName";
import { IHeadersTable, WithTableProps } from "../../HightOrderComponent/tables/types";
import { withTable } from "../../HightOrderComponent/tables/withTable";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import parseRequest from "../../modules/metadata/parseRequest";

interface TableSelectProps {
	selects: string[];
	chageSelects: (selects: string[]) => void;
	currentEntity: EntityRelated;
	ids: string[];
}

const TableSelect: React.FC<TableSelectProps & WithTableProps> = ({
	selects,
	chageSelects,
	data,
	headers,
}) => {
	const { headerGroups, rows, prepareRow, getTableBodyProps } = useTable(
		{
			columns: headers || [],
			data: data || [],
		},
		useRowSelect,
		function nose(hooks) {
			hooks.visibleColumns.push((columns) => [
				{
					id: "selection",
					Header: "Select",
					Cell: function checkboxCell({ row }: any) {
						const isSelect = selects.includes(row.original.id);

						return (
							<input
								checked={isSelect}
								type="checkbox"
								onChange={() =>
									chageSelects(
										isSelect
											? selects.filter((select) => select !== row.original.id)
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

const TableSelectManteiner = withTable({
	getData: async (entity: EntityRelated, page: number, total: number, ids?: string[]) => {
		const entities = await searchInstance.getEntitiesExclude(entity, ids || []);

		const data = await Promise.all(
			entities.data.map(async (entity) => await parseRequest(entity, false))
		);

		return data;
	},
	getHeaders: (entity: EntityRelated) => {
		const columns: IHeadersTable[] = getFieldsName(entity).map((header) => ({
			Header: header.header,
			accessor: header.field,
		}));

		return columns;
	},
})(TableSelect);

export default TableSelectManteiner;
