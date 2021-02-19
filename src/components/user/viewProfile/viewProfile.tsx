import React from "react";


interface IInfoUser{
    name?: string;
    rut?: string;
    email?: string;
    idJob?: string;
    idsRoles?: string[];
    idNebulizer?: string;
    idTractor?: string;
}

const Usuario = (user:IInfoUser) => {
    user.name= "Cristian"
}

const ViewProfile: React.FC<IInfoUser> = (user) => {
    return(
        <div>
            <p>{user.name}</p>
            <p>{user.rut}</p>
            <p>{user.email}</p>
            <p>{user.idJob}</p>
            <p>{user.idNebulizer}</p>
            <p>{user.idTractor}</p>
        </div>
    );
}

export default ViewProfile;