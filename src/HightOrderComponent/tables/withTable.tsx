import { Update } from "@styled-icons/material-outlined/Update";
import { observer } from "mobx-react";
import React from "react";
import { ComponentType } from "react";
import ButtonLineal from "../../components/buttons/button-lineal";
import Loading from "../../components/loading/Loading";
import { useStores } from "../../mobx/provider/StoreProvider";
import { Subtract, WithTableProps } from "./types";

export function withTable(
	config: WithTableProps
): <P extends unknown>(
	WrappedComponent: ComponentType<P>
) => React.FC<Subtract<P, WithTableProps>> {
	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
		observer(function BadgeComponet(props: any): JSX.Element {
			const { getHeaders, cellColumns } = config;
			const {
				setEntityData,
				setGetData,
				setPage,
				loading,
				info,
				current_page,
				allpages,
				updateEntity,
			} = useStores().tableStore;

			React.useEffect(() => {
				setPage(1);
				setGetData(config.getData);
				setEntityData(props.currentEntity);
			}, []);

			config.data = info.data[props.currentEntity][current_page];

			config.headers = React.useMemo(
				() =>
					cellColumns
						? [...getHeaders(props.currentEntity), ...cellColumns(props.pathname)]
						: getHeaders(props.currentEntity),
				props.selects ? [props.selects] : []
			);

			console.log(info.data);

			return (
				<Loading isLoading={loading}>
					<>
						<ButtonLineal
							icon={Update}
							size="small"
							typeButton="ghost"
							onClick={() => updateEntity(props.currentEntity)}
						>
							Actualizar
						</ButtonLineal>
						<WrappedComponent {...props} {...config} />
						{allpages.map((page) => (
							<button key={page} onClick={() => setPage(page)}>
								{page}
							</button>
						))}
					</>
				</Loading>
			);
		});
}
