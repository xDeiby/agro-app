import React, { useState } from "react";
import Nav from "../leftNav/nav";
import { StyledBurger } from "./styled.Burger";

const Burger: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<Nav open={open} />
		</>
	);
};

export default Burger;
