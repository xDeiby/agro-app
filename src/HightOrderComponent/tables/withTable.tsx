import React from "react";
import { ComponentType } from "react";
import { Subtract, WithTableProps } from "./types";

export function withTable(
	config: WithTableProps
): <P extends unknown>(
	WrappedComponent: ComponentType<P>
) => React.FC<Subtract<P, WithTableProps>> {
	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
		function BadgeComponet(props: any): JSX.Element {
			const { getHeaders, getData } = config;

			const [loading, setLoadinig] = React.useState<boolean>(false);

			React.useEffect(() => {
				const obtData = async () => {
					setLoadinig(true);
					config.data = await getData(props.entity, 1, 5);
					setLoadinig(false);
				};

				obtData();
			}, []);

			config.headers = React.useMemo(() => getHeaders(props.entity), []);

			return loading ? <h1>loading...</h1> : <WrappedComponent {...props} {...config} />;
		};
}
