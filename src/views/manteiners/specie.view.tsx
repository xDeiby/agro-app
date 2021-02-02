import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Species: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario de Especies"
            pathname={path_name.species}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.SPECIE}
            fields={[
                {
                    label: "Nombre Especie",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Especie",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario de Especies"
            pathname={path_name.species}
            logo={Logo}
            currentEntity={EntityRelated.SPECIE}
            fields={[
                {
                    label: "Nombre Especie",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Especie",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    );
};

export default Species;
