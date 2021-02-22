import React from "react";
import { ReactNode } from "react";
import "./modal.css";

interface IModalProps {
	button: string;
	children: ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ button, children }) => {
	const [open, setOpen] = React.useState(false);

	const showHideClassName = open ? "modal display-block" : "modal display-none";

	return open ? (
		<div className={showHideClassName}>
			<section className="modal-main">
				{children}
				<button type="button" onClick={() => setOpen(false)}>
					Close
				</button>
			</section>
		</div>
	) : (
		<button onClick={() => setOpen(true)}>{button}</button>
	);
};
