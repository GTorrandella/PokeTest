import React, {useState, useEffect} from 'react';
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
const PokemonSpeciesList = require('./PokemonSpeciesList.json');

export default function PokemonList(props) {

  const {pokedex, query, showPokemon, nextPage, prevPage, page, pageSize} = props
  const [pokemonList, setPokemonList] = useState([]);
  const pokemonToFetch = PokemonSpeciesList.species.filter((specie)=>{
    return(query != null && specie.name.includes(query))
  })

  useEffect(() => {
    const fetchData = async () => {
      let results = []
      for (let i = (page - 1)*pageSize; i < pokemonToFetch.length && i < pageSize*page; i++) {
        const data = await pokedex.getPokemonByName(pokemonToFetch[i].name);
        results.push(data);
      }
      setPokemonList(results);
    };
    fetchData();
  },[pokemonToFetch, pokedex, query, page, pageSize])

  return (
    <React.Fragment>
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
      <Button disabled={page === 1}
      onClick={()=>{prevPage()}}>
          MENOS
      </Button>
      <Button disabled={Math.ceil(pokemonToFetch.length/pageSize) <= page}
      onClick={()=>{nextPage()}}>
          MAS
      </Button>
    </React.Fragment>
  );
}