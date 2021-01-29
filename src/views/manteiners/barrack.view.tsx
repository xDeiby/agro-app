import * as React from "react";
import { useLocation } from "react-router";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const Barracks: React.FC = () => {
    const path = useLocation().pathname.split("/")[2];

    return (
        <Form
            message="Formulario Cuarteles"
            pathname={path}
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
    );
};

export default Barracks;
