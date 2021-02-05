import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const PhenologicalEventTable: React.FC = () => {
    return (
        <div>
            Tabla de Eventos Fenologicos
            <QuerysView typeEntities={EntityRelated.PHENOLOGICAL_EVENT} entys={path_name.phenological_events}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default PhenologicalEventTable;
