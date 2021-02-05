import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const ActiveIngredientTable: React.FC = () => {
    return (
        <QuerysView typeEntities={EntityRelated.INGREDIENT} entys={path_name.active_ingredients}>
            {" "}
        </QuerysView>
    );
};

export default ActiveIngredientTable;
