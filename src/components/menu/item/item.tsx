import * as React from "react";
import SubMenu from "../sub-menu";
import { StyledItem, StyledListLink } from "./item.style";

export type TypeItem = "menuItem" | "subMenuItem";

export type ISubMenu = {
    name: string;
    // Mas...
};

interface IItemProps {
    name?: string;
    active?: boolean;
    type?: TypeItem;
    subMenus?: ISubMenu[];
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
    const { name, subMenus, active = false, type = "menuItem" } = props;
    return (
        <StyledListLink>
            <StyledItem active={active}>{name}</StyledItem>

            {/* Sub Menus */}

            {subMenus && <SubMenu menus={subMenus} />}
        </StyledListLink>
    );
};

export default Item;
