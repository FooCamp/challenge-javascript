import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
	const dropdownElement = document.getElementById('dropdown-types');

	dropdownElement.addEventListener('change', (event) => {
		const selectedType = event.target.value;
		const pokemonCards = document.querySelectorAll('.card-list__item');
		pokemonCards.forEach(pokemonItem => {
			const types = pokemonItem.getAttribute('data-types');
			if (types.includes(selectedType) || selectedType === 'all') {
  				pokemonItem.classList.remove('hide');
			} else {
				pokemonItem.classList.add('hide');
			}
		})
	})
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