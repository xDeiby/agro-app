import React from "react";
import { Route } from "react-router";
import { path_name_profile } from "../../../config/statics";
import {  StyledHeaderUser } from "../styled.user";
import { ContainerProfile, StyledBoxUser } from "./styled.Viewprofile";



const TestUser = ["Nombre Usuario", "123456789-0", "IdJob" ,"IdNebulizer" ,"IdTractor", "email@gmail.com"]



const ViewProfile: React.FC = () => {

    const US = TestUser.map((u)=>{
        return(
            <StyledBoxUser key={Math.random()}> {u} </StyledBoxUser>
        );
    })
    
    return(
        <Route exact path={`/${path_name_profile.profile_user}`}>
            <ContainerProfile>
                <StyledHeaderUser>Araucania Exportaciones S.A</StyledHeaderUser>
                <img src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg" 
                style={{width: "160px", height: "120px", marginBottom:"10px"}}/>

                <div>
                    {US}
                </div>
            </ContainerProfile>
        </Route>
       
    );
}

export default ViewProfile;