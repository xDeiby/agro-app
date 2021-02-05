import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const RootstockTable: React.FC = () => {
    return (
        <div>
            Tabla de especies
            <QuerysView typeEntities={EntityRelated.ROOTSTOCK} entys={path_name.rootstocks}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default RootstockTable;
