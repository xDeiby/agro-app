import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const SpecieTable: React.FC = () => {
    return (
        <div>
            Tabla de especies
            <QuerysView typeEntities={EntityRelated.SPECIE} entys={path_name.species}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default SpecieTable;
