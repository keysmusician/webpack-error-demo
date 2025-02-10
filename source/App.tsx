import { createEffect, on } from "solid-js";
import { createStore } from "solid-js/store";
import { trackStore } from "@solid-primitives/deep";

export function App() {
	const [store, setStore] = createStore<object>({})

	createEffect(on(
		() => trackStore(store),
		() => {
			console.log('Store changed')
		}
	));

	return (<></>);
}
