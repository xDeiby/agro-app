import { Edit } from "@styled-icons/boxicons-regular";
import { EntityRelated } from "@trifenix/agro-data";
import React from "react";
import { useHistory } from "react-router";
import ButtonLineal from "../../../components/buttons/button-lineal";
import Table from "../../../components/table";
import { IHeadersTable } from "../../../HightOrderComponent/tables/types";
import { withTable } from "../../../HightOrderComponent/tables/withTable";
import getFieldsName from "../../../modules/metadata/getFieldsName";
import parseRequest from "../../../modules/metadata/parseRequest";
import { searchInstance } from "../../../services/azure-search/indexs-instances/AgroSearch";
// import { FilePaper} from "@styled-icons/remix-fill/FilePaper";


const OrderFolderTable = withTable({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getData: async (entity: EntityRelated, page: number, total: number) => {
		const entities = await searchInstance.getEntities(entity, [], total, page);

		const data = await Promise.all(
			entities.data.map(
				async (entity) =>
					await parseRequest(entity, false, [EntityRelated.PHENOLOGICAL_EVENT])
			)
		);

		return {
			data: data,
			error: entities.error,
			total: entities.total,
		};
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

		return columns;
	},

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	cellColumns: (redirect: string) => {
		const cells: IHeadersTable[] = [
			{
				Header: "Editar",
				accessor: "edit",
				Cell: function editFolder({ row }: any) {
					const { push } = useHistory();

					return (
						<ButtonLineal
						typeButton="danger" 
						onClick={() => push(`/orders/order_folders/${row.original.id}`)} 
						icon={Edit}
						size="small">
							Editar
						</ButtonLineal>
					);
				},
			},
			{
				Header: "Preordenes",
				accessor: "preorders",
				Cell: function cellPreorders({ row }: any) {
					const { push } = useHistory();

					return (
						<ButtonLineal  typeButton="default" 
						onClick={() => push(`/orders/preorders/${row.original.id}`)}
						icon={Edit}
						size="small">
							Preorden
						</ButtonLineal>
					);
				},
			},
		];
		return cells;
	},
})(Table);

export default OrderFolderTable;
