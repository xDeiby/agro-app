import React from "react";
import { ComponentType } from "react";
import { useParams } from "react-router";
import Loading from "../../components/loading/Loading";
import { Subtract } from "../tables/types";
import { WithListProps } from "./types";

export function withList(
	config: WithListProps
): <P extends unknown>(WrappedComponent: ComponentType<P>) => React.FC<Subtract<P, WithListProps>> {
	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
		function BadgeComponet(props: any): JSX.Element {
			const { getItems } = config;

			const [loading, setLoadinig] = React.useState<boolean>(false);

			const { id } = useParams<{ id: string }>();

			React.useEffect(() => {
				const obtData = async () => {
					setLoadinig(true);
					config.data = await getItems(props.entity, props.entity_rel, id);
					setLoadinig(false);
				};

				obtData();
			}, []);

			return (
				<Loading isLoading={loading}>
					<WrappedComponent {...props} {...config} id={id} />
				</Loading>
			);
		};
}
