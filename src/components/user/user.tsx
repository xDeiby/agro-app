import React, { useState } from "react";
import Boton from "../buttons/button/Button";
import ModalUser from "./modalUser";



const User:React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

    return (
        <div>
            <Boton typeButton="user" onClick={openModal}>Usuario</Boton>
            <ModalUser showModal={showModal} setShowModal={setShowModal}/>          
        </div>
    );
}

export default User;