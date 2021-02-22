import { AzureKeyCredential, SearchClient } from "@azure/search-documents";
import { IResponse } from "../../model/azure-search/IResponse";

class AzureSearch<T> {
	private client: SearchClient<T>;

	constructor(endPoint: string, indexName: string, key: string) {
		this.client = new SearchClient<T>(endPoint, indexName, new AzureKeyCredential(key));
	}

	protected async searchEntities(
		query: string,
		selects?: (keyof T)[],
		top?: number,
		skip?: number,
		isPaginate?: boolean
	): Promise<IResponse<T[]>> {
		const results: T[] = [];

		try {
			const searchResults = await this.client.search("*", {
				filter: query,
				select: selects,
				top: top,
				skip: top && skip ? (skip - 1) * top : undefined,
				includeTotalCount: isPaginate,
			});

			for await (const result of searchResults.results) {
				// console.log(result);

				results.push(result.document);
			}

			return {
				data: results,
				total: searchResults.count,
				error: null,
			};
		} catch (error) {
			return {
				data: results,
				error: error.message,
			};
		}
	}

	protected async searchEntities2(
		query: string,
		query2: string,
		selects?: (keyof T)[],
		top?: number,
		skip?: number,
		isPaginate?: boolean
	): Promise<IResponse<T[]>> {
		const results: T[] = [];

		try {
			const searchResults = await this.client.search("*", {
				filter: query,
				select: selects,
				top: top,
				skip: top && skip ? (skip - 1) * top : undefined,
				includeTotalCount: isPaginate,
			});

			for await (const result of searchResults.results) {
				// console.log(result);

				results.push(result.document);
			}

			return {
				data: results,
				total: searchResults.count,
				error: null,
			};
		} catch (error) {
			return {
				data: results,
				error: error.message,
			};
		}
	}
}

export default AzureSearch;
