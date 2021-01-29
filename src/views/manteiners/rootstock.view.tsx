import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Plotlands: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];

    return (
        <Form
            message="Formulario Portainjertos"
            pathname={path}
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
