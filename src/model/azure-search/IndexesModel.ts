import { IResponse } from "./IResponse";

export interface IndexesModel<T> {
    endpoint: string;
    index_name: string;
    key: string;
    getEntities(entity: number, select?: (keyof T)[]): Promise<IResponse<T[]>>;
    getSpecificEntitie(entitie_index: number, id: string, select?: (keyof T)[]): Promise<IResponse<T[]>>;
}
