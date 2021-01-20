import { IEntitie } from "..";

interface IBarracks extends IEntitie {
    idPlotLand: string;
    idVariety: string;
    idPollinator?: string;
    idRootstock?: string;
    idGeographicalPoint?: string;
    numberOfPlants: number;
    name: string;
    hectares: number;
    plantingYear: number;
    geographicalPoints: string[];
}

export default IBarracks;
