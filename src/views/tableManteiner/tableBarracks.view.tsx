import * as React from "react";
import { EntityRelated } from "@trifenix/agro-data";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const BarrackTable: React.FC = () => {
    return (
        <div>
            <QuerysView typeEntities={EntityRelated.BARRACK} entys={path_name.barracks}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default BarrackTable;
