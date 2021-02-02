import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Plotlands: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Portainjertos"
            pathname={path_name.rootstocks}
            logo={Logo}
            currentEntity={EntityRelated.ROOTSTOCK}
            fields={[
                {
                    label: "Nombre Portainjertos",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Portainjertos",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Portainjertos"
            pathname={path_name.rootstocks}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.ROOTSTOCK}
            fields={[
                {
                    label: "Nombre Portainjertos",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Portainjertos",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    );
};

export default Plotlands;
