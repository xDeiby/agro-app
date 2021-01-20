import { IEntitie } from "..";

interface IVariety extends IEntitie {
    idSpecie: string;
    abbreviation: string;
    name: string;
}

export default IVariety;
