export interface IResponse<T> {
	data: T;
	total?: number;
	error: string | null;
}
