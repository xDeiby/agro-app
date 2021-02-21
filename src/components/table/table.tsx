/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useTable } from "react-table";
import { StyledTable, StyledTh, StyledTd, StyledTr } from "./styled.Table";
import { WithTableProps } from "../../HightOrderComponent/tables/types";

interface TableProps {
	currentEntity: EntityRelated;
	pathname: string;
}
function Table(props: TableProps & WithTableProps): JSX.Element {
	const { data, headers } = props;

	const table_instance = useTable({
		columns: headers || [],
		data: data || [],
	});

	const { headerGroups, rows, prepareRow, getTableBodyProps } = table_instance;

	return (
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
								<StyledTd {...cell.getCellProps()}>{cell.render("Cell")}</StyledTd>
							))}
						</StyledTr>
					);
				})}
			</tbody>
		</StyledTable>
	);
}

export default Table;
