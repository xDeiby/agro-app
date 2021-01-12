import * as React from "react";
import { StyledList, StyledMenuItem } from "./menuItem..style";

export interface IMenuItemProps {
    children: React.ReactNode;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = (props) => {
    const { children } = props;

    return (
        <StyledMenuItem>
            <StyledList>{children}</StyledList>
        </StyledMenuItem>
    );
};

export default MenuItem;
