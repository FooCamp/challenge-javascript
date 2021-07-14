import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
};

// Punto 1 del reto: Activar el toglde del tema

const ourbackgraund = document.querySelector('.main-content')

const switchtheme = document.querySelector('.checkbox__input')

switchtheme.addEventListener('click', () => {
	ourbackgraund.classList.toggle('dark')
	console.log('theme switched')
	});


// Punto 2 del reto: filtrar por tipo de pokemon

const selectedtype = document.querySelector('#dropdown-types');

selectedtype.addEventListener('change', () => {
 const pokemontype = selectedtype.value
 filterPokemon (pokemontype)
})

function filterPokemon (pokemon) {
	const pokemonList = document.querySelectorAll('.card-list__item');
	Array.from(pokemonList).forEach((pokemonItem)=>{
	const dataType = pokemonItem.getAttribute('data-types');
	if (pokemon === 'all'){
		pokemonItem.classList.remove('hide')
	} else {
		if (!dataType.includes (pokemon)) {
			pokemonItem.classList.add('hide')
		} else {
			pokemonItem.classList.remove('hide')
		}
	}
	
	}) 
}

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);

	addListeners();
};

main();