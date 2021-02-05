import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";
import { path_name } from "../../config/statics";

const SeasonTable: React.FC = () => {
    return <QuerysView typeEntities={EntityRelated.SEASON} entys={path_name.seasons}></QuerysView>;
};

export default SeasonTable;
