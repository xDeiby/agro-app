import React from "react";
import { StyledLoading,StyledDiv,StyledSpinner } from "./styled.Loading";
import Tractor from "../../config/images/Tractor.gif";

const Loading: React.FC = () => {
    return(
        <StyledDiv>
            <StyledDiv>
                <StyledLoading src={Tractor} width="390px" height="330"></StyledLoading>
                    <h1>
                        Cargando
                        <StyledSpinner viewBox="0 0 50 50"> 
                            <circle
                                className="path"
                                cx="25"
                                cy="25"
                                r="20"
                                fill="none"
                                strokeWidth="4"                    
                            />
                        </StyledSpinner>
                    </h1>
            </StyledDiv>
        </StyledDiv>
    );

};

export default Loading;