import { IEntitie } from "..";

interface IPhenologicalEvent extends IEntitie {
    name: string;
    initData: Date;
    endDate: Date;
}

export default IPhenologicalEvent;
