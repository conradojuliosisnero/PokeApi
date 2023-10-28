import { useEffect, useState } from "react";
import Button from "./Buttons/Button";
import PokeCard from "./PokeCard/pokeCard";
import Reload from "./Reload/Reload";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";

function Pokefecth() {
	// aumenta + 1 para ir buscando los pokemons
	const [nextPokemon, setNext] = useState(1);

	//imprimimos el valor de cada pokemon
	const [pokeName, setPokeName] = useState("");

	//state de recargar

	const [reload, setReload] = useState(false);

	// state de carga del componente
	const [loading, setLoading] = useState(true);

	// state en caso de error del componente
	const [error, setError] = useState(null);

	//incrementamos el contador
	const incrementCount = () => {
		setNext(nextPokemon + 1);
		console.log(nextPokemon);
	};
	// decrementamos el contador
	const decrementCount = () => {
		setNext(nextPokemon - 1);
		console.log(nextPokemon);
	};

	const handelReload = () => {
		setLoading(true);
		setError(null);
		setReload(!reload);
	};

	// llamamos la funcion de serachPoke cada que se actualize el valor de nextPokemon
	useEffect(() => {
		searchPoke(nextPokemon)
	}, [nextPokemon,reload]);

	// funcion asincrona a la poke API
	const searchPoke = async (nextPokemon) => {

		const URL = `https://pokeapi.co/api/v2/pokemon/${nextPokemon}/`

		try {
			// hacemos el fecthin data a la poke API
			const result = await fetch(URL);

			if (result.ok) {
				// manejamos la promesa y lo pasamos a JSON
				const data = await result.json();
				// el state de pokename se actualiza
				setPokeName(data.name);
				// la carga no se muestra si la peticion es correcta
				setLoading(false);
				// el state de error no se muestra
				setError(null);
			} else {
				// mostramos el error por consola
				console.error(error);
				// mostramos este mensaje en caso de error en el state
				setError("Ocurrio un error innesperado intentalo mas tarde");
				// el state de carga se mantiene en false
				setLoading(false);
			}
		} catch (error) {
			// imprime el error por consola
			console.error(error);
			// en el estado de error muestra este mensaje
			setError("Ocurrio un error innesperado intentalo mas tarde");
			// la carga no se muestra en caso de error
			setLoading(false);
		}
	};

	return (
		<div className="">
			{loading ? (
				<Loading />
			) : error ? (
				<Error/>
			) : (
				<PokeCard pokeName={pokeName} />
			)}
			{error && (
				<Reload click={handelReload}/>
			)}

			{/* buttons from previus and next */}
			<div className="flex items-center justify-center w-15 py-4 px-4 bg-lime-400 rounded-full">
				<Button counter={decrementCount} name="Previus"></Button>
				<Button counter={incrementCount} name="Next"></Button>
			</div>
		</div>
	);
}

export default Pokefecth;
