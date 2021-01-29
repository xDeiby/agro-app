import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const ApplicationTarget: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];
    return (
        <Form
            message="Formulario Objetivos de Aplicación"
            pathname={path}
            logo={Logo}
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
