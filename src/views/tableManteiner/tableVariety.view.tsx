import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const varietyTable: React.FC = () => {
    return (
        <div>
            Tabla de variedades
            <QuerysView typeEntities={EntityRelated.VARIETY} entys={path_name.varietys}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default varietyTable;
