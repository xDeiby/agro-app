/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { FormikProps, withFormik } from "formik";
import StyledForm from "./form.style";
import FormControl from "../form-control";
import Input from "../input";
import Select, { SelectOption } from "../select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useState } from "react";
import Boton from "../buttons/button/Button";
import { path_name } from "../../config/statics/path_names";
import { EntityRelated } from "@trifenix/agro-data";
import AgroSearch from "../../services/azure-search/indexs-instances/AgroSearch";
/* import { getAllRels, getRelValues } from "../../controllers/manteiner.controller"; */
/* import { getPropertys, IProperty } from "../../controllers/wea"; */
import { KindProperty } from "@trifenix/mdm";

// any => generico
// interface FormValues {
//     name_sector: string;
//     num_sector: string;
// }

type OtherValues = {
    message: string;
    fields: IFieldElement[];
    dropdowns?: IDropdownElement[];
    datePicker?: IDatePickerElement[];
    logo: string;
    id_entity?: string;
    currentEntity: EntityRelated;
};

const MyForm: React.FC<OtherValues & FormikProps<any>> = (props) => {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendtDate] = useState(new Date());
    const [loading, setLoading] = useState<boolean>(!!props.dropdowns);
    const [myAll_options, setMyAllOptions] = useState<{ data: SelectOption[]; option: string }[]>([]);
    /*  const [defaultInputs, setDefaultInputs] = useState<IProperty[]>([]); */
    const [defaultOptions, setDefaultOptions] = useState<
        {
            option: string | undefined;
            label: string;
            value: string;
        }[]
    >([]);

    const {
        message,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleBlur,
        fields,
        dropdowns,
        datePicker,
        logo,
        values,
    } = props;

    function getOption(key: string, dropdown: string) {
        const options = myAll_options.filter((op) => op.option === dropdown)[0].data;

        return options.filter((option) => option.value === key)[0];
    }
    /* 
    React.useEffect(() => {
        async function loadData() {
            setLoading(true);
            const search = new AgroSearch();
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            // console.log(props.dropdowns);

            const all_options = await Promise.all(
                props.dropdowns!.map(async (entities) => {
                    const all_entities = (await search.getEntities(entities.entity)).data;
                    const options = all_entities.map((entitie) => getRelValues(entitie));
                    return {
                        data: options,
                        option: entities.name,
                    };
                })
            );

            setMyAllOptions(all_options);
            console.log({ ...all_options }, "AAAA");

            // setMyAllOptions({...all_options});

            if (props.id_entity) {
                const current_entity = (await search.getSpecificEntitie(props.currentEntity, props.id_entity)).data[0];
                const all_rels = await getAllRels(props.id_entity, props.currentEntity);

                all_rels.forEach((rel) => {
                    const wea = props.dropdowns?.filter((dropdown) => dropdown.entity === rel.index)[0].name;
                    // console.log(wea, getRelValues(rel));

                    setFieldValue(wea as string, getRelValues(rel).value);
                });
                const default_inputs = getPropertys(current_entity);

                default_inputs.forEach((input) => setFieldValue(input.label, input.value));

                setDefaultInputs(default_inputs);
                // setDefaultOptions(default_options);

                // console.log(default_options, "ya lo hice papu");
                // console.log(default_inputs, "ya lo hice papu");
            }

            setLoading(false);
        }

        props.dropdowns && loadData();
    }, []); */

    return loading ? (
        <h1>loading...</h1>
    ) : (
        <StyledForm>
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

            {fields.map((input: IFieldElement) => (
                <FormControl key={input.name} label={input.label} htmlFor={input.name} onBlur={handleBlur}>
                    <Input
                        id={input.name}
                        value={values[input.name] || ""}
                        placeholder={input.placeholder}
                        type={input.type}
                        onChange={handleChange}
                        width="500px"
                        size="large"
                    />
                </FormControl>
            ))}

            {dropdowns?.map((select: IDropdownElement) => (
                <FormControl
                    key={select.name}
                    label={select.label}
                    htmlFor={select.name}
                    // onBlur={handleBlur}
                >
                    <Select
                        id={select.name}
                        placeholder={select.placeholder}
                        option={getOption(values[select.name], select.name)}
                        // option={values[select.name]}
                        listOptions={myAll_options.filter((options) => options.option === select.name)[0].data}
                        onChange={(e) => setFieldValue(select.name, e?.value)}
                        width="500px"
                        size="large"
                    />
                </FormControl>
            ))}
            {datePicker?.map((dateFields: IDatePickerElement) => (
                <FormControl
                    key={dateFields.name.toString()}
                    label={dateFields.label}
                    htmlFor={dateFields.name.toString()}
                    // onBlur={handleBlur}
                >
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => {
                            setstartDate(date);
                            values[dateFields.startDate] = date;
                        }}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        locale={es}
                        customInput={<Input />}
                        name={startDate.toString()}
                        placeholderText="Fecha de inicio"
                        dateFormat="dd/MM/yyyy"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date: any) => {
                            setendtDate(date);
                            values[dateFields.endDate] = date;
                        }}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={es}
                        customInput={<Input />}
                        name={endDate.toString()}
                        placeholderText="Fecha de termino"
                        dateFormat="dd/MM/yyyy"
                    />
                </FormControl>
            ))}

            {/* <Field name="name_sector" type="text" />
            <Field name="num_sector" type="number" /> */}

            <div className="buttons" style={{ flexBasis: "100%" }}>
                <Boton
                    // type={"submit"}
                    typeButton="save"
                    backgroundColor="green"
                    disabled={isSubmitting}
                >
                    Guardar
                </Boton>
            </div>
        </StyledForm>
    );
};

export interface IFieldElement {
    label: string;
    name: string;
    placeholder?: string;
    type: "number" | "email" | "text";
}

export interface IDropdownElement {
    label: string;
    name: string;
    placeholder?: string;
    options: SelectOption[];
    entity: EntityRelated;
}

export interface IDatePickerElement {
    label: string;
    name: string;
    placeholder?: string;
    startDate: string;
    endDate: string;
}
export interface InitValuesForm {
    message: string;
    fields: IFieldElement[];
    dropdowns?: IDropdownElement[];
    datePicker?: IDatePickerElement[];
    logo: string;
    pathname: path_name;
    id_entity?: string;
    currentEntity: EntityRelated;
}

const Form = withFormik<InitValuesForm, any>({
    mapPropsToValues: (props) => ({
        pathname: props.pathname,
        id_entity: props.id_entity,
    }),

    handleSubmit: async (values) => {
        const pathname = values.pathname;
        const id = values.id_entity;

        delete values.id_entity;
        delete values.pathname;

        if (id) {
            console.log("PUTTT");

            // await CrudManteinerRequest.PUT(values, pathname, id);
        } else {
            console.log("POSTT");

            // await CrudManteinerRequest.POST(values, pathname);
        }

        console.log(values, pathname);
    },
})(MyForm);

export default Form;
