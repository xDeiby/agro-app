import TableStore from "./stores/TableStore";

export class RootStore {
	tableStore: TableStore;

	constructor() {
		this.tableStore = new TableStore(this);
	}
}

export const rootStoreInstance = new RootStore();
