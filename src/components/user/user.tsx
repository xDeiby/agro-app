import React, { useState } from "react";
import { StyledButtonUser, StyledContainerUser, StyledHeaderUser } from "./styled.user";



const User:React.FC = () => {

    const [active, setActive] = useState(false);


    return (
        <StyledContainerUser>
            <StyledHeaderUser>Header</StyledHeaderUser>
            <img src="https://img.favpng.com/15/13/21/computer-icons-user-login-desktop-wallpaper-png-favpng-50cVSt0m1jw7SRtPEv8KvVUvF.jpg" 
            style={{width: "80px", height: "55px"}}/>
            <div style={{ margin:"10px",fontFamily:"sans-serif",fontSize:"16px"}}>
                Nombre Usuario 
            </div>
            <StyledButtonUser>
                Ver perfil
            </StyledButtonUser>
            {/* <StyledFooterUser>
                Footer
            </StyledFooterUser> */}
        </StyledContainerUser>
    );
}

export default User;