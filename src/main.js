import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
	const toggle = document.getElementById('header-checkbox');
	const background = document.querySelector('.main-content');
	const header = document.querySelector('.header__nav');
	
	toggle.addEventListener('change', () =>{
		if(toggle.checked){
			console.log("Checkbox is checked..");
			background.classList.add('dark');
			header.classList.add('dark');
			
		}else {
			console.log("Checkbox is not checked..");
			background.classList.remove('dark');
			header.classList.remove('dark'); 
		}
	});
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