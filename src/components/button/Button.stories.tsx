import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { IButton } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    typeButton: "deny",
    children: "Example",
    backgroundColor: "red",
    color: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
    typeButton: "usuario",
    children: "Example",
};

export const Three = Template.bind({});
Three.args = {
    typeButton: "default",
    children: "Example 3",
};

export const Large = Template.bind({});
Large.args = {
    typeButton: "login",
    children: "Example 3",
};

// export const Small = Template.bind({});
// Small.args = {
//     size: "small",
//     label: "Button",
// };
