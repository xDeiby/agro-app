import * as React from "react";
import { SectorRoute, HomeRoute } from "../routes/index";

const Views: React.FC = () => {
    return (
        <>
            <HomeRoute />
            <SectorRoute />
        </>
    );
};

export default Views;
