/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRelated, mdm } from "@trifenix/agro-data";
import { Formik, FormikProps } from "formik";
import React from "react";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
import FormControl from "../form-control";
import Input from "../input";
import Select from "../select";
import StyledForm from "./form.style";
import getFieldsName, { IFieldDefined } from "../../modules/metadata/getFieldsName";
import getRelEntities, { getRelOptions, IDropdownOptions } from "../../modules/metadata/getRelEntities";
import parseRequest from "../../modules/metadata/parseRequest";

export interface IForm {
    currentEntity: EntityRelated;
    logo: string;
    message: string;
    currentId?: string;
}

export default function IForm<T extends { id: string }>(props: IForm): JSX.Element {
    const { currentEntity, currentId, message, logo } = props;

    const [fields, setFields] = React.useState<IFieldDefined<T>[]>([]);

    const [dropdownsOptions, setDropdownOptions] = React.useState<IDropdownOptions>({});
    const [initValues, setInitValues] = React.useState({});
    const [load, setLoad] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setLoad(true);
            const search = new AgroSearch();

            // ID
            if (currentId) {
                const search_entity = await search.getSpecificEntitie(currentEntity, currentId);
                const wea = parseRequest<T>(search_entity.data[0]);

                !search_entity.error && setInitValues(wea);
            }
            console.log(mdm.indexes.find((wea) => wea.index === EntityRelated.ROOTSTOCK));

            //

            // Options
            const index_rels = getRelEntities(currentEntity);
            const all_fields = getFieldsName<T>(currentEntity);

            console.log(all_fields);

            if (index_rels.length) {
                const options = await getRelOptions(index_rels, search, currentEntity);

                // TODO: Remplazar por MobX
                if (index_rels.reduce((acc, index) => acc + (index === EntityRelated.VARIETY ? 1 : 0), 0) > 1)
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
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ isSubmitting, values, handleSubmit, handleChange, setFieldValue }: FormikProps<any>) => {
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
                                <img src={logo} alt="Logo formulario" width={200} style={{ margin: "auto" }} />
                            </div>

                            <h1 style={{ flexBasis: "100%" }}>{message}</h1>

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
                                            option={getOption(values[field.field as string], field.field as string)}
                                            // option={values[field.name]}
                                            listOptions={dropdownsOptions[field.field as string]}
                                            onChange={(e) => setFieldValue(field.field as string, e?.value)}
                                            width="500px"
                                            size="large"
                                        />
                                    ) : (
                                        <Input
                                            id={field}
                                            value={values[field.field] || ""}
                                            // placeholder={input.placeholder}
                                            type={field}
                                            onChange={handleChange}
                                            width="500px"
                                            size="large"
                                        />
                                    )}
                                </FormControl>
                            ))}

                            <button type="submit" disabled={isSubmitting}>
                                Guardar
                            </button>
                        </StyledForm>
                    </div>
                );
            }}
        </Formik>
    );
}
