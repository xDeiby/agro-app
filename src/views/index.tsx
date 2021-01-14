import * as React from "react";
import { ManteinerRoutes, HomeRoute } from "../routes";

const Views: React.FC = () => {
    return (
        <>
            <HomeRoute />
            <ManteinerRoutes />
        </>
    );
};

export default Views;
