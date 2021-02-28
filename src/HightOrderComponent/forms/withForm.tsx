import React, { useEffect, useState } from "react";
import { ComponentType } from "react";
import Loading from "../../components/loading/Loading";
import getFieldsName from "../../modules/metadata/getFieldsName";
import getRelEntities, { getRelOptions } from "../../modules/metadata/getRelEntities";
import { getSearchPropertys } from "../../modules/metadata/parseRequest";
import { getEntityMetadata } from "../../modules/metadata/wea";

import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import { Subtract } from "../tables/types";
import { WithFormProps } from "./types";

export function withForm(
	config: WithFormProps
): <P extends unknown>(WrappedComponent: ComponentType<P>) => React.FC<Subtract<P, WithFormProps>> {
	return <P extends unknown>(WrappedComponent: ComponentType<P>) =>
		function BadgeComponet(props: any): JSX.Element {
			const [isWaiting, setIsWaiting] = useState<boolean>(true);

			const { currentEntity, currentId } = props;

			useEffect(() => {
				const loadData = async () => {
					!isWaiting && setIsWaiting(true);

					// * Objeto que se selecciono
					if (currentId) {
						const defaultValues = await searchInstance.getSpecificEntitie(
							currentEntity,
							currentId
						);
						config.defaultData =
							!defaultValues.error && getSearchPropertys(defaultValues.data[0], true);
					}
					// *

					// * Options, o dropdowns...
					const rels_indexs = getRelEntities(currentEntity);

					if (rels_indexs.length) {
						config.all_options = await getRelOptions(rels_indexs, currentEntity);
					}
					// *

					// * Esqueleto del formulario
					config.fields_names = getFieldsName(currentEntity);
					// *

					setIsWaiting(false);
				};

				config.tittle = getEntityMetadata(currentEntity).description;
				config.defaultData = {};
				loadData();
			}, []);

			return (
				<Loading isLoading={isWaiting}>
					<WrappedComponent {...props} {...config} changeLoad={setIsWaiting} />
				</Loading>
			);
		};
}
