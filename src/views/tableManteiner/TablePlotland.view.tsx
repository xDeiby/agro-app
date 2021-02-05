import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const PlotlandTable: React.FC = () => {
    return (
        <div>
            Tabla de plotland
            <QuerysView typeEntities={EntityRelated.PLOTLAND}> </QuerysView>
        </div>
    );
};

export default PlotlandTable;
