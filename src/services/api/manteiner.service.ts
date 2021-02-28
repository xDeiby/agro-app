import axios from "axios";
import { config } from "../../config/azure-function/settings";
// import { localSettings as searchConfig } from "../../config/azure-search/azure-search.conf";

export default class CrudManteinerRequest {
	public static async POST<C>(data: C, pathname: string): Promise<void> {
		let result: C;
		try {
			result = await axios.post(`${config.api_url}/${pathname}`, data);
		} catch (error) {
			result = error.message;
		}
	}

	public static async PUT<C>(data: C, pathname: string, id: string): Promise<void> {
		let result: C;
		try {
			result = await axios.put(`${config.api_url}/${pathname}/${id}`, data);

			console.log(result);
		} catch (error) {
			result = error.mmesage;
		}
	}
}
