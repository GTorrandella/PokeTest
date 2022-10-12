import React, {useState} from 'react';
import './App.css';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';
import Header from './Header';

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function App() {

  const [showSearchState, setShowSearch] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const pageSize = 8;

  function showSearch(){
    setShowSearch(true);
  }
  function showPokemon(pokemon){
    setShowSearch(false);
    setPokemon(pokemon);
  }
  function resetPage(){
    setPage(1);
  }
  function prevPage(){
    setPage(page - 1);
  }
  function nextPage(){
    setPage(page + 1);
  }
  function manageQuery(text){
    setQuery(text);
    showSearch();
    resetPage();
  }
  
  return (
    <div className="App">
      {Header(manageQuery)}
      {
      (showSearchState) ? 
      <PokemonList 
        pokedex={P}
        query={query}
        showPokemon={showPokemon}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        pageSize={pageSize}/>: 
      <Pokemon pokemon={pokemon}/>
      }
    </div>
  );
}

export default App;
