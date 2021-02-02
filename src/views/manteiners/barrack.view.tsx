import { EntityRelated } from "@trifenix/agro-data";
import * as React from "react";
import { useParams } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { path_name } from "../../config/statics/path_names";

const Barracks: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return id ? (
        <Form
            message="Formulario Cuarteles"
            pathname={path_name.barracks}
            logo={Logo}
            id_entity={id}
            currentEntity={EntityRelated.BARRACK}
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
                    entity: EntityRelated.PLOTLAND,
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
                    entity: EntityRelated.VARIETY,
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
                    entity: EntityRelated.POLLINATOR,
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
                    entity: EntityRelated.ROOTSTOCK,
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
    ) : (
        <Form
            message="Formulario Cuarteles"
            pathname={path_name.barracks}
            logo={Logo}
            currentEntity={EntityRelated.BARRACK}
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
                    entity: EntityRelated.PLOTLAND,
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
                    entity: EntityRelated.VARIETY,
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
                    entity: EntityRelated.POLLINATOR,
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
                    entity: EntityRelated.ROOTSTOCK,
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
    );
};

export default Barracks;
