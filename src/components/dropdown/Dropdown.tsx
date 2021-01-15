import React from "react";
import ReactDOM from "react-dom";
import { StyledList, StyledInput } from "./styled.Dropdown";

interface IDatalist extends IAutoComplete {
    o?: string;
    i?: number;
}
interface IAutoComplete {
    options: string[];
    id?: string;
}

const DataList = ({ id, options }: IDatalist) => (
    <StyledList id={"data-list-" + id}>
        {options.map((o, i) => (
            <option key={i}>{o}</option>
        ))}
    </StyledList>
);

class AutoComplete extends React.Component<{ options: string[] }> {
    randomId = () =>
        Math.floor((1 + Math.random()) * 0x100000)
            .toString(16)
            .substring(0);

    state = { id: this.randomId() };

    render() {
        return (
            <React.Fragment>
                <DataList id={this.state.id} options={this.props.options} />
                <input type="text" list={"data-list-" + this.state.id} />
            </React.Fragment>
        );
    }
}

const Dropdown: React.FC<IAutoComplete> = (props) => {
    return (
        <div className="App">
            <div>Whats your favorite framework?</div>

            <AutoComplete {...props} />
        </div>
    );
};

export default Dropdown;
