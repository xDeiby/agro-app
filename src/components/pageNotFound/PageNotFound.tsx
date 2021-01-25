import React from "react";
import { StyledDiv, StyledSection, StyledImage } from "./styled.PageNotFound";
import shorando from "../../config/images/shorando.gif";
import Button from "../buttons/button/Button";
import "../../../src/index.css";
import campo from "../../config/images/fondo_404.png";

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

interface IPropsImage {
    height?: string;
    width?: string;
    src?: string;
}
export type IPage404 = IPropsDiv & IPropsSection & IPropsImage;

const Page404: React.FC<IPage404> = (props) => {
    const { children } = props;
    return (
        <StyledSection
            style={{
                backgroundImage: `url(${campo})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                verticalAlign: "center",
            }}
        >
            <StyledDiv textAlign="center">
                <h1>ERROR 404</h1>
                <StyledImage src={shorando} />
                {/* <img src={shorando} width="500" height="500" /> */}
                <h2>Parece que estas perdido</h2>
                <p>{children} </p>
                <Button typeButton="home" width="200">
                    Volver a la pagina principal
                </Button>
            </StyledDiv>
        </StyledSection>
    );
};

export default Page404;
