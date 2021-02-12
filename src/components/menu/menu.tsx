import { ReactNode } from "react";
import { StyledMenu, StyledImage } from "./menu.style";
import logoAresa from "../../config/logos/aresa.e3676c3d.png";
export type MenuType = "primary" | "secondary" | "default";
// export type ItemsPosition = "center" | "left" | "right";

export interface MenuPropertys {
	type?: MenuType;
	className?: string;
	children?: ReactNode;
	// position? : ItemsPosition;
}

// El menu
const Menu: React.FunctionComponent<MenuPropertys> = (props) => {
	const {
		children,
		className,
		type = "default",
		// position = "left"
	} = props;

	return (
		<StyledMenu className={className} type={type}>
			<StyledImage src={logoAresa}></StyledImage>
			{children}
		</StyledMenu>
	);
};

export default Menu;
