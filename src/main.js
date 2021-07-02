import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';



const addListeners = () => {
	var Dark= document.querySelector('.main-content');
	Dark.classList.toggle('dark')
};

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);
	Dark.classList.remove('dark');
	addListeners();
};

main();


var checkbox = document.querySelector(".checkbox__input");
checkbox.addEventListener('click', addListeners);

