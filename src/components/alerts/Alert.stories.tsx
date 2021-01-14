import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Alerts, { IPropsAlert } from "./Alerts";

export default {
    title: "Example/Alerts",
    component: Alerts,
    argTypes: {},
} as Meta;

const Template: Story<IPropsAlert> = (args) => <Alerts {...args} />;

export const AlertSucces = Template.bind({});
AlertSucces.args = {
    typeAlert: "succesful",
    children: "Se ha añadido correctamente el producto",
};
export const AlertError = Template.bind({});
AlertError.args = {
    typeAlert: "error",
    children: "Se ha producido un error al cargar el producto",
};
export const AlertWarning = Template.bind({});
AlertWarning.args = {
    typeAlert: "warning",
    children: "Un campo de texto esta incompleto, porfavor rellenelo",
};
