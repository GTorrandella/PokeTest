import React, {useState, useEffect} from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
const PokemonSpeciesList = require('./PokemonSpeciesList.json');

export default function PokemonList(props) {

  const {pokedex, query, showPokemon} = props
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const pokemonToFetch = PokemonSpeciesList.species.filter((specie)=>{
      return(query != null && specie.name.includes(query))
    })
    const fetchData = async () => {
      let results = []
      for (let i = 0; i < pokemonToFetch.length; i++) {
        const data = await pokedex.getPokemonByName(pokemonToFetch[i].name);
        results.push(data);
      }
      setPokemonList(results);
    };
    fetchData();
  },[pokedex, query])

  return (
    <React.Fragment>
      {
        <ImageList>
          {(pokemonList.map((pokemon) => (
            <ImageListItem 
              key={pokemon.id}
              onClick={()=>showPokemon(pokemon)}>
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                srcSet={``}
                alt={pokemon.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={pokemon.name}
                position='bottom'
              />
            </ImageListItem>)))
          }
        </ImageList>
      }
    </React.Fragment>
  );
}