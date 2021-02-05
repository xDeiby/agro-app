import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const categoryIngredientTable: React.FC = () => {
    return (
        <div>
            Tabla de categoria de Ingredientes
            <QuerysView typeEntities={EntityRelated.CATEGORY_INGREDIENT} entys={path_name.category_ingredients}>
                {" "}
            </QuerysView>
        </div>
    );
};

export default categoryIngredientTable;
