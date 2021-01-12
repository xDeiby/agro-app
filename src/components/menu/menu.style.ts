import styled from "styled-components";
import { MenuType } from "./menu";

export interface StyledMenuProps {
    as?: string;
    type?: MenuType;
}

const StyledMenu = styled.div<StyledMenuProps>`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
`;

export default StyledMenu;
