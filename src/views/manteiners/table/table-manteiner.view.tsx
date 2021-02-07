import { EntityRelated, mdm } from "@trifenix/agro-data";
import React from "react";
import { useLocation } from "react-router";
import Table from "../../../components/table";

const TableManteiner: React.FC = () => {
	// const route = getEntityMetadata(entity).pathName;
	const location = useLocation().pathname.split("/");

	const entity = mdm.indexes.find((entity) => entity.pathName === location[2])?.index;
	console.log(entity);

	return (
		<Table
			pathname={`/${location[1]}/${location[2]}`}
			currentEntity={entity as EntityRelated}
		/>
	);
};

export default TableManteiner;
