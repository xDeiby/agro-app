import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Species: React.FC = () => {
    return (
        <Form
            message="Formulario de Especies"
            logo={Logo}
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
