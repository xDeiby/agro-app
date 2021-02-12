import styled from "styled-components";
import { estado } from "../burger/styled.Burger";

export const Ul = styled.ul<estado>`
	list-style: none;
	display: none;
	flex-flow: row nowrap;

	li {
		padding: 2px 12px;
		margin-top: 5px;
	}

	@media (max-width: 768px) {
		display: flex;
		flex-flow: column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 200px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		scroll-behavior: smooth;
		overflow: -moz-scrollbars-vertical;
		overflow-y: scroll;

		li {
			color: #fff;
		}
	}
`;
