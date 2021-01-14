import * as React from "react";
import Form from "../components/forms";
import Logo from "../config/logos/aresa.e3676c3d.png";

export type ManteinerType =
    | "sector"
    | "specie"
    | "variety"
    | "rootstock"
    | "plotlands"
    | "phenological_event"
    | "certifie_entitie"
    | "barrack"
    | "application_target"
    | "active_ingredient"
    | "category_ingredients";

interface IManteinerView {
    type: ManteinerType;
}

const Manteiner: React.FC<IManteinerView> = (props) => {
    const { type } = props;

    switch (type) {
        case "sector":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Sector"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribe el nombre",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        case "specie":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario de Especies"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            {
                                name: "abbreviation",
                                placeholder: "Escribir una Abreviación",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        // Falta Dropdown
        case "variety":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Variedades"
                        logo={Logo}
                        fields={[
                            {
                                name: "name_sector",
                                placeholder: "Escribe un nombre",
                                type: "text",
                            },
                            {
                                name: "abbreviation",
                                placeholder: "Ingresa una Abreviación",
                                type: "text",
                            },
                            // ...dropdown specie
                        ]}
                    />
                </div>
            );

        case "rootstock":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Portainjertos"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            {
                                name: "abbreviation",
                                placeholder: "Escribir una Abreviación",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        case "plotlands":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Parcelas"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            // ...DropDown Sector
                        ]}
                    />
                </div>
            );

        case "phenological_event":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Eventos Fenologicos"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            {
                                name: "abbreviation",
                                placeholder: "Escribir una Abreviación",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        case "certifie_entitie":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Entidades "
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                            {
                                name: "abbreviation",
                                placeholder: "Escribir una abreviación",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        case "application_target":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Objetivos de Aplicación"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        case "active_ingredient":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Ingredientes Activos"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                            // ...dropdowns de categorias
                        ]}
                    />
                </div>
            );

        case "barrack":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Cuarteles"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                            {
                                name: "numberOfPlants",
                                placeholder: "Ingresa el numero de plantas",
                                type: "number",
                            },
                            {
                                name: "hectares",
                                placeholder: "Ingresa el numero de Hectarias",
                                type: "number",
                            },
                            {
                                name: "plantingYear",
                                placeholder: "Escribir el año de plantacion",
                                type: "number",
                            },
                            // ...dropdowns parcelas
                            // ...dropdowns variedades
                            // ...dropdowns polinizador
                            // ...dropdowns portainjertos
                        ]}
                    />
                </div>
            );

        case "category_ingredients":
            return (
                <div className="manteiner">
                    <Form
                        message="Formulario Categoria de Ingredientes"
                        logo={Logo}
                        fields={[
                            {
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                        ]}
                    />
                </div>
            );

        default:
            return (
                <div>
                    NO EXISTE ESTE MANTENEDOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                </div>
            );
    }
};

export default Manteiner;
