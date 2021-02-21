import { EntityRelated } from "@trifenix/agro-data";
import List from "../../components/list";
import { withList } from "../../HightOrderComponent/lists/withList";
import parseRequest, { getSearchPropertys } from "../../modules/metadata/parseRequest";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";

const ListPreorders = withList({
	getItems: async (entity: EntityRelated, entity_rel: EntityRelated, id: string) => {
		const entities = (await searchInstance.getRelIn(entity, entity_rel, id)).data;

		return entities;
	},
})(List);

export default ListPreorders;
