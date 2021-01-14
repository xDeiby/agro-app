/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Field, FormikProps, withFormik } from "formik";
import StyledForm from "./form.style";

// any => generico
// interface FormValues {
//     name_sector: string;
//     num_sector: string;
// }

type OtherValues = {
    message: string;
    fields: IFieldElement[];
    logo: string;
};

const MyForm: React.FC<OtherValues & FormikProps<any>> = (props) => {
    const { message, isSubmitting, fields, logo } = props;
    return (
        <StyledForm>
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

            <h1 style={{ flexBasis: "100%" }}>{message}</h1>

            {fields.map((input: IFieldElement) => (
                <Field
                    key={input.name}
                    {...input}
                    style={{
                        flex: "1 0 50px",
                    }}
                />
            ))}
            {/* <Field name="name_sector" type="text" />
            <Field name="num_sector" type="number" /> */}
            <button disabled={isSubmitting} type="submit">
                Guardar
            </button>
        </StyledForm>
    );
};

export interface IFieldElement {
    name: string;
    placeholder?: string;
    type: "number" | "email" | "text";
}

interface InitValues {
    message: string;
    fields: IFieldElement[];
    logo: string;
}

const Form = withFormik<InitValues, any>({
    mapPropsToValues: (props) => ({
        message: props.message,
        field: props.fields,
        logo: props.logo,
        // name_sector: "",
        // num_sector: "",
    }),

    handleSubmit: (values) => {
        console.log(values);
    },
})(MyForm);

export default Form;
