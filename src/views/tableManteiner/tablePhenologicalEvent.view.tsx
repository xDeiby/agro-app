import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const PhenologicalEventTable: React.FC = () => {
    return (
        <div>
            Tabla de Eventos Fenologicos
            <QuerysView typeEntities={EntityRelated.PHENOLOGICAL_EVENT}> </QuerysView>
        </div>
    );
};

export default PhenologicalEventTable;
