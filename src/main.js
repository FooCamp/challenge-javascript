import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';



const addListeners = () => {
	let FilterType= document.querySelector('#dropdown-types').value;
	console.log(FilterType);
	let pokemon="";
	let listaPokemon=document.querySelectorAll(".card")
	listaPokemon.forEach(element => {
		if(FilterType==="all"){
			element.removeAttribute("style", "display:none");
		}else{
			let tipoPokemon=element.getAttribute("data-types");
			if(tipoPokemon.includes(FilterType)){
				element.removeAttribute("style", "display:none");
			}else{
				element.setAttribute("style", "display:none");
			}
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
var Filter= document.querySelector('#dropdown-types');
Filter.addEventListener('change', addListeners);
