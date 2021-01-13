import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Label, { IFloatingLabel } from "./Label";

export default {
    title: "Example/Label",
    component: Label,
    argTypes: {},
} as Meta;

const Template: Story<IFloatingLabel> = (args) => <Label {...args} />;

export const LabelFloating = Template.bind({});
LabelFloating.args = {
    children: "Example",
};
