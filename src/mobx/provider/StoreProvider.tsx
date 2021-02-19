import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { RootStore } from "../rootStore";

let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }): JSX.Element {
	const root = store ?? new RootStore();

	return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStores() {
	const context = useContext(StoreContext);
	if (context === undefined) {
		throw new Error("useRootStore must be used within RootStoreProvider");
	}

	return context;
}
