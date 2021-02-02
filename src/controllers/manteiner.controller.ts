import { EntityRelated, StringRelated } from "@trifenix/agro-data";
import { EntityBaseSearch, GeoPointTs } from "@trifenix/mdm";
import AgroSearch from "../services/azure-search/indexs-instances/AgroSearch";

// export declare type CompositeComponent<P> =
//     | React.ComponentClass<P>
//     | React.StatelessComponent<P>;
// export interface ComponentDecorator<OtherProps, TMergedProps> {
//     (component: CompositeComponent<TMergedProps>): React.ComponentType<
//         OtherProps
//     >;
// }

// interface ManteinerControllerProps {
//     id: string;
//     entity_index: EntityRelated;
// }

// export interface WithManteinerController {
//     getRelateds: (entity: EntityRelated) => Promise<void>;

//     cosa: string;
// }

// export declare function ManteinerController<
//     OtherProps extends ManteinerControllerProps,
//     InitValuesForm
// >({
//     getRelateds,
//     ...config
// }: WithManteinerController): ComponentDecorator<OtherProps, InitValuesForm>;
// // export default App;

// export default ManteinerController<ManteinerControllerProps, InitValuesForm>({
//     getRelateds: () => {

//     }
// })(Form);

/* export async function getAllRels(
    id: string,
    entity_index: EntityRelated
): Promise<EntityBaseSearch<GeoPointTs>[]> {
    const search = new AgroSearch();

    const result = await search.getSpecificEntitie(entity_index, id);

    const rels = result.data[0].rel;

    const obj = await Promise.all(
        rels.map(
            async (rel) =>
                (
                    await search.getSpecificEntitie(
                        rel.index === EntityRelated.POLLINATOR
                            ? EntityRelated.VARIETY
                            : rel.index,
                        rel.id
                    )
                ).data[0]
        )
    );

    return obj.filter(
        (entity) => entity && entity.index !== EntityRelated.SEASON
    );
}

export function getRelValues(
    entity: EntityBaseSearch<GeoPointTs>
): { label: string; value: string } {
    if (entity.index === EntityRelated.POLLINATOR)
        entity.index = EntityRelated.VARIETY;

    const value = entity.str.filter(
        (elem) => elem.index === StringRelated.GENERIC_NAME
    )[0].value;

    return {
        label: value,
        value: entity.id,
    };
} */

// AAAAAAAAAAAAAAAAAAAAAA
