import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const CategoryIngredient: React.FC = () => {
    return (
        <Form
            message="Formulario Categoria de Ingredientes"
            logo={Logo}
            fields={[
                {
                    label: "Nombre Categoria de Ingrediente",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
            ]}
        />
    );
};

export default CategoryIngredient;
