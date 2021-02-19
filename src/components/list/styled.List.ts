import styled from "styled-components";

export const StyledContainer = styled.div`
	margin: 0 auto;
	padding: 64px 64px;
	max-width: 90%;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px 10px 0 0;
`;

export const StyledBox = styled.div`
	margin: 10px 0;
	padding: 16px;
	border-radius: 4px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	&:hover {
		background-color: #36c76c;
		color: #ffff;
	}
`;
