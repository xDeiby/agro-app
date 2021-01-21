import * as React from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const KEYCODE_ENTER = 13;
export default class TodoComponent extends React.Component<
    TodoComponentProps,
    TodoComponentState
> {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            valid: true,
            items: [],
            text: "",
            startDate: "",
        };
        this.removeTodos = this.removeTodos.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }
    addTodos(e) {
        e.preventDefault();
        this.setState({
            items: [this.state.text, ...this.state.items],
            text: "",
        });
    }
    removeTodos(name, i) {
        let items = this.state.items.slice();
        items.splice(i, 1);
        this.setState({
            items,
        });
    }

    updateValue(e) {
        this.setState({ text: e.target.value });
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        console.log(this);
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    setDescription(event) {
        this.setState({ valid: true, description: event.target.value });
    }
    addTodo(event) {
        if (
            event &&
            event.keyCode !== KEYCODE_ENTER &&
            event.type !== "click"
        ) {
            return;
        }
        if (
            !this.state.description.length ||
            this.state.description.length > 50
        ) {
            this.setState({ valid: false });
        } else {
            this.props.addTodo(this.state.description);
            this.setState({ description: "" });
        }
    }

    render() {
        let inputClass = classNames("form-group", {
            "has-error": !this.state.valid,
        });

        return (
            <div>
                <div className="container" onKeyDown={this.addTodo.bind(this)}>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="text-center">
                                What do you need to do?
                            </h2>
                            <br />
                            <br />
                        </div>
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className={inputClass}>
                                <label className="control-label">
                                    Task description
                                </label>
                                <input
                                    className="form-control input-lg"
                                    type="text"
                                    value={this.state.description}
                                    onChange={this.setDescription.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-3 col-sm-offset-3">
                            <button
                                className="btn btn-success btn-block"
                                onClick={this.addTodo.bind(this)}
                            >
                                <i className="fa fa-plus"></i> Add Todo
                            </button>
                        </div>
                        <div className="col-sm-3">
                            <button
                                className="btn btn-danger btn-block"
                                onClick={this.props.removeDoneTodos.bind(this)}
                            >
                                <i className="fa fa-trash-o"></i> Remove done
                                todos
                            </button>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="row">
                        <div
                            className="col-sm-6 col-sm-offset-3"
                            onClick={this.openNav.bind(this)}
                        >
                            <TodoList {...this.props} />
                        </div>
                    </div>
                    <div id="mySidenav" className="row offcanvas">
                        <div className="sideNav">
                            <span onClick={this.closeNav.bind(this)}>
                                <i className="fa fa-lg fa-close"></i>
                            </span>
                            <br />
                            <br />
                            <div className="due">
                                <DatePicker
                                    inline
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <hr />
                            <div className="remind"></div>
                            <hr />
                            <div className="sublist">
                                <TodosubList
                                    items={this.state.items}
                                    removeTodos={this.removeTodos}
                                />
                                <form onSubmit={(e) => this.addTodos(e)}>
                                    <input
                                        placeholder="Add SubTask"
                                        value={this.state.text}
                                        onChange={(e) => {
                                            this.updateValue(e);
                                        }}
                                    />
                                    <button type="submit">+</button>
                                </form>
                            </div>
                            <hr />
                            <div className="description"></div>
                            <hr />
                            <div className="comment"></div>
                            <hr />
                            <div className="commentIn"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TodosubList extends React.Component<
    { items?: any; removeTodos: any },
    {}
> {
    removeItem(item, i) {
        this.props.removeTodos(item, i);
    }
    render() {
        return (
            <ul className="sub">
                {this.props.items.map((todo, i) => {
                    return (
                        <li
                            onClick={() => {
                                this.removeItem(todo, i);
                            }}
                            key={i}
                        >
                            {todo}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

interface TodoComponentProps {
    todos: Todo[];
    addTodo(description: string): void;
    addTodos?: any;
    toggleTodo: React.MouseEventHandler;
    editTodo: React.MouseEventHandler;
    removeTodo: React.MouseEventHandler;
    removeDoneTodos: React.MouseEventHandler;
}

interface TodoComponentState {
    description?: string;
    subdescription?: any;
    valid?: boolean;
    items?: any;
    text?: any;
    startDate?: any;
}

/* import * as React from "react";
import MenuView from "./views/menu.view";
import fondo from "./config/images/dashboard.jpg";
import Views from "./views";

const App: React.FunctionComponent = () => {
    return (
        <div className="app">
            <header
                // Provisorio
                style={{
                    backgroundImage: `url(${fondo})`,
                    height: "300px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <MenuView />
            </header>
            <div className="react-body">
                <Views />
            </div>
            { <footer
                style={{
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    display: "block",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    width: "100%",
                    padding: "10px",
                    color: "white",
                }}
            >
                AQUI FOOTER (Provisorio)
            </footer> }
        </div>
    );
};

export default App;
 */
