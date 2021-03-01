import React, { ElementType } from "react";
import { ReactNode } from "react";
import ButtonLineal from "../buttons/button-lineal";
import Boton from "../buttons/button/Button";
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
				<Boton typeButton="default" backgroundColor="transparent" width="5%" float="right" onClick={() => setOpen(false)}>
					X
				</Boton>
			
				{children}
			</StyledModal>
		</ContainerModal>
	) : (
		<ButtonLineal icon={buttonIcon} typeButton="ghost" onClick={() => setOpen(true)}>
			{buttonName}
		</ButtonLineal>
	);
};

export default Modal;
