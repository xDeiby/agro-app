import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const ActiveIngredientTable: React.FC = () => {
    return <QuerysView typeEntities={EntityRelated.INGREDIENT}> </QuerysView>;
};

export default ActiveIngredientTable;
