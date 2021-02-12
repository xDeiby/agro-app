/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
export interface WithLoadingProps {
	loading: boolean;
}

const withLoading = <P extends object>(
	Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => {
	const hoc_loading = ({ loading, ...props }: WithLoadingProps) =>
		loading ? <h1>Cargando...(Provisional)</h1> : <Component {...(props as P)} />;

	hoc_loading.displayName = `withLoading(${Component.displayName || Component.name})`;

	return hoc_loading;
};

export default withLoading;
