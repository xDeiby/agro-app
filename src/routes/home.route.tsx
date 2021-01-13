import * as React from "react";
import { Route } from "react-router";
import Home from "../views/home.view";

const HomeRoute: React.FC = () => {
    return (
        <>
            <Route exact path={"/"}>
                <Home />
            </Route>
        </>
    );
};

export default HomeRoute;
