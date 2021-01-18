import React from "react";
import { StyledDiv, StyledSection } from "./styled.PageNotFound";
import shorando from "../../config/images/shorando.gif";

interface IPropsDiv {
    backgroundImage?: string;
    height?: string;
    backgroundPosition?: string;
}
interface IPropsSection {
    padding?: string;
    background?: string;
    fontFamily?: string;
}
export type IPage404 = IPropsDiv & IPropsSection;

const Page404: React.FC<IPage404> = () => {
    return (
        <StyledSection>
            <StyledSection>
                <StyledDiv>
                    <img src={shorando} width="500" height="500" />
                </StyledDiv>
            </StyledSection>
            <StyledSection>
                <StyledDiv textAlign="right">
                    <h1>ERROR 404</h1>
                    <h2>Look like youre lost</h2>
                    <p>the page you are looking for not avaible! </p>
                </StyledDiv>
            </StyledSection>
        </StyledSection>
    );
};

export default Page404;
