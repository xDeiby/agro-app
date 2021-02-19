import { EntityRelated, mdm } from "@trifenix/agro-data";
import * as React from "react";
import { useLocation, useParams } from "react-router";
import Form from "../../../components/forms/form";
import Logo from "../../../config/logos/aresa.e3676c3d.png";

const FormMachine: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	const location = useLocation().pathname.split("/");

	const entity = mdm.indexes.find((entity) => entity.pathName === location[2])?.index;

	return (
		<Form
			pathname={`${location[1]}/${location[2]}`}
			currentEntity={entity as EntityRelated}
			logo={Logo}
			currentId={id}
		/>
	);
};

export default FormMachine;
