import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Sector: React.FC = () => {
    return (
        <Form
            message="Formulario Sector"
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
