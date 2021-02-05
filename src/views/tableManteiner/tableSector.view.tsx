import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const sectorTable: React.FC = () => {
    return (
        <div>
            Tabla de sector
            <QuerysView typeEntities={EntityRelated.SECTOR} entys={path_name.sectors}></QuerysView>
        </div>
    );
};

export default sectorTable;
