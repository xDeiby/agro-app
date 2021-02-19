import React from "react";



const User:React.FC = () => {
    return (
        <div>
            <header>Header</header>
            <img src="https://vignette.wikia.nocookie.net/the-hanged-three/images/9/9e/Default-profile-picture-question-mark-4.jpg/revision/latest?cb=20190112155537" 
            style={{width: "30px", height: "30px"}}/>
            <div> 
            Nombre Usuario</div>
            <button>
                Ver perfil
            </button>

            <footer>flooter</footer>
        </div>
    );
}

export default User;