import * as React from "react";
import { ManteinerRoutes, HomeRoute, ManteinerTableRoute } from "../routes";

const Views: React.FC = () => {
    return (
        <>
            <HomeRoute />
            <ManteinerRoutes />
            <ManteinerTableRoute />
        </>
    );
};

export default Views;
