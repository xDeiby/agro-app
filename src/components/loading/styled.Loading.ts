import styled from "styled-components";

interface IDivLoad {
	textAlign?: string;
}

export const StyledLoading = styled.img`
	src: ${(pr) => (pr.src ? pr.src : "")};
	height: ${(pr) => (pr.height ? pr.height : "")};
	width: ${(pr) => (pr.width ? pr.width : "")};
`;

export const StyledDiv = styled.div<IDivLoad>`
	text-align: ${(pr) => (pr.textAlign ? pr.textAlign : "center")};
	position: fixed;
	top: 100px;
	width: 100%;
	height: 100%;
	z-index: 1000;

	h1 {
		font-family: "Roboto", sans-serif;
		font-size: 30px;
		font-style: oblique;
		color: #726e6e;
	}
`;

export const StyledSpinner = styled.svg`
	animation: rotate 2s linear infinite;
	margin: -25px 0 0 -25px;
	width: 80px;
	height: 20px;

	& .path {
		stroke: #5652bf;
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`;
