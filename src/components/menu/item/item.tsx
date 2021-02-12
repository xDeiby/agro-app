import * as React from "react";
import SubMenu from "../sub-menu";
import { StyledItem, StyledListLink, TypeMenus } from "./item.style";

export type TypeItem = "menuItem" | "subMenuItem";

export type ISubMenu = {
	name: string;
	url?: string;
	// Mas...
};

interface IItemProps {
	name?: string;
	active?: boolean;
	type?: TypeItem;
	subMenus?: ISubMenu[];
	TypeMenus: TypeMenus;
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
	const { name, subMenus, active = false } = props;
	return (
		<StyledListLink>
			<StyledItem active={active} styledItem={props.TypeMenus}>
				{name}
			</StyledItem>

			{/* Sub Menus */}

			{subMenus && <SubMenu menus={subMenus} />}
		</StyledListLink>
	);
};

export default Item;
