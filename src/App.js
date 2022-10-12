import React, {useState, useEffect} from 'react';
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

  function manageQuery(text){
    setQuery(text);
  }
  function showSearch(){
    setShowSearch(true);
  }
  function showPokemon(pokemon){
    setShowSearch(false)
    setPokemon(pokemon)
  }

  
  return (
    <div className="App">
      {Header(manageQuery, showSearch)}
      {
      (showSearchState) ? 
      <PokemonList pokedex={P} query={query} showPokemon={showPokemon}/>: 
      <Pokemon pokemon={pokemon}/>
      }
    </div>
  );
}

export default App;
