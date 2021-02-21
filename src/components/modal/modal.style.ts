import styled from "styled-components";

// interface IModalContainer {

// }

export const ContainerModal = styled.div<{ typeDisplay: string }>`
	display: ${(props) => props.typeDisplay};
	${(props) =>
		props.typeDisplay === "block" &&
		`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	
	`}
`;

export const StyledModal = styled.section`
	position: fixed;
	background: white;
	width: 80%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: black;
`;
