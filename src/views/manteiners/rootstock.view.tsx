import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Plotlands: React.FC = () => {
    return (
        <Form
            message="Formulario Portainjertos"
            logo={Logo}
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
