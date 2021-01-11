import styled from "styled-components";

export type TypeButton = "default" | "accept";
const TypeStyle: { [key in TypeButton]: IModelButton } = {
    accept: {
        color: "#fff",
    },
    default: {
        color: "white",
    },
};

interface IModelButton {
    color?: string;
}
interface IStyledButton {
    border?: string;
    pit: TypeButton;
    borderRadius?: string;
    color?: string;
    width?: string;
    fontSize?: string;
    paddingf?: string;
    backgroundColor?: string;
}

const StyledButton = styled.button<IStyledButton>`
    border: ${(pr) => (pr.border ? pr.border : "none")};
    border-radius: ${(pr) => (pr.borderRadius ? pr.borderRadius : "6")}px;
    color: ${(pr) => TypeStyle[pr.pit].color};
    width: ${(pr) => (pr.width ? pr.width : "150")}px;
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "13")}px;
    padding: ${(pr) => (pr.paddingf ? pr.paddingf : "10")}px;
    background-color: ${(pr) =>
        pr.backgroundColor ? pr.backgroundColor : "#39b91fc9"};
    &:hover {
        color: #fff;
        background: #2d9917c9;
        transition: 0.5s;
    }
`;

export default StyledButton;
