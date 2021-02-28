import { RootStore } from "../rootStore";

type orderType = "default" | "asc" | "desc";

interface IFilterTableStore {
	order: orderType;
}

export default class FilterTableStore implements IFilterTableStore {
	private rootStore: RootStore;

	order: orderType = "default";

	constructor(rootStoore: RootStore) {
		this.rootStore = rootStoore;
	}
}
