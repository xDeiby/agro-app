import { Component } from "react";

// TODO: WithTable
export interface WithTableConfig {
	name: string;
}

export interface TableConfig {
	nose: string;
}

export declare type CompositeComponent<P> = React.FC<P>;

export interface ComponentDecorator<TOwnProps, TMergedProps> {
	(component: CompositeComponent<TMergedProps>): React.ComponentType<TOwnProps>;
}

// export function withTable<P>({name, ...config}: WithTableConfig): ComponentDecorator<P, TableConfig>{

//     const mycomponent : ComponentDecorator<P, TableConfig> = (component: React.FC<TableConfig>) => () => <Component />

//     return mycomponent;
// }
