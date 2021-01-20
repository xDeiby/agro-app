import axios from "axios";
import { settings } from "../../config/api/settings";

import { IPostContainer, MessageResult } from "../../model/api";

//import { localSettings as settings } from "../../../settings";

export default class CrudManteinerRequest {
    // private accessToken = sessionStorage.getItem("accessToken");

    public static async POST<T>(
        data: T,
        path_entity: string
    ): Promise<IPostContainer<T>> {
        try {
            const result = await axios.post<IPostContainer<T>>(
                `${settings.funcUrl}/${path_entity}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            return result.data;
        } catch (error) {
            const errorMessage: IPostContainer<T> = {
                messageResult: MessageResult.Error,
                message: error.message,
                idRelated: "",
                result: null,
            };

            return errorMessage;
        }
    }

    public static async PUT<T>(
        data: T,
        id: string,
        path_entity: string
    ): Promise<IPostContainer<T>> {
        try {
            const result = await axios.put<IPostContainer<T>>(
                `${settings.funcUrl}/${path_entity}/${id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            return result.data;
        } catch (error) {
            const errorMessage: IPostContainer<T> = {
                messageResult: MessageResult.Error,
                message: error.message,
                idRelated: "",
                result: null,
            };

            return errorMessage;
        }
    }
}
