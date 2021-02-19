import React from "react";
import { ReactNode } from "react";
import { ContainerModal, StyledModal } from "./modal.style";

interface IModalProps {
	button: string;
	children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({ button, children }) => {
	const [open, setOpen] = React.useState(false);

	return open ? (
		<ContainerModal typeDisplay={open ? "block" : "none"}>
			<StyledModal>
				{children}
				<button type="button" onClick={() => setOpen(false)}>
					Close
				</button>
			</StyledModal>
		</ContainerModal>
	) : (
		<button onClick={() => setOpen(true)}>{button}</button>
	);
};

export default Modal;
