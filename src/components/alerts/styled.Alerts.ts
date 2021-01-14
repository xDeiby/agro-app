import styled from "styled-components";
export type TypeAlert = "succesful" | "error" | "warning";
const TypeStyle: { [key in TypeAlert]: IModelAlert } = {
    succesful: {
        border: "1px solid rgba(36, 241, 6, 0.46)",
        backgroundColor: "rgba(7, 149, 66, 0.12156862745098039)",
        boxShadow: "0px 0px 2px #259c08",
        color: "#0ad406;",
    },
    error: {
        border: "1px solid rgba(241, 6, 6, 0.81)",
        backgroundColor: "rgba(220, 17, 1, 0.16)",
        boxShadow: "0px 0px 2px #ff0303",
        color: "#ff0303",
    },
    warning: {
        border: "1px solid rgba(241, 142, 6, 0.81)",
        backgroundColor: "rgba(220, 128, 1, 0.16)",
        boxShadow: "0px 0px 2px #ffb103",
        color: "#ffb103",
    },
};
interface IModelAlert {
    border?: string;
    color: string;
    backgroundColor: string;
    boxShadow?: string;
}
interface IStyledAlert {
    typeAlert: TypeAlert;
    border?: string;
    backgroundColor?: string;
    boxShadow?: string;
    color?: string;
    textShadow?: string;
    transition?: string;
    cursor?: string;
    width?: string;
    heigth?: string;
    padding?: string;
    fontSize?: string;
}

export const StyledAlert = styled.div<IStyledAlert>`
    border: ${(pr) => TypeStyle[pr.typeAlert].border};
    background-color: ${(pr) => TypeStyle[pr.typeAlert].backgroundColor};
    box-shadow: ${(pr) => TypeStyle[pr.typeAlert].boxShadow};
    color: ${(pr) => TypeStyle[pr.typeAlert].color};
    transition: ${(pr) => (pr.transition ? pr.transition : "0.5s")};
    height: ${(pr) => (pr.width ? pr.width : "40")}px;
    width: ${(pr) => (pr.width ? pr.width : "500")}px;
    padding: ${(pr) => (pr.padding ? pr.padding : "10")}px;
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "13")}px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1em;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 0.5s;
    }
`;
