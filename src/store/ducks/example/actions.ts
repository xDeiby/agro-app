import { ExampleAction } from "./types";
import { action } from "typesafe-actions";

export interface IExample {
    name: string;
    value: string;
}

export const add = (example: IExample) => action(ExampleAction.ADD, example);

export const delet = (example: IExample) =>
    action(ExampleAction.DELETE, example);
