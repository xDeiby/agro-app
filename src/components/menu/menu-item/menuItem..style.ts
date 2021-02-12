import styled from "styled-components";

export type TypePositions = "default" | "primary";

interface StyledMenuItemProps {
	position?: TypePositions;
}

export const StyledMenuItem = styled.nav<StyledMenuItemProps>`
	text-decoration: none;
	margin-left: 0px;
	list-style: none;
`;

export const StyledList = styled.ul`
	list-style: none;
	padding: 0px;
`;
