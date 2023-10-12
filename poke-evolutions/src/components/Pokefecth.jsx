import { useEffect, useState } from "react";

function Pokefecth() {
	// aumenta + 1 para ir buscando los pokemons
	const [nextPokemon, setNext] = useState(1);
	//imprimimos el valor de cada pokemon
	const [pokeName, setPokeName] = useState("");

	//incrementamos el contador 
	const incrementCount = () => {
		setNext(nextPokemon + 1);
	};

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemon}/`)
			.then((response) => response.json())
			.then((data) => setPokeName(data.name));
	}, [nextPokemon]); // Agregué [nextPokemon] como dependencia del efecto para que se actualice cuando nextPokemon cambie.

	return (
		<div className="">
			<button
				className="bg-red-400 rounded-xl w-10 h-6 py-4 px-4 flex justify-center items-center"
				onClick={incrementCount}>
				Next
			</button>
			<div className="">{pokeName}</div>
		</div>
	);
}

export default Pokefecth;
