import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const varietyTable: React.FC = () => {
    return (
        <div>
            Tabla de variedades
            <QuerysView typeEntities={EntityRelated.VARIETY}> </QuerysView>
        </div>
    );
};

export default varietyTable;
