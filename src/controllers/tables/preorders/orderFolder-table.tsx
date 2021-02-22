import { EntityRelated } from "@trifenix/agro-data";
import { useHistory } from "react-router";
import Table from "../../../components/table";
import { IHeadersTable } from "../../../HightOrderComponent/tables/types";
import { withTable } from "../../../HightOrderComponent/tables/withTable";
import getFieldsName from "../../../modules/metadata/getFieldsName";
import parseRequest from "../../../modules/metadata/parseRequest";
import { searchInstance } from "../../../services/azure-search/indexs-instances/AgroSearch";

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
						<button onClick={() => push(`/orders/order_folders/${row.original.id}`)}>
							editar
						</button>
					);
				},
			},
			{
				Header: "Preordenes",
				accessor: "preorders",
				Cell: function cellPreorders({ row }: any) {
					const { push } = useHistory();

					return (
						<button onClick={() => push(`/orders/preorders/${row.original.id}`)}>
							Preorden
						</button>
					);
				},
			},
		];
		return cells;
	},
})(Table);

export default OrderFolderTable;
