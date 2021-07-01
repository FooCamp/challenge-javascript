import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

// Function to toggle theme based on the checkbox selection
const toggleTheme = () => {
	// Select checkbox from DOM
	const checkbox = document.querySelector('.checkbox__input');
	// Select element that has the class main-content which is the one that needs to be toggled with the theme
	const mainContent = document.querySelector('.main-content');
	// Define the class that needs to be added/removed from the main-content
	const darkClass = "dark";

	//Event listener that toggles the theme based on the Click event
	checkbox.addEventListener('click', () => {
		mainContent.classList.toggle(darkClass);
	});
};

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);

	toggleTheme();
};

main();