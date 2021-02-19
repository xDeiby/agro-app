import EntityStore from "./stores/EntityStore";
import { TableStore } from "./stores/TableStore";

export class RootStore {
	tableStore: TableStore;
	entitieStore: EntityStore;

	constructor() {
		this.tableStore = new TableStore(this);
		this.entitieStore = new EntityStore(this);
	}
}

export const rootStoreInstance = new RootStore();
