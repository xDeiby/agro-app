import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const PlotlandTable: React.FC = () => {
    return (
        <div>
            Tabla de plotland
            <QuerysView typeEntities={EntityRelated.PLOTLAND} entys={path_name.plotlands}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default PlotlandTable;
