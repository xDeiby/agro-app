import styled from "styled-components";

interface IStyledTable {
    width?: string;
    margin?: string;
    borderSpacing?: string;
    borderCollapse?: string;
    tableLayout?: string;
}

interface IStyledComponentTable {
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    padding?: string;
    border?: string;
    heigth?: string;
    verticalAlign?: string;
    color?: string;
}

export const StyledTable = styled.table<IStyledTable>`
    width: ${(pr) => (pr.width ? pr.width : "100%")};
    margin: ${(pr) => (pr.margin ? pr.margin : "0")};
    border-spacing: ${(pr) => (pr.borderSpacing ? pr.borderSpacing : "0")};
    border-collapse: ${(pr) => (pr.borderCollapse ? pr.borderCollapse : "collapse")};
    table-layout: ${(pr) => (pr.tableLayout ? pr.tableLayout : "fixed")};
`;

export const StyledTh = styled.th<IStyledComponentTable>`
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "20px")};
    font-weight: ${(pr) => (pr.fontWeight ? pr.fontWeight : "bold")};
    text-align: ${(pr) => (pr.textAlign ? pr.textAlign : "center")};
    padding: ${(pr) => (pr.padding ? pr.padding : "2")};
`;

export const StyledTd = styled.td<IStyledComponentTable>`
    font-size: ${(pr) => (pr.fontSize ? pr.fontSize : "10xp")};
    border: ${(pr) => (pr.border ? pr.border : "1px solid LightGrey")};
    height: ${(pr) => (pr.height ? pr.height : "100%")};
    text-align: ${(pr) => (pr.textAlign ? pr.textAlign : "center")};
    vertical-align: ${(pr) => (pr.verticalAlign ? pr.verticalAlign : "middle")};
`;
