import { EntityRelated, mdm } from "@trifenix/agro-data";
import React from "react";
import { useLocation } from "react-router";
import ManteinerTable from "../../../controllers/tables/manteiners/manteiner-table";

const TableSimple: React.FC = () => {
	// const route = getEntityMetadata(entity).pathName;
	const location = useLocation().pathname.split("/");

	const entity = mdm.indexes.find((entity) => entity.pathName === location[2])?.index;
	console.log(entity);

	return (
		<ManteinerTable
			pathname={`/${location[1]}/${location[2]}`}
			currentEntity={entity as EntityRelated}
		/>
	);
};

export default TableSimple;
