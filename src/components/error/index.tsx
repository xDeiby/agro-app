import * as React from "react";
import PageNotFound from "../pageNotFound";

export interface IAppProps {
    children: JSX.Element;
}

export interface IAppState {
    hasError: boolean;
    message: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
    state = {
        hasError: false,
        message: "",
    };

    componentDidCatch(error: Error): void {
        this.setState({
            hasError: true,
            message: error.message,
        });
    }

    public render(): JSX.Element {
        if (this.state.hasError) {
            return <PageNotFound />;
        }

        return this.props.children;
    }
}
