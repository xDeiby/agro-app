import { IResponse } from "./IResponse";

export interface IndexesModel<T> {
    endpoint: string;
    index_name: string;
    key: string;
    getEntities(query: string): Promise<IResponse<T[]>>;
}
