/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRelated } from "@trifenix/agro-data";
import { Formik, FormikProps } from "formik";
import React from "react";
import FormControl from "../form-control";
import Input from "../input";
import Select from "../select";
import StyledForm from "./form.style";
import getFieldsName, { IFieldDefined } from "../../modules/metadata/getFieldsName";
import getRelEntities, {
	getRelOptions,
	IDropdownOptions,
} from "../../modules/metadata/getRelEntities";
import { getEntityMetadata, getSearchPropertys } from "../../modules/metadata/parseRequest";
import ButtonLineal from "../buttons/button-lineal";
import { Save, Trash } from "@styled-icons/boxicons-regular";
import CrudManteinerRequest from "../../services/api/manteiner.service";
import { searchInstance } from "../../services/azure-search/indexs-instances/AgroSearch";
export interface IForm {
	currentEntity: EntityRelated;
	logo: string;
	currentId?: string;
	pathname: string;
}

export default function IForm<T extends { id: string }>(props: IForm): JSX.Element {
	const { currentEntity, currentId, logo, pathname } = props;

	const [fields, setFields] = React.useState<IFieldDefined<T>[]>([]);

	// TODO: Cambiar
	const tittle = getEntityMetadata(currentEntity).description;

	const [dropdownsOptions, setDropdownOptions] = React.useState<IDropdownOptions>({});
	const [initValues, setInitValues] = React.useState({});
	const [load, setLoad] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			setLoad(true);

			// ID
			if (currentId) {
				const search_entity = await searchInstance.getSpecificEntitie(
					currentEntity,
					currentId
				);
				const wea = getSearchPropertys(search_entity.data[0], true);

				!search_entity.error && setInitValues(wea);
			}
			//

			// Options
			const index_rels = getRelEntities(currentEntity);
			const all_fields = getFieldsName<T>(currentEntity);

			if (index_rels.length) {
				const options = await getRelOptions(index_rels, currentEntity);

				// TODO: Remplazar por MobX
				if (
					index_rels.reduce(
						(acc, index) => acc + (index === EntityRelated.VARIETY ? 1 : 0),
						0
					) > 1
				)
					options["idPollinator"] = options["idVariety"];

				// console.log(options);

				setDropdownOptions(options);
			}
			setFields(all_fields);

			setLoad(false);
		}

		fetchData();
	}, []);

	function getOption(value: string, dropdownType: string) {
		return dropdownsOptions[dropdownType].filter((option) => option.value === value)[0];
	}

	return load ? (
		<div>cagando</div>
	) : (
		<Formik
			initialValues={initValues}
			onSubmit={async (values) => {
				let respones;
				if (currentId) {
					respones = await CrudManteinerRequest.PUT(values, pathname, currentId);
				} else {
					respones = await CrudManteinerRequest.POST(values, pathname);
				}

				console.log(respones);
			}}
		>
			{({
				isSubmitting,
				values,
				handleSubmit,
				handleChange,
				setFieldValue,
				resetForm,
			}: FormikProps<any>) => {
				return (
					<div>
						<StyledForm onSubmit={handleSubmit}>
							<div
								className="logo"
								style={{
									flexBasis: "100%",
									display: "flex",
									alignContent: "center",
								}}
							>
								<img
									src={logo}
									alt="Logo formulario"
									width={200}
									style={{ margin: "auto" }}
								/>
							</div>

							<h1 style={{ flexBasis: "100%" }}>{tittle}</h1>

							{fields.map((field) => (
								<FormControl
									key={field.field as string}
									label={field.header as string}
									htmlFor={field.field as string}
									// onBlur={handleBlur}
								>
									{(field.field as string).includes("id") ? (
										<Select
											id={field.field as string}
											// placeholder={"Ok"}
											option={getOption(
												values[field.field as string],
												field.field as string
											)}
											// option={values[field.name]}
											listOptions={dropdownsOptions[field.field as string]}
											onChange={(e) =>
												setFieldValue(field.field as string, e?.value)
											}
											width="500px"
											size="large"
										/>
									) : (
										<Input
											id={field.field}
											value={values[field.field] || ""}
											// placeholder={input.placeholder}
											// type={field}
											onChange={handleChange}
											width="500px"
											size="large"
										/>
									)}
								</FormControl>
							))}

							<div
								className="buttons"
								style={{
									flexBasis: "100%",
									display: "flex",
									justifyContent: "space-evenly",
								}}
							>
								<ButtonLineal
									type="submit"
									icon={Save}
									disabled={isSubmitting}
									typeButton="danger"
								>
									Guardar
								</ButtonLineal>
								<ButtonLineal
									type="reset"
									onClick={() => resetForm()}
									icon={Trash}
									disabled={isSubmitting}
									typeButton="default"
								>
									Limpiar
								</ButtonLineal>{" "}
							</div>
						</StyledForm>
					</div>
				);
			}}
		</Formik>
	);
}
