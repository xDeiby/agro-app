import React from "react";
import { ComponentType } from "react";
import Loading from "../../components/loading/Loading";
import { Subtract, WithTableProps } from "./types";

export function withTable(
	config: WithTableProps
): <P extends unknown>(
	WrappedComponent: ComponentType<P>
) => React.FC<Subtract<P, WithTableProps>> {
	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
		function BadgeComponet(props: any): JSX.Element {
			const { getHeaders, getData, cellColumns } = config;

			const [loading, setLoadinig] = React.useState<boolean>(false);

			React.useEffect(() => {
				const obtData = async () => {
					setLoadinig(true);
					// TODO: Cambiar esta wea
					config.data = await (props.ids
						? getData(props.currentEntity, 1, 5, props.ids)
						: getData(props.currentEntity, 1, 5));

					setLoadinig(false);
				};

				obtData();
			}, []);

			config.headers = React.useMemo(
				() =>
					cellColumns
						? [...getHeaders(props.currentEntity), ...cellColumns(props.pathname)]
						: getHeaders(props.currentEntity),
				props.selects ? [props.selects] : []
			);

			return (
				<Loading isLoading={loading}>
					<WrappedComponent {...props} {...config} />
				</Loading>
			);
		};
}

// * Cambios
// import { observer } from "mobx-react";
// import React from "react";
// import { ComponentType } from "react";
// import Loading from "../../components/loading/Loading";
// import { useStores } from "../../mobx/provider/StoreProvider";
// import { Subtract, WithTableProps } from "./types";

// export function withTable(
// 	config: WithTableProps
// ): <P extends unknown>(
// 	WrappedComponent: ComponentType<P>
// ) => React.FC<Subtract<P, WithTableProps>> {
// 	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
// 		observer(function BadgeComponet(props: any): JSX.Element {
// 			const { getHeaders, cellColumns } = config;
// 			const {
// 				setEntityData,
// 				setGetData,
// 				setPage,
// 				loading,
// 				info,
// 				current_page,
// 				total_data,
// 				allpages,
// 			} = useStores().tableStore;

// 			React.useEffect(() => {
// 				setGetData(config.getData);
// 				setEntityData(props.currentEntity);
// 				setPage(1);
// 			}, []);

// 			config.data = info.data[props.currentEntity][current_page];

// 			config.headers = React.useMemo(
// 				() =>
// 					cellColumns
// 						? [...getHeaders(props.currentEntity), ...cellColumns(props.pathname)]
// 						: getHeaders(props.currentEntity),
// 				props.selects ? [props.selects] : []
// 			);

// 			return (
// 				<Loading isLoading={loading}>
// 					<>
// 						<WrappedComponent {...props} {...config} />
// 						<span>total: {total_data[props.currentEntity]}</span>
// 						{allpages.map((page) => {
// 							<button key={page} onClick={() => setPage(page)}>
// 								{page}
// 							</button>;
// 						})}
// 					</>
// 				</Loading>
// 			);
// 		});
// }
