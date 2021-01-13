import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { IButton } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        //backgroundColor: { control: "color" },
    },
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Accept = Template.bind({});
Accept.args = {
    typeButton: "accept",
    children: "User",
};

export const Decline = Template.bind({});
Decline.args = {
    typeButton: "deny",
    children: "Decline",
};

export const user = Template.bind({});
user.args = {
    typeButton: "user",
    children: "User",
};

export const Default = Template.bind({});
Default.args = {
    typeButton: "default",
    children: "Default",
};

export const Login = Template.bind({});
Login.args = {
    typeButton: "login",
    children: "Login",
};

export const Add = Template.bind({});
Add.args = {
    typeButton: "add",
    children: "Add",
};
export const Delete = Template.bind({});
Delete.args = {
    typeButton: "delete",
    children: "Delete",
};
// export const Small = Template.bind({});
// Small.args = {
//     size: "small",
//     label: "Button",
// };
