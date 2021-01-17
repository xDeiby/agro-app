import styled from "styled-components";
import { Form } from "formik";

const StyledForm = styled(Form)`
    width: 80%;
    margin: auto;
    margin-top: -150px;
    border-radius: 10px;
    min-height: 70vh;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid black;
    background-color: white;
    box-shadow: 5px 5px 5px;
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    justify-content: space-around;
`;

// Provisorio
// const StyledInput = styled.input``;

export default StyledForm;
