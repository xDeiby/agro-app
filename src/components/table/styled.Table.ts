import styled from "styled-components";

interface ITable {
	fontFamily?: string;
	fontSize?: string;
	borderCollapse?: string;
	width?: string;
}

export const StyledTable = styled.table<ITable>`
	background: white;
	font-family: sans-serif;
	font-size: 0.9em;
	border-collapse: collapse;
	width: 90%;
	border-radius: 7px 7px 0 0;
	margin: auto;
	margin-top: 20px;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);

	@media screen and (max-width: 600px) {
		font-size: 1.3em;
		border: 0;
	}
`;

export const StyledTh = styled.th`
	padding: 8px;
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	color: white;
	font-size: initial;
	background-color: #009879;
`;

export const StyledTr = styled.tr`
	&:hover {
		background-color: #ddd;
		font-size: 15px;
		font-weight: bold;
		color: #009879;
	}
	@media screen and (max-width: 600px) {
		border-bottom: 3px solid #ddd;
		display: block;
		margin-bottom: 0.625em;

		&:hover {
			background-color: transparent;
		}
	}
`;

export const StyledTd = styled.td`
	border-bottom: 1px solid #dddddd;
	padding: 8px 11px;

	@media screen and (max-width: 600px) {
		border-bottom: 1px solid #ddd;
		display: block;
		font-size: 0.8em;
		text-align: right;
		&:before {
			content: attr(aria-label);

			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
`;
