import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const sectorTable: React.FC = () => {
    return (
        <div>
            Tabla de sector
            <QuerysView typeEntities={EntityRelated.SECTOR}> </QuerysView>
        </div>
    );
};

export default sectorTable;
