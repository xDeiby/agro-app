import React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: "Components/Form",
    component: Form,
} as Meta;
export const Fields: React.FC = () => {
    return (
        <Form
            message="Formulario"
            logo={Logo}
            fields={[
                {
                    label: "Nombre",
                    name: "name",
                    placeholder: "Escribe el nombre",
                    type: "text",
                },
            ]}
        />
    );
};

export const FieldsAndDropdowns: React.FC = () => {
    return (
        <Form
            message="Formulario"
            logo={Logo}
            fields={[
                {
                    label: "",
                    name: "",
                    placeholder: "",
                    type: "text",
                },
            ]}
            dropdowns={[
                {
                    label: "Option",
                    name: "idOption",
                    placeholder: "Select an option",
                    options: [
                        { label: "option 1", value: "option 1" },
                        { label: "option 2", value: "option 2" },
                        { label: "option 3", value: "option 3" },
                    ],
                },
            ]}
        />
    );
};

export const FieldsAndDatepicker: React.FC = () => {
    return (
        <Form
            message="Formulario"
            logo={Logo}
            fields={[
                {
                    label: "",
                    name: "",
                    placeholder: "",
                    type: "text",
                },
            ]}
            datePicker={[
                {
                    label: "date",
                    name: "idDate",
                    placeholder: "select date",
                    startDate: "begin",
                    endDate: "finish",
                },
            ]}
        />
    );
};
