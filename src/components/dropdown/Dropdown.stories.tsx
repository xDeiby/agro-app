import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Dropdown, { IAutoComplete } from "./Dropdown";

export default {
    title: "Example/Dropdown",
    component: Dropdown,
    argTypes: {},
} as Meta;

const Template: Story<IAutoComplete> = (args) => <Dropdown {...args} />;

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {
    options: ["pete"],
};
