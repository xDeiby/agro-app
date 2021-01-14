import styled from "styled-components";
import { StyledSubUl } from "../sub-menu/subMenu.style";

interface StyledItemProps {
    name?: string;
    textColor?: string;
    active?: boolean;
}

export const StyledItem = styled.a<StyledItemProps>`
    /* display: inline-block; */

    padding: 5px 22px;
    display: block;
    margin-left: 5px;
    text-decoration: none;
    color: ${(pr) => (pr.textColor ? pr.textColor : "white")};
    letter-spacing: 0em;
    /* display: block; */
    border-radius: 5px;
    border-left: 2px solid green;

    &:hover {
        background-color: #6dce0e;
        color: black;
    }

    ${(pr) =>
        pr.active &&
        `
        background-color: #6DCE0E;
        color: black;

    `}
`;

export const StyledListLink = styled.li`
    display: inline-block;
    position: relative;

    :hover ${StyledSubUl} {
        list-style: outside none none;
        display: flex;
        flex-direction: column;
        position: absolute;
        text-align: center;
        text-decoration: none;
        top: 29px;
        left: 6px;
        padding-top: 36.5px;
        border-top-style: unset;
        color: rgb(255, 255, 255);
        background-color: rgba(0, 0, 0, 0.8);
        padding: 5px;
        z-index: 100;
    }
`;
