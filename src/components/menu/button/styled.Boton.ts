import styled from "styled-components";

export type TypeButton = "default" | "accept" | "deny";

const TypeStyle: { [key in TypeButton]: IModelButton } = {
    accept: {
        color: "white",
        backgroundColor: "#108128",
    },
    deny: {
        color: "white",
        backgroundColor: "#D62A2A",
    },
    default: {
        color: "#fff",
        backgroundColor: "#868383",
    },
};

interface IModelButton {
    color?: string;
    backgroundColor?: string;
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
    margin?: string;
    className?: string;
}

const StyledButton = styled.button<IStyledButton>`
    border: ${(pr) => (pr.border ? pr.border : "none")};
    border-radius: ${(pr) => (pr.borderRadius ? pr.borderRadius : "6")}px;
    color: ${(pr) => TypeStyle[pr.pit].color};
    width: ${(pr) => (pr.width ? pr.width : "150")}px;
    margin: ${(pr) => (pr.margin ? pr.margin : "10")}px;
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "13")}px;
    padding: ${(pr) => (pr.paddingf ? pr.paddingf : "10")}px;
    background-color: ${(pr) => TypeStyle[pr.pit].backgroundColor};
    &:hover {
        color: white;
        opacity: 0.8;
        transition: 0.5s;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
`;

export default StyledButton;
