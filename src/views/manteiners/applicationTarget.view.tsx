import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const ApplicationTarget: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Objetivos de Aplicación"
            pathname={path_name.application_targets}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.TARGET}
            fields={[
                {
                    label: "Nombre Objetivo de Aplicación",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Objetivos de Aplicación"
            pathname={path_name.application_targets}
            logo={Logo}
            currentEntity={EntityRelated.TARGET}
            fields={[
                {
                    label: "Nombre Objetivo de Aplicación",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
            ]}
        />
    );
};

export default ApplicationTarget;
