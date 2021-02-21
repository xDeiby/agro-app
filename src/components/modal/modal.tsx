import React, { ElementType } from "react";
import { ReactNode } from "react";
import ButtonLineal from "../buttons/button-lineal";
import { ContainerModal, StyledModal } from "./modal.style";

interface IModalProps {
	buttonName: string;
	buttonIcon: ElementType;
	children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({ buttonName, children, buttonIcon }) => {
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
		<ButtonLineal icon={buttonIcon} typeButton="ghost" onClick={() => setOpen(true)}>
			{buttonName}
		</ButtonLineal>
	);
};

export default Modal;
