import * as React from "react";
import { EntityRelated } from "@trifenix/agro-data";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const BarrackTable: React.FC = () => {
    return (
        <div>
            <QuerysView typeEntities={EntityRelated.BARRACK}> </QuerysView>
        </div>
    );
};

export default BarrackTable;
