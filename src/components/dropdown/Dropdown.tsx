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

class AutoComplete extends React.Component implements IAutoComplete {
    options: string[];
    id: string;
    constructor(options: string[], id: string) {
        super(options, id);
        this.options = options;
        this.id = id;
    }
    randomId = () =>
        Math.floor((1 + Math.random()) * 0x100000)
            .toString(16)
            .substring(0);

    state = { id: this.randomId() };

    render() {
        return this.state.id;
        /*             <React.Fragment>
                <DataList
                    id={this.state.id}
                    options={[
                        "React",
                        "Angular",
                        "Vue JS",
                        "Vanilla javascript",
                    ]}
                />
                <input type="text" list={"data-list-" + this.state.id} />
            </React.Fragment> */
    }
}

const Dropdown: React.FC<IAutoComplete> = (props) => {
    interface ILo {
        state?: string;
        id?: string;
    }

    const state: ILo = "";
    const id = state;
    return (
        <div className="App">
            <div>Whats your favorite framework?</div>
            <DataList
                id={id}
                options={["React", "Angular", "Vue JS", "Vanilla javascript"]}
            />
            <input type="text" list={"data-list-" + this.state.id} />
            {/* <AutoComplete
            options={["React", "Angular", "Vue JS", "Vanilla javascript"]}
            /> */}
        </div>
    );
};

export default Dropdown;
