import styled from "styled-components";

export interface state {
	open: boolean;
}

export const ButtonProfile = styled.button`
    padding:8px 5px;
    font-family:Muli;
    border-radius: 5px;
`


export const StyledContainerUser = styled.div`
	margin: 0 auto;
	padding: 10px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px 10px 0 0;
    text-align:center;
    background-color:#E8E7EC;
    position:fixed;
`;

export const StyledHeaderUser = styled.header`
    background-color:#009879;
    color:#ffff;
    border-radius:5px;
    font-family:sans-serif;
    margin:10px;
    margin-bottom:20px;
    padding:10px;
    `

export const StyledButtonUser = styled.button`
    padding:8px 5px;
    font-family:Muli;
    border: 1px solid #009879;
    border-radius: 5px;
`