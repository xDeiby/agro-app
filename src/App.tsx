import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";
import { mdm } from "@trifenix/agro-data";
import User from "./components/user/user";
import ViewProfile from "./components/user/viewProfile/viewProfile";

const App: React.FunctionComponent = () => {
	// const [nombre, setNombre] = useState<string[][]>();
	// React.useEffect(() => {
	// 	async function fetchGetentities() {
	// 		const busqueda = new AgroSearch();
	// 		const entities = (await busqueda.getEntities(EntityRelated.BARRACK)).data;
	// 		const res = entities.map((result) =>
	// 			result.str
	// 				.filter((lol) => lol.index === StringRelated.GENERIC_NAME)
	// 				.map((valor) => valor.value)
	// 		);
	// 		setNombre(res);
	// 		console.log(res);
	// 	}
	// 	fetchGetentities();
	/* 	const fetchData = async () => {
			const myWea = new AgroSearch();
			const wea = (await myWea.getEntities(1)).data;
			console.log(wea);

			wea.map((nom) => console.log(nom.str));
		};
		fetchData(); */
	// }, []);
	console.log(mdm.indexes);
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
			</div>
			<User/>
			<ViewProfile/>
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
