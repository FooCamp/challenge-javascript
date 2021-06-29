import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
	
	//Theme change
	const themeSwitch = document.getElementById('header-checkbox');
	themeSwitch.addEventListener('change', changeTheme);

	function changeTheme(event) {
		//var status = event.target.checked;
		var mainContent = document.querySelector(".main-content");
		var navBar = document.querySelector(".header__nav");

		mainContent.classList.toggle('dark');
		navBar.classList.toggle('dark');
		//console.log(status);
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