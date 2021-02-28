import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated } from "@trifenix/agro-data/dist/index-model/EntityRelated";
import { EntityBaseSearch } from "@trifenix/mdm";
import { IndexesModel } from "../../../model/azure-search/IndexesModel";
import { IResponse } from "../../../model/azure-search/IResponse";
import AzureSearch from "../azure-search";

export default class AgroSearch extends AzureSearch<EntityBaseSearch<GeographyPoint>>
	implements IndexesModel<EntityBaseSearch<GeographyPoint>> {
	public endpoint: string;
	public index_name: string;
	public key: string;

	constructor(
		endpoint = "https://search-agro.search.windows.net/",
		index_name = "entities-agro",
		key = "7902C1E82BEEDC85AC0E535CF45DFC77"
	) {
		super(endpoint, index_name, key);
		this.endpoint = endpoint;
		this.index_name = index_name;
		this.key = key;
	}

	public async getEntities(
		entity: number,
		select?: (keyof EntityBaseSearch<GeographyPoint>)[],
		elements?: number,
		page?: number,
		ids = Array<string>(),
		isPaginate = true
	): Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>> {
		const res = await this.searchEntities(
			`index eq ${entity} and not search.in(id, '${ids.join(",")}')`,
			select,
			elements,
			page,
			isPaginate
		);

		return res;
	}

	public async getSpecificEntitie(
		entitie_index: number,
		id: string,
		select?: (keyof EntityBaseSearch<GeographyPoint>)[]
	): Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>> {
		const query = `index eq ${entitie_index} and id eq '${id}'`;

		const res = await this.searchEntities(query, select);

		return res;
	}

	public async getRelIn(
		entity_index: EntityRelated,
		entityRel_index: EntityRelated,
		id_rel: string,
		selects?: (keyof EntityBaseSearch<GeographyPoint>)[]
	): Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>> {
		const query = `index eq ${entity_index} and (rel/any(element: element/index eq ${entityRel_index} and element/id eq '${id_rel}' ))`;

		const res = await this.searchEntities(query, selects);

		return res;
	}

	public async getWea(query: string): Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>> {
		const res = await this.searchEntities(query);

		return res;
	}
}

export const searchInstance = new AgroSearch();
