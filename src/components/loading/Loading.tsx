import React, { ReactNode } from "react";
import { StyledLoading, StyledDiv, StyledSpinner } from "./styled.Loading";
import Tractor from "../../config/images/Tractor.gif";

interface LoadingProps {
	children: JSX.Element;
	isLoading: boolean;
}

export default function Loading(props: LoadingProps) {
	const { children, isLoading } = props;

	return isLoading ? (
		<StyledDiv>
			<StyledDiv>
				<StyledLoading src={Tractor} width="390px" height="330"></StyledLoading>
				<h1>
					Cargando
					<StyledSpinner viewBox="0 0 50 50">
						<circle
							className="path"
							cx="25"
							cy="25"
							r="20"
							fill="none"
							strokeWidth="4"
						/>
					</StyledSpinner>
				</h1>
			</StyledDiv>
		</StyledDiv>
	) : (
		children
	);
}
