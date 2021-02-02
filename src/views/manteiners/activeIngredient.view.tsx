import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const ActiveIngredient: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Ingredientes Activos"
            pathname={path_name.active_ingredients}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.INGREDIENT}
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
                    entity: EntityRelated.CATEGORY_INGREDIENT,
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
    ) : (
        <Form
            message="Formulario Ingredientes Activos"
            pathname={path_name.active_ingredients}
            logo={Logo}
            currentEntity={EntityRelated.INGREDIENT}
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
                    entity: EntityRelated.CATEGORY_INGREDIENT,
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
