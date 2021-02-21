import { EntityRelated } from "@trifenix/agro-data";

export type WithListProps = ListDataGetProps & ListDataProps;

interface ListDataGetProps {
	getItems: (entity: EntityRelated, entity_rel: EntityRelated, id: string) => Promise<any[]>;
}

interface ListDataProps {
	data?: any[];
}
