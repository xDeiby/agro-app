import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import QuerysView from "../../components/mapTableFunction/mapTableFunction";

const SeasonTable: React.FC = () => {
    return <QuerysView typeEntities={EntityRelated.SEASON}></QuerysView>;
};

export default SeasonTable;
