import styled from "styled-components";
import { StyledSubUl } from "../sub-menu/subMenu.style";
export type TypeMenus = "menu" | "burger";
export const TypeStyle: { [key in TypeMenus]: IStyledItem } = {
	menu: {
		display: "none",
	},
	burger: {
		display: "flex",
	},
};
interface StyledItemProps {
	styledItem: TypeMenus;
	name?: string;
	textColor?: string;
	active?: boolean;
}
interface IStyledItem {
	padding?: string;
	display?: string;
	marginLeft?: string;
	textDecoration?: string;
	color?: string;
	letterSpacing?: string;
	borderRadius?: string;
	borderLeft?: string;
	backgroundColor?: string;
	position?: string;
	listStyle?: string;
	flexDecoration?: string;
	textAlign?: string;
	top?: string;
	left?: string;
	paddingTop?: string;
	borderTopStyle?: string;
	zIndex?: string;
}

export const StyledItem = styled.a<StyledItemProps>`
	/* display: inline-block; */
	padding: 5px 22px;
	display: block;
	margin-left: 5px;
	text-decoration: none;
	color: ${(pr) => (pr.textColor ? pr.textColor : "white")};
	letter-spacing: 0em;
	/* display: block; */
	border-radius: 5px;
	border-left: 2px solid green;

	&:hover {
		background-color: #6dce0e;
		color: black;
	}

	${(pr) =>
		pr.active &&
		`
        background-color: #6DCE0E;
        color: black;

    `}
	@media only screen and (max-width: 768px) {
		display: ${(pr) => TypeStyle[pr.styledItem].display};
		border-left: 0px;

		&:hover {
			background-color: transparent;
			color: white;
		}
	}
`;

export const StyledListLink = styled.li`
	display: inline-block;
	position: relative;

	:hover ${StyledSubUl} {
		list-style: outside none none;
		display: flex;
		flex-direction: column;
		position: absolute;
		text-align: center;
		text-decoration: none;
		top: 29px;
		left: 6px;
		padding-top: 36.5px;
		border-top-style: unset;
		color: rgb(255, 255, 255);
		background-color: rgba(0, 0, 0, 0.8);
		padding: 5px;
		z-index: 100;

		@media only screen and (max-width: 768px) {
			/* left: -180px; */
			position: relative;
			background-color: transparent;
			justify-content: space-between;
			top: 0px;
		}
	}
`;
