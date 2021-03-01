import { EntityRelated, mdm } from "@trifenix/agro-data";
import React from "react";
import { useLocation,useHistory } from "react-router";
import Boton from "../../../components/buttons/button/Button";
import ManteinerTable from "../../../controllers/tables/manteiners/manteiner-table";

const TableSimple: React.FC = () => {
	// const route = getEntityMetadata(entity).pathName;
	const history = useHistory();
	
	const redirect = () => {
		history.push(`/${location[1]}/${location[2]}/add`)
	}
	
	const location = useLocation().pathname.split("/");

	const entity = mdm.indexes.find((entity) => entity.pathName === location[2])?.index;
	console.log(entity);
	return (
		<>

			<ManteinerTable
				pathname={`/${location[1]}/${location[2]}`}
				currentEntity={entity as EntityRelated}
			/>
			<div style={{width:"90%", margin:"auto", textAlign:"end"}}>
				<Boton typeButton="add" marginLeft="0" marginRight="0" onClick={redirect}>Agregar</Boton>
			</div>

		</>
		);
};

export default TableSimple;
