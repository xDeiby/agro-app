import React from "react";
import { ISubMenu } from "../item";
import { StyledSubA, StyledSubLi, StyledSubUl } from "./subMenu.style";

interface ISubMenuProps {
    menus: ISubMenu[];
}

const SubMenu: React.FunctionComponent<ISubMenuProps> = (props) => {
    const { menus } = props;
    return (
        <StyledSubUl>
            {menus.map((item: ISubMenu) => (
                <StyledSubLi key={Math.random()}>
                    <StyledSubA to={item.url}>{item.name}</StyledSubA>
                </StyledSubLi>
            ))}
        </StyledSubUl>
    );
};

export default SubMenu;
