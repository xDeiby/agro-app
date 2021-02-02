import { EntityBaseSearch, GeoPointTs } from "@trifenix/mdm";
import { IndexesModel } from "../../../model/azure-search/IndexesModel";
import { IResponse } from "../../../model/azure-search/IResponse";
import AzureSearch from "../azure-search";

export default class AgroSearch extends AzureSearch<EntityBaseSearch<GeoPointTs>>
    implements IndexesModel<EntityBaseSearch<GeoPointTs>> {
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

    public async getEntities(entity: number): Promise<IResponse<EntityBaseSearch<GeoPointTs>[]>> {
        const res = await this.searchEntities(`index eq ${entity === 23 ? 21 : entity}`);

        return res;
    }

    public async getSpecificEntitie(
        entitie_index: number,
        id: string
    ): Promise<IResponse<EntityBaseSearch<GeoPointTs>[]>> {
        const res = await this.searchEntities(`index eq ${entitie_index} AND id eq '${id}'`);

        return res;
    }
}
