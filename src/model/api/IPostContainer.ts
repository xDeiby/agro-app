import { MessageResult } from "./MessageResult";

export interface IPostContainer<T> {
    messageResult: MessageResult;
    message: string;
    result: T | null;
    idRelated: string;
}
