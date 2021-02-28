import { EntityRelated } from "@trifenix/agro-data";
import { Formik, FormikProps } from "formik";
import React from "react";
import ButtonLineal from "../buttons/button-lineal";
import { Save, Trash } from "@styled-icons/boxicons-regular";
import { WithFormProps } from "../../HightOrderComponent/forms/types";
import { withForm } from "../../HightOrderComponent/forms/withForm";
import StyledForm from "./form.style";
import CrudManteinerRequest from "../../services/api/manteiner.service";
import Select from "../select";
import FormControl from "../form-control";
import Input from "../input";
import { useHistory } from "react-router";
export interface IForm {
	currentEntity: EntityRelated;
	logo: string;
	currentId?: string;
	pathname: string;
}

function Form(props: IForm & WithFormProps): JSX.Element {
	const { push } = useHistory();

	const {
		defaultData,
		all_options,
		fields_names,
		tittle,
		logo,
		currentId,
		currentEntity,
		pathname,
	} = props;

	function getOption(value: string, dropdownType: string) {
		return (
			all_options && all_options[dropdownType].filter((option) => option.value === value)[0]
		);
	}

	return (
		<Formik
			initialValues={defaultData}
			onSubmit={async (values) => {
				(props as any).changeLoad(true);
				let response;
				console.log(values);

				if (currentId) {
					response = await CrudManteinerRequest.PUT(
						values,
						pathname.split("/")[1],
						currentId
					);
				} else {
					// TODO: Cambiar esto luego
					if (currentEntity === 1)
						values["seasonId"] = "49fd8f3316a642c29c70cc47c3c4ce6f";

					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					response = await CrudManteinerRequest.POST(values, pathname.split("/")[1]);
				}
				(props as any).changeLoad(false);

				push(`/${pathname}`);
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

							{fields_names?.map((field) => (
								<FormControl
									key={field.field as string}
									label={field.header as string}
									htmlFor={field.field as string}
									// onBlur={handleBlur}
								>
									{(field.field as string).includes("id") ? (
										<Select
											id={field.field as string}
											placeholder={field.placeholder}
											option={getOption(
												values[field.field as string],
												field.field as string
											)}
											listOptions={
												all_options && all_options[field.field as string]
											}
											onChange={(e) =>
												setFieldValue(field.field as string, e?.value)
											}
											width="500px"
											size="large"
										/>
									) : (
										<Input
											id={field.field}
											placeholder={field.placeholder}
											value={values[field.field] || ""}
											isRequired={field.required}
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

// TODO: Configurar los props del controlador (ahora me da flojera)
const FormManteiner = withForm({})(Form);

export default FormManteiner;
