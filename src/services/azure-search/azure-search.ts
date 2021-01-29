import { SearchClient, AzureKeyCredential } from "@azure/search-documents";
import { IResponse } from "../../model/azure-search/IResponse";

class AzureSearch<T> {
    private client: SearchClient<T>;

    constructor(endPoint: string, indexName: string, key: string) {
        this.client = new SearchClient<T>(
            endPoint,
            indexName,
            new AzureKeyCredential(key)
        );
    }

    protected async searchEntities(query: string): Promise<IResponse<T[]>> {
        const results: T[] = [];

        try {
            const searchResults = await this.client.search("*", {
                filter: query,
            });

            for await (const result of searchResults.results) {
                results.push(result.document);
            }

            return {
                data: results,
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
