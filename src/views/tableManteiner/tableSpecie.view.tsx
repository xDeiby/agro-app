import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const SpecieTable: React.FC = () => {
    return (
        <div>
            Tabla de especies
            <QuerysView typeEntities={EntityRelated.SPECIE}> </QuerysView>
        </div>
    );
};

export default SpecieTable;
