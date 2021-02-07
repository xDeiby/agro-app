import styled from "styled-components";

export const StyledSubA = styled.a`
	display: block;
	border-radius: 5px;
	padding: 8px 0px;
	text-decoration: none;
	&:hover {
		color: #6dce0e;
	}
	cursor: pointer;
`;

export const StyledSubLi = styled.li`
	margin-bottom: 5px;
	// padding: 5px 0px;
	display: inline-block;
	border-bottom: 1px solid rgba(7, 255, 69, 0.8);
`;

export const StyledSubUl = styled.ul`
	display: none;
	border-radius: 10px;
`;
