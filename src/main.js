import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const addListeners = () => {
	// Code goes here
	const toggle = document.getElementById('header-checkbox');
	const background = document.querySelector('.main-content');
	const header = document.querySelector('.header__nav');

	const selector = document.getElementById('dropdown-types');
	const cardList = document.querySelectorAll('.card-list__item');
	
	// Theme Functionality
	toggle.addEventListener('change', () =>{
		if(toggle.checked){
			background.classList.add('dark');
			header.classList.add('dark');
			
		}else {
			background.classList.remove('dark');
			header.classList.remove('dark'); 
		}
	});

	//Filter functionality
	selector.addEventListener('change', () =>{

		const filterResult = [...cardList].filter(item => {
			const types = item.dataset.types;

			if (types.includes(selector.value) || selector.value == 'all'){
				item.classList.remove('hide');
				return true;
			}else{
				item.classList.add('hide');
				return false;
			}
			
		});
		console.log("%cResultado Filtro", 'color: #d14136; font-family: sans-serif; font-weight: bold; font-size: 24px');
		console.log(filterResult);
		
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