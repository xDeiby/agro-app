import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const categoryIngredientTable: React.FC = () => {
    return (
        <div>
            Tabla de categoria de Ingredientes
            <QuerysView typeEntities={EntityRelated.CATEGORY_INGREDIENT}> </QuerysView>
        </div>
    );
};

export default categoryIngredientTable;
