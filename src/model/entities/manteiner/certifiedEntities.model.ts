import { IEntitie } from "..";

export interface ICertifiedEntities extends IEntitie {
    abbreviation: string;
    name: string;
}

export default ICertifiedEntities;
