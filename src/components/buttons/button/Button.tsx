import React, { MouseEventHandler } from "react";
import StyledButton, { TypeButton, styloIcon } from "./styled.Boton";
import { CheckCircle } from "@styled-icons/boxicons-regular/CheckCircle";
import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";
import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { User } from "@styled-icons/fa-solid/User";
import { Add } from "@styled-icons/material-rounded/Add";
import { Delete } from "@styled-icons/material-outlined/Delete";
import { HomeCircle } from "@styled-icons/boxicons-regular/HomeCircle";
import { Save } from "@styled-icons/feather/Save";
import { Eye } from "@styled-icons/fa-solid/Eye";

interface IPropertys {
	color?: string;
	typeButton: TypeButton;
	width?: string;
	fontSize?: string;
	paddingf?: string;
	backgroundColor?: string;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	display?: string;
	maxWidth?: string;
	marginLeft?:string;
	marginRight?:string;

}
interface IMouseEvents {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type IButton = IPropertys & IMouseEvents;

const Boton: React.FC<IButton> = (props) => {
	const { children } = props;

	switch (props.typeButton) {
		case "accept":
			return (
				<StyledButton {...props}>
					<CheckCircle size="21px" style={styloIcon} /> {children}
				</StyledButton>
			);

		case "deny":
			return (
				<StyledButton {...props}>
					<CancelCircle size="19px" style={styloIcon} />
					{children}
				</StyledButton>
			);

		case "user":
			return (
				<StyledButton {...props}>
					<User size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);

		case "login":
			return (
				<StyledButton {...props}>
					<LogIn size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);
		case "add":
			return (
				<StyledButton {...props}>
					<Add size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);
		case "delete":
			return (
				<StyledButton {...props}>
					<Delete size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);
		case "home":
			return (
				<StyledButton {...props}>
					<HomeCircle size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);
		case "save":
			return (
				<StyledButton {...props}>
					<Save size="20px" style={styloIcon} />
					{children}
				</StyledButton>
			);
			case "view":
				return (
					<StyledButton {...props}>
						<Eye size="20px" style={styloIcon} />
						{children}
					</StyledButton>
				);

		case "default":
			return <StyledButton {...props}>{children}</StyledButton>;

		default:
			break;
	}
	return <StyledButton {...props}>{children}</StyledButton>;
};
export default Boton;
