import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import PageNotFound from "./PageNotFound";

export default {
    title: "Components/pageNotFound",
    component: PageNotFound,
    argTypes: {},
} as Meta;

export const pageNotFound: React.FC = () => {
    return (
        <PageNotFound>
            La pagina a la que quiere acceder no esta disponible!
        </PageNotFound>
    );
};
