import { IFieldDefined } from "../../modules/metadata/getFieldsName";
import { IDropdownOptions } from "../../modules/metadata/getRelEntities";

export type WithFormProps = IFormElements;

interface IFormElements {
	defaultData?: any;
	all_options?: IDropdownOptions;
	fields_names?: IFieldDefined<any>[];
	tittle?: string;
}
