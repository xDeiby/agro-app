import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Plotlands: React.FC = () => {
    return (
        <Form
            message="Formulario Parcelas"
            logo={Logo}
            fields={[
                {
                    label: "Nombre Parcela",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Sector",
                    name: "idSector",
                    placeholder: "Selecciona un Sector",
                    options: [
                        { label: "sector 1", value: "sector 1" },
                        { label: "sector 2", value: "sector 2" },
                        { label: "sector 3", value: "sector 3" },
                    ],
                },
            ]}
        />
    );
};

export default Plotlands;
