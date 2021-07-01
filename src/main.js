import { getPokemonList } from './api/index.js';
import { createDropdownTypes, createPokemonList } from './dom/index.js';

const filterCards = () => {
	// Define variable to select the Dropdown from the DOM.
	const dropdownType = document.getElementById("dropdown-types"); 

	// Add the event listener to the Dropdown to catch when the selection changes and filter the list based on the selection
	dropdownType.addEventListener('change', (event) => {
		// Constant with the Card list item DOM element
		const cardsList = document.querySelectorAll(".card-list__item");
		// Variable to store the value selected in the dropdown
		let currentSelection = dropdownType.value;
		// Variable to store the type of the pokemon that is being evaluated
		let currentPokemonType = "";
		
		// Logic to determine wheter the element should have the hide class or not
		// If the selection is "all", the hide class should be removed from all the elements
		// If the selection is a type, the "hide"class should be added to the pokemons that do not have that type
		// and should be removed from the pokemons that have that type.
		if (currentSelection == "all") {
			cardsList.forEach(element => {
					element.classList.remove("hide");
			});
		} else {
			cardsList.forEach(element => {
				currentPokemonType = element.attributes[0].value;
				if (currentPokemonType.includes(currentSelection)) {
						element.classList.remove("hide");
				} else {
						element.classList.add("hide");
				}
			});
		}
	});
};

const main = async () => {
	const app = document.getElementById("app");
	const dropdownTypes = document.getElementById("dropdown-types");
	const pokemonList = await getPokemonList();
	
	createPokemonList(pokemonList, app);
	createDropdownTypes(pokemonList, dropdownTypes);

	filterCards();
};

main();