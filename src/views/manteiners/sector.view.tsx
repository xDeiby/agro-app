import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Sector: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];

    return (
        <Form
            message="Formulario Sector"
            pathname={path}
            logo={Logo}
            fields={[
                {
                    label: "Nombre Sector",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
        />
    );
};

export default Sector;
