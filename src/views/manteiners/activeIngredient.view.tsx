import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const ActiveIngredient: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];

    return (
        <Form
            message="Formulario Ingredientes Activos"
            pathname={path}
            logo={Logo}
            fields={[
                {
                    label: "Nombre Ingrediente Activo",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Categoria",
                    name: "idCategory",
                    placeholder: "Selecciona una Categoria",
                    options: [
                        {
                            label: "category 1",
                            value: "category 1",
                        },
                        {
                            label: "category 2",
                            value: "category 2",
                        },
                        {
                            label: "category 3",
                            value: "category 3",
                        },
                    ],
                },
            ]}
        />
    );
};

export default ActiveIngredient;
