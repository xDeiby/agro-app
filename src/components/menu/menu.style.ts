import styled from "styled-components";
import { MenuType } from "./menu";

export interface StyledMenuProps {
	as?: string;
	type?: MenuType;
}
interface IImage {
	height?: string;
	width?: string;
	src?: string;
	position?: string;
}
export const StyledImage = styled.img<IImage>`
	src: ${(pr) => (pr.src ? pr.src : "")};
	width: ${(pr) => (pr.width ? pr.width : "150px")};
	@media only screen and (max-width: 768px) {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
`;
export const StyledMenu = styled.div<StyledMenuProps>`
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 16px;
`;
