import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
import ViewProfile from "./components/user/viewProfile/viewProfile";
import { EntityRelated, mdm } from "@trifenix/agro-data";

const App: React.FunctionComponent = () => {
	console.log(mdm.indexes.find((wea) => wea.index === EntityRelated.BUSINESSNAME));

	return (
		<div className="app">
			<header
				// TODO: Cambiar
				style={{
					backgroundImage: `url(${fondo})`,
					height: "300px",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<MenuView />
			</header>
			<div className="react-body">
				<Views />
				<ViewProfile />
			</div>
			{/* <footer
                style={{
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    display: "block",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    width: "100%",
                    padding: "10px",
                    color: "white",
                }}
            >
                AQUI FOOTER (Provisorio)
            </footer> */}
		</div>
	);
};

export default App;
