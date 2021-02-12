import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from ".";
import styled from "styled-components";
// import DownloadIcon from '../../icons/Download';
import { Download } from "@styled-icons/fa-solid/Download";
export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Default Button",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
    children: "Danger Button",
    typeButton: "danger",
};

export const Ghost = Template.bind({});
Ghost.args = {
    children: "Ghost Button",
    typeButton: "ghost",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary Button",
    typeButton: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Disabled Button",
    disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
    children: "Button",
    loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: Download,
    children: "Download",
};

const ButtonRow = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    & > * {
        margin-right: 10px;
    }
`;

export const Sizes: React.FC = () => {
    return (
        <>
            <ButtonRow>
                <Button size="large">Large</Button>
                <Button size="default">Default</Button>
                <Button size="small">Small</Button>
            </ButtonRow>
            <ButtonRow>
                <Button typeButton="danger" size="large">
                    Large
                </Button>
                <Button typeButton="danger" size="default">
                    Default
                </Button>
                <Button typeButton="danger" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button typeButton="ghost" size="large">
                    Large
                </Button>
                <Button typeButton="ghost" size="default">
                    Default
                </Button>
                <Button typeButton="ghost" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button typeButton="secondary" size="large">
                    Large
                </Button>
                <Button typeButton="secondary" size="default">
                    Default
                </Button>
                <Button typeButton="secondary" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button loading disabled size="large">
                    Large
                </Button>
                <Button loading disabled size="default">
                    Default
                </Button>
                <Button loading disabled size="small">
                    Small
                </Button>
            </ButtonRow>
        </>
    );
};
