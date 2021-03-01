import styled from "styled-components";

export type TypeButton =
	| "default"
	| "accept"
	| "add"
	| "deny"
	| "login"
	| "user"
	| "delete"
	| "save"
	| "home"
	| "view"

const TypeStyle: { [key in TypeButton]: IModelButton } = {
	accept: {
		color: "white",
		backgroundColor: "#108128",
	},
	deny: {
		color: "white",
		backgroundColor: "#D62A2A",
	},
	login: {
		color: "white",
		backgroundColor: " #337aff",
	},
	user: {
		color: "black",
		backgroundColor: "#F2F8F7",
	},
	default: {
		color: "#fff",
		backgroundColor: "#e4335f",
	},
	add: {
		color: "white",
		backgroundColor: "#009879",
	},
	delete: {
		color: "white",
		backgroundColor: "#D62A2A",
	},
	home: {
		color: "white",
		backgroundColor: "#62bd50",
	},
	save: {
		color: "white",
		backgroundColor: "#009879",
	},
	view: {
		color:"black",
		backgroundColor: "#C8C7CA",
	}
};
export const styloIcon = {
	marginRight: 5,
};
interface IModelButton {
	color?: string;
	backgroundColor?: string;
}

interface IStyledButton extends IModelButton {
	border?: string;
	typeButton: TypeButton;
	borderRadius?: string;
	width?: string;
	fontSize?: string;
	paddingf?: string;
	margin?: string;
	marginLeft?: string;
	className?: string;
	display?: string;
	maxWidth?: string;
	marginRight?:string;
	float?:string;
}
const StyledButton = styled.button<IStyledButton>`
	border: ${(pr) => (pr.border ? pr.border : "none")};
	border-radius: ${(pr) => (pr.borderRadius ? pr.borderRadius : "6")}px;
	color: ${(pr) => TypeStyle[pr.typeButton].color};
	width: ${(pr) => (pr.width ? pr.width : "150")}px;
	margin: ${(pr) => (pr.margin ? pr.margin : "10")}px;
	margin-left: ${(pr) => (pr.marginLeft ? pr.marginLeft : "10")}px;
	margin-right: ${(pr) => (pr.marginRight ? pr.marginRight : "10")}px;
	font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "13")}px;
	padding: ${(pr) => (pr.paddingf ? pr.paddingf : "10")}px;
	background-color: ${(pr) => TypeStyle[pr.typeButton].backgroundColor};
	float: ${(pr) => (pr.float ? pr.float : "")};
	&:hover {
		opacity: 0.8;
		transition: 0.5s;
		box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
	}
	${(pr) =>
		pr.disabled
			? `background-color: white;
            color: black;
            border: 1.5px solid #697367;
            &:hover {
                opacity: 1;
                transition: 0.5s;
                box-shadow: none;}
            `
			: `
    `}
	@media only screen and (max-width: 768px) {
		display: ${(pr) => (pr.display ? pr.display : "none")};
	}
`;

export default StyledButton;
