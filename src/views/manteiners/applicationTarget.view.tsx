import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const ApplicationTarget: React.FC = () => {
    return (
        <Form
            message="Formulario Objetivos de Aplicación"
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
