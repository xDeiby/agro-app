/* eslint-disable react/jsx-key */
import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useRowSelect, useTable } from "react-table";
import getFieldsName from "../../modules/metadata/getFieldsName";
import parseRequest from "../../modules/metadata/parseRequest";
import { StyledTable, StyledTh, StyledTd, StyledTr } from "./styled.Table";

import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import Loading from "../loading/Loading";

interface TableSelectProps {
	selects: string[];
	chageSelects: (selects: string[]) => void;
	currentEntity: EntityRelated;
	ids: string[];
	folder_id?: string;
}

const TableSelect: React.FC<TableSelectProps> = ({
	selects,
	chageSelects,
	currentEntity,
	ids,
	folder_id,
}) => {
	const [data, setData] = React.useState<any[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);

	console.log(folder_id);

	// TODO: Hecho a la rapida, cambiar luego... (Si es que sigo)
	React.useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const order_folder = (
				await searchInstance.getSpecificEntitie(
					EntityRelated.ORDER_FOLDER,
					folder_id as string,
					["rel"]
				)
			).data[0];

			// * Grupo de orderFolders con la misma especie, objetivo de aplicacion y evento fenologico
			const agrupFolders = (
				await searchInstance.getWea(`index eq ${24} and rel/any(element: element/index eq ${30} and element/id eq '${
					order_folder.rel.find((entities) => entities.index === 30)?.id
				}') and rel/any(element: element/index eq ${18} and element/id eq '${
					order_folder.rel.find((entities) => entities.index === 18)?.id
				}')
				and rel/any(element: element/index eq ${10} and element/id eq '${
					order_folder.rel.find((entities) => entities.index === 10)?.id
				}')`)
			).data;

			// * Todas las preordenes del grupo de order folders
			const preorders = (
				await Promise.all(
					agrupFolders.map(
						async (folder) =>
							(
								await searchInstance.getRelIn(
									EntityRelated.PREORDER,
									folder.index,
									folder.id
								)
							).data
					)
				)
			).flat();

			// * Todos los barracks que ya estan seleccionados en todas las preordenes del grupo de order folders, exceptuabdi a los seleccionados de la actual preorden
			const barracks = Array.from(
				new Set(
					preorders
						.map((pre) =>
							pre.rel
								.filter((entity) => entity.index === EntityRelated.BARRACK)
								.map((barrack) => barrack.id)
						)
						.flat()
						.filter((value) => value && !selects.includes(value))
				)
			);

			console.log(agrupFolders);

			// * Todos los barracks, incluyendo a los que estan seleccionados en la actual preorden, exceptuando a los que ya estan seleccionados en todas las preordenes dentro del grupo de order folders
			const all_barracks = await searchInstance.getEntities(currentEntity, [], 10, 1, [
				...ids,
				...barracks,
			]);

			// const orderFolderSpecie = entities.data.filter(
			// 	(barrack) =>
			// 		barrack.rel.find((entity) => entity.index === EntityRelated.SPECIE)?.id ===
			// 		order_folder.rel.find((entity) => entity.index === EntityRelated.SPECIE)?.id
			// );

			// * Todas las variedades que tengan la especie de la actual order folder
			const all_validVarietys = await searchInstance.getWea(
				`index eq ${EntityRelated.VARIETY} and rel/any(element: element/index eq ${
					EntityRelated.SPECIE
				} and element/id eq '${
					order_folder.rel.find((entity) => entity.index === EntityRelated.SPECIE)?.id
				}')`
			);

			// * Todos los barracks que contengan las variedades validas, por ende, los barracks validos
			const valid_barracks = all_barracks.data.filter((barrack) =>
				all_validVarietys.data
					.map((variety) => variety.id)
					.includes(
						barrack.rel.find((entity) => entity.index === EntityRelated.VARIETY)
							?.id as string
					)
			);

			const result = await Promise.all(
				valid_barracks.map(async (entity: any) => await parseRequest(entity, false))
			);

			setData(result);
			setLoading(false);
		};

		fetchData();
	}, []);

	const headers = React.useMemo(
		() =>
			getFieldsName(currentEntity).map((header) => ({
				Header: header.header,
				accessor: header.field,
			})),
		[selects]
	);

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
		<Loading isLoading={loading}>
			<StyledTable>
				<thead>
					{headerGroups.map((headerGroup) => (
						<StyledTr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<StyledTh {...column.getHeaderProps()}>{column.render("Header")}</StyledTh>
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
		</Loading>
	);
};

export default TableSelect;

// TODO: Hallar forma para este caso particular
// const TableSelectManteiner = withTable({
// 	getData: async (entity: EntityRelated, page: number, total: number, ids = []) => {
// 		const entities = await searchInstance.getEntities(entity, [], total, page, ids);

// 		const data = await Promise.all(
// 			entities.data.map(async (entity) => await parseRequest(entity, false))
// 		);

// 		return {
// 			data: data,
// 			error: entities.error,
// 			total: entities.total,
// 		};
// 	},
// 	getHeaders: (entity: EntityRelated) => {
// 		const columns: IHeadersTable[] = getFieldsName(entity).map((header) => ({
// 			Header: header.header,
// 			accessor: header.field,
// 		}));

// 		return columns;
// 	},
// })(TableSelect);

// export default TableSelectManteiner;
