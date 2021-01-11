import StyledButton, { TypeButton } from "./styled.Boton";

interface IPropertys {
    color?: string;
    pit: TypeButton;
    width?: string;
    fontSize?: string;
    paddingf?: string;
    backgroundColor?: string;
    className?: string;
}

const Boton: React.FunctionComponent<IPropertys> = (props) => {
    // eslint-disable-next-line react/prop-types
    return <StyledButton {...props} />;
};
export default Boton;
