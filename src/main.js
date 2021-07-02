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
		
		Array.prototype.forEach.call(cardItems, function(elem){
			if(pokeType === 'all'){
				elem.classList.remove('hide');
			} else if(elem.getAttribute('data-types').includes(pokeType)){
				elem.classList.remove('hide');
			} else {
				elem.classList.add('hide');
			}
		});
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