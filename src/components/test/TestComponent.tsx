import { observer } from "mobx-react";
import { useStores } from "../../mobx/provider/StoreProvider";

function TestComponent(): JSX.Element {
	const { info, users, addUser } = useStores().tableStore;

	console.log(info);

	return (
		<div>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}

			<button onClick={() => addUser({ id: "123", name: "Juan", age: 20 })}>agregar</button>
		</div>
	);
}

export default observer(TestComponent);
