import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSubLi = styled.li`
    margin-bottom: 5px;
    // padding: 5px 0px;
    display: inline-block;
    border-bottom: 1px solid rgba(7, 255, 69, 0.8);
`;
export const StyledSubA = styled(Link)`
    display: block;
    border-radius: 5px;
    padding: 8px 0px;
    text-decoration: none;
    color: white;
    ${StyledSubLi}
    &:hover {
        color: black;
        background-color: #6dce0e;
        border: 2px solid #6dce0e;
        border-radius: 10px;
    }
`;
export const StyledSubUl = styled.ul`
    display: none;
    border-radius: 10px;
`;
