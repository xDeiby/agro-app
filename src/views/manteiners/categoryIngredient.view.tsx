import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const CategoryIngredient: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Categoria de Ingredientes"
            pathname={path_name.category_ingredients}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.CATEGORY_INGREDIENT}
            fields={[
                {
                    label: "Nombre Categoria de Ingrediente",
                    name: "name",
                    placeholder: "Escribir nombre",
                    type: "text",
                },
            ]}
        />
    ) : (
        <Form
            message="Formulario Categoria de Ingredientes"
            pathname={path_name.category_ingredients}
            logo={Logo}
            currentEntity={EntityRelated.CATEGORY_INGREDIENT}
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
