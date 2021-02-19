import { GeographyPoint } from "@azure/search-documents";
import { EntityRelated } from "@trifenix/agro-data";
import { EntityBaseSearch } from "@trifenix/mdm";
import { action, computed, makeObservable, observable, reaction, runInAction, toJS } from "mobx";
import { IResponse } from "../../model/azure-search";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import { RootStore } from "../rootStore";

export interface ITableStore {
	page: number;
	itemsPerPage: number;
	entities: any[];
	entityIndex: EntityRelated | undefined;
	isLoad: boolean;
	getData: <T = any>(entity: EntityRelated, page: number, total: number) => Promise<IResponse<T>>;
}

export default class EntityStore implements ITableStore {
	private rootStore: RootStore;

	page = 0;
	itemsPerPage = 5;
	entities = [];
	entityIndex: EntityRelated | undefined = undefined;
	isLoad = false;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	getData = async (entity: EntityRelated, page: number, total: number): Promise<any> => {
		const wea = await searchInstance.getEntities(entity);

		return wea as unknown;
	};

	constructor(rootStoore: RootStore) {
		this.rootStore = rootStoore;
		makeObservable(this, {
			page: observable,
			itemsPerPage: observable,
			entities: observable,
			setEntity: action,
			newPage: action,
			totalElements: action,
			info: computed,
		});

		reaction(
			() => this.page,
			async () => {
				// runInAction(() => (this.isLoad = true));
				this.isLoad = true;

				const result = await this.getData(
					this.entityIndex as EntityRelated,
					this.page,
					this.itemsPerPage
				);

				runInAction(() => {
					this.entities = result as any;
					this.isLoad = false;
					// this.isLoad = false;
				});
			}
		);
	}

	setGetData = (
		callback: (
			entity: EntityRelated,
			page: number,
			total: number
		) => Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>>
	): void => {
		this.getData = callback;
	};

	setEntity = (index: EntityRelated): void => {
		this.entityIndex = index;
	};

	newPage = (page: number): void => {
		this.page = page;
	};

	totalElements = (total: number): void => {
		this.itemsPerPage = total;
	};

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	get info() {
		return {
			page: this.page,
			items: this.itemsPerPage,
			data: toJS(this.entities),
			loading: this.isLoad,
		};
	}
}
