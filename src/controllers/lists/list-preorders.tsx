import { EntityRelated } from "@trifenix/agro-data";
import { withList } from "../../HightOrderComponent/lists/withList";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import List from "../../components/list/list";
const ListPreorders = withList({
	getItems: async (entity: EntityRelated, entity_rel: EntityRelated, id: string) => {
		const entities = (await searchInstance.getRelIn(entity, entity_rel, id)).data;

		return entities;
	},
})(List);

export default ListPreorders;
