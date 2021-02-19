import React from "react";
import { StyledContainerUser, StyledHeaderUser } from "../styled.user";
import { StyledBoxUser } from "./styled.Viewprofile";


// interface IInfoUser{
//     name?: string;
//     rut?: string;
//     email?: string;
//     idJob?: string;
//     idsRoles?: string[];
//     idNebulizer?: string;
//     idTractor?: string;
// }
// const Usuario = (user:IInfoUser) => {
//     user.name= "Cristian",
//     user.rut="20326589-4",
//     user.email="asda@asda.com",
//     user.idJob="1234",
//     user.idNebulizer="44444",
//     user.idTractor="55555"
// }


const TestUser = ["Nombre Usuario", "123456789-0", "IdJob" ,"IdNebulizer" ,"IdTractor", "email@gmail.com"]



const ViewProfile: React.FC = () => {
    
    

    const US = TestUser.map((u)=>{
        return(
            <StyledBoxUser key={Math.random()}> {u} </StyledBoxUser>
        );
    })



    return(
        <StyledContainerUser>
            <StyledHeaderUser>Araucania Exportaciones S.A</StyledHeaderUser>
            <img src="https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg" 
            style={{width: "160px", height: "120px", marginBottom:"10px"}}/>
        {/*             
            <p>{user.name}</p>
            <p>{user.rut}</p>
            <p>{user.email}</p>
            <p>{user.idJob}</p>
            <p>{user.idNebulizer}</p>
            <p>{user.idTractor}</p> */}


        <div>
            {US}
        </div>
        </StyledContainerUser>
    );
}

export default ViewProfile;