import * as React from "react";
import { Route } from "react-router";
import Manteiner from "../../views/manteiner.view";

const ManteinerRoute: React.FC = () => {
    return (
        <>
            <Route exact path={"/manteiner/sector"}>
                <Manteiner />
            </Route>
        </>
    );
};

export default ManteinerRoute;
