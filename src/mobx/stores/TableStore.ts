import { observable, action, computed, makeObservable } from "mobx";
import { RootStore } from "../rootStore";

interface IPerson {
	readonly id: string;
	name: string;
	age: number;
}
export class TableStore {
	private rootReducer: RootStore;

	constructor(rootReducer: RootStore) {
		this.rootReducer = rootReducer;
		makeObservable(this, {
			addUser: action,
			users: observable,
			info: computed,
		});
	}

	// @observable
	users: IPerson[] = [{ id: "1", name: "deiby", age: 23 }];

	// @action
	addUser = (user: IPerson): void => {
		this.users.push(user);
	};

	// @computed
	get info(): { cantidad: number; usuarios: IPerson[] } {
		return {
			cantidad: this.users.length,
			usuarios: this.users,
		};
	}
}
