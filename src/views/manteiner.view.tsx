import * as React from "react";
import Form from "../components/forms";
import Logo from "../config/logos/aresa.e3676c3d.png";
// import Label from "../components/label/index";

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
                                label: "Nombre Sector",
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
                                label: "Nombre Especie",
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            {
                                label: "Abreviación Especie",
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
                                label: "Nombre Evento Fenologico",
                                name: "name",
                                placeholder: "Escribir Nombre",
                                type: "text",
                            },
                            {
                                label: "Abreviación del Evento",
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
                        message="Formulario Entidades Certificadas"
                        logo={Logo}
                        fields={[
                            {
                                label: "Nombre Entidad Certificada",
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                            {
                                label: "Abreviación Entidad",
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
                                label: "Nombre Objetivo de Aplicación",
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
                                label: "Nombre Cuartel",
                                name: "name",
                                placeholder: "Escribir nombre",
                                type: "text",
                            },
                            {
                                label: "Numero de Plantas",
                                name: "numberOfPlants",
                                placeholder: "Ingresa el numero de plantas",
                                type: "number",
                            },
                            {
                                label: "Hectarias",
                                name: "hectares",
                                placeholder: "Ingresa el numero de Hectarias",
                                type: "number",
                            },
                            {
                                label: "Año plantación",
                                name: "plantingYear",
                                placeholder: "Escribir el año de plantación",
                                type: "number",
                            },
                        ]}
                        dropdowns={[
                            {
                                label: "Parcela",
                                name: "idPlotLand",
                                placeholder: "Selecciona una Parcela",
                                options: [
                                    {
                                        label: "plotland 1",
                                        value: "plotland 1",
                                    },
                                    {
                                        label: "plotland 2",
                                        value: "plotland 2",
                                    },
                                    {
                                        label: "plotland 3",
                                        value: "plotland 3",
                                    },
                                ],
                            },
                            {
                                label: "Variedad",
                                name: "idVariety",
                                placeholder: "Selecciona una Variedad",
                                options: [
                                    { label: "variety 1", value: "variety 1" },
                                    { label: "variety 2", value: "variety 2" },
                                    { label: "variety 3", value: "variety 3" },
                                ],
                            },
                            {
                                label: "Polinizador",
                                name: "idPollinator",
                                placeholder: "Selecciona un Polinizador",
                                options: [
                                    {
                                        label: "pollinator 1",
                                        value: "pollinator 1",
                                    },
                                    {
                                        label: "pollinator 2",
                                        value: "pollinator 2",
                                    },
                                    {
                                        label: "pollinator 3",
                                        value: "pollinator 3",
                                    },
                                ],
                            },
                            {
                                label: "Portainjertos",
                                name: "idRootstock",
                                placeholder: "Selecciona un Portainjertos",
                                options: [
                                    {
                                        label: "rootstock 1",
                                        value: "rootstock 1",
                                    },
                                    {
                                        label: "rootstock 2",
                                        value: "rootstock 2",
                                    },
                                    {
                                        label: "rootstock 3",
                                        value: "rootstock 3",
                                    },
                                ],
                            },
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
                                label: "Nombre Categoria de Ingrediente",
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
