import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Varietys: React.FC = () => {
    return (
        <Form
            message="Formulario Variedades"
            logo={Logo}
            fields={[
                {
                    label: "Nombre Variedad",
                    name: "name",
                    placeholder: "Escribe un nombre",
                    type: "text",
                },
                {
                    label: "Abreviación Variedad",
                    name: "abbreviation",
                    placeholder: "Ingresa una Abreviación",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Especie",
                    name: "idSpecie",
                    placeholder: "Selecciona una Especia",
                    options: [
                        { label: "specie 1", value: "specie 1" },
                        { label: "specie 2", value: "specie 2" },
                        { label: "specie 3", value: "specie 3" },
                    ],
                },
            ]}
        />
    );
};

export default Varietys;
