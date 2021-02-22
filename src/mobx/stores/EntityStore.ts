import { GeographyPoint } from "@azure/search-documents";
import { Pages } from "@styled-icons/material-outlined";
import { EntityRelated } from "@trifenix/agro-data";
import { EntityBaseSearch } from "@trifenix/mdm";
import { action, computed, makeObservable, observable, reaction, runInAction, toJS } from "mobx";
import { IResponse } from "../../model/azure-search";
import {
	getPaginationManteinerModel,
	getPaginationManteinerModelTotal,
} from "../../modules/azure-search/paginationManteinerModel";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
import { RootStore } from "../rootStore";

interface PaginationStore {
	[page: number]: any[];
}
interface StoreManteinerStructure {
	[entity: number]: PaginationStore[];
}

export interface ITableStore {
	current_entity: EntityRelated;
	current_page: number;
	total_rows: number;
	total_data: any;
	loading: boolean;
	data: any;
	getData: (
		entity: EntityRelated,
		page: number,
		total: number
	) => Promise<IResponse<EntityBaseSearch<GeographyPoint>[]>>;
}

export default class TableStore implements ITableStore {
	private rootStore: RootStore;

	// * Por defecto
	// TODO: CAMBIAR EL PUTO -1 POR ALGO MAS LOGICO
	current_entity = -1;
	current_page = 1;
	total_rows = 5;
	total_data = getPaginationManteinerModelTotal();
	loading = false;
	data = getPaginationManteinerModel();
	getData = async (entity: EntityRelated, page: number, total: number): Promise<any> => {
		const result = await searchInstance.getEntities(entity, [], total, page);

		return result;
	};

	constructor(rootStoore: RootStore) {
		this.rootStore = rootStoore;
		makeObservable(this, {
			current_entity: observable,
			current_page: observable,
			total_rows: observable,
			data: observable,
			setEntityData: action,
			setPage: action,
			setTotalRows: action,
			info: computed,
			allpages: computed,
		});

		reaction(
			() => this.current_entity | this.current_page,
			async () => {
				if (!Array.isArray(this.data[this.current_entity][this.current_page])) {
					this.loading = true;

					const result = await this.getData(
						this.current_entity,
						this.current_page,
						this.total_rows
					);

					runInAction(() => {
						this.data[this.current_entity][this.current_page] = result.data;
						this.total_data[this.current_entity] = result.total as number;
						this.loading = false;
					});
				}
				console.log(toJS(this.data), "AKI");
			}
		);
	}

	setEntityData = (entity: EntityRelated): void => {
		this.current_entity = entity;
	};

	setTotalRows = (new_total: number): void => {
		this.total_rows = new_total;
	};

	setPage = (new_page: number): void => {
		this.current_page = new_page;
	};

	setGetData = (
		callback: (entity: EntityRelated, page: number, total: number) => Promise<any>
	): void => {
		this.getData = callback;
	};

	get info(): ITableStore {
		return {
			current_page: this.current_page,
			total_rows: this.total_rows,
			total_data: this.total_data,
			data: toJS(this.data),
			loading: this.loading,
			getData: this.getData,
			current_entity: this.current_entity,
		};
	}

	get allpages(): number[] {
		const pages = [];
		for (let page = 1; page <= this.total_data[this.current_page] / this.total_rows; page++) {
			pages.push(page);
		}
		return pages;
	}
}
