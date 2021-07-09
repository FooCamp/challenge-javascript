import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
		
	//Theme change
	const themeSwitch = document.getElementById('header-checkbox');
	themeSwitch.addEventListener('change', changeTheme);

	function changeTheme() {		
		var mainContent = document.querySelector(".main-content");
		mainContent.classList.toggle('dark');
	}
	//Theme change ends	

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