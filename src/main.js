import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here

	// Change page theme challenge
	// Selecting the DOM element to listen to
	const checkboxThemeElement = document.getElementById('header-checkbox');

	// Selenting the event listener
	checkboxThemeElement.addEventListener('change', (event) => {
		const isChecked = event.target.checked;

	// Selecting the DOM element to apply the CSS class
		const mainContentElement = document.querySelector('.main-content');
		if (isChecked) {
			mainContentElement.classList.add('dark');
		} else {
			mainContentElement.classList.remove('dark');
		}
	})


	// Filter the cards by Pokemon type challenge
	// Selecting the DOM element to listen to
	const dropdownElement = document.getElementById('dropdown-types');
	
	// Selecting the event listener
	dropdownElement.addEventListener('change', (event) => {
	
		// Getting the option selected in the dropdown
		const selectedType = event.target.value;
	
		// Getting the card items from HTML
		const pokemonCards = document.querySelectorAll('.card-list__item');
		pokemonCards.forEach(pokemonItem => {
			// Getting the type of each pokemon
			const types = pokemonItem.getAttribute('data-types');
			// Adding or removing the hide class based on the option selected 
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