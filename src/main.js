import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
	//Type Filter
	const dropdownTypes = document.getElementById("dropdown-types");
	dropdownTypes.addEventListener('change', typeShown);

	function typeShown(event) {
		var pokeType = event.target.value;
		var cardItems = document.getElementsByClassName('card-list__item');

		for(let i = 0; i < cardItems.length; i++) {

			if(pokeType === 'all'){
				cardItems[i].classList.remove('hide');
				//console.log(`mostrando tipo: ${pokeType}`);
			} else if (cardItems[i].getAttribute('data-types').includes(pokeType)) {
				cardItems[i].classList.remove('hide');
				//console.log(`mostrando tipo: ${pokeType}`);
			} else {
				cardItems[i].classList.add('hide');
			}

		}
	}
	//Type Filter ends
};

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);

	addListeners();
};

main();