import React from "react";
import { useHistory } from "react-router";
import { ISubMenu } from "../item";
import { StyledSubA, StyledSubLi, StyledSubUl } from "./subMenu.style";

interface ISubMenuProps {
	menus: ISubMenu[];
}

const SubMenu: React.FunctionComponent<ISubMenuProps> = (props) => {
	const { menus } = props;
	const history = useHistory();
	return (
		<StyledSubUl>
			{menus.map((menu: ISubMenu) => (
				<StyledSubLi key={Math.random()}>
					<StyledSubA onClick={() => history.push(menu.url ? menu.url : "/")}>
						{menu.name}
					</StyledSubA>
				</StyledSubLi>
			))}
		</StyledSubUl>
	);
};

export default SubMenu;
