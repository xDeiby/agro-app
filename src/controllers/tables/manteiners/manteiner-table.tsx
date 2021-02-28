import { useHistory } from "react-router";
import { IHeadersTable } from "../../../HightOrderComponent/tables/types";
import { withTable } from "../../../HightOrderComponent/tables/withTable";
import getFieldsName from "../../../modules/metadata/getFieldsName";
import parseRequest from "../../../modules/metadata/parseRequest";
import { searchInstance } from "../../../services/azure-search/indexs-instances/AgroSearch";
import Table from "../../../components/table";
import { EntityRelated } from "@trifenix/agro-data";
import ButtonLineal from "../../../components/buttons/button-lineal";
import { Edit } from "@styled-icons/boxicons-regular";

const ManteinerTable = withTable({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getData: async (entity: EntityRelated, page: number, total: number) => {
		const entities = await searchInstance.getEntities(entity, [], total, page);

		const data = await Promise.all(
			entities.data.map(async (entity) => await parseRequest(entity, false))
		);

		return {
			data: data,
			error: entities.error,
			total: entities.total,
		};
	},
	getHeaders: (entity: EntityRelated) => {
		const columns: IHeadersTable[] = getFieldsName(entity).map((header) => ({
			Header: header.header,
			accessor: header.field,
		}));

		return columns;
	},
	cellColumns: (redirect: string) => {
		const cell_columns: IHeadersTable[] = [
			{
				Header: "Editar",
				accessor: "id",
				Cell: function cellEdit({ row }: any) {
					const { push } = useHistory();

					// ? Por que no aparece en row.value ? (Investigar despues).
					return (
						<ButtonLineal
							typeButton="danger"
							onClick={() => push(`${redirect}/${row.values.id}`)}
							icon={Edit}
							size="small"
						>
							Editar
						</ButtonLineal>
					);
				},
			},
		];

		return cell_columns;
	},
})(Table);

export default ManteinerTable;
