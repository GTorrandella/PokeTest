import React, { useState, useEffect } from 'react';
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const PokemonSpeciesList = require('./PokemonSpeciesList.json');

export default function PokemonList(props) {

  const { pokedex, query, showPokemon, nextPage, prevPage, page, pageSize } = props
  const [pokemonList, setPokemonList] = useState([]);
  const [searchedPage, setSearchedPage] = useState(null);
  const [searchedQuery, setSearchedQuery] = useState(null);
  const pokemonToFetch = PokemonSpeciesList.species.filter((specie) => {
    return (query != null && specie.name.includes(query.toLocaleLowerCase()))
  })

  useEffect(() => {
    if(query !== searchedQuery){
      setSearchedQuery(query);
      setSearchedPage(null);
    }
    if(page !== searchedPage){
      const fetchData = async () => {
        let results = []
        for (let i = (page - 1) * pageSize; i < pokemonToFetch.length && i < pageSize * page; i++) {
          const data = await pokedex.getPokemonByName(pokemonToFetch[i].name);
          results.push(data);
        }
        setPokemonList(results);
        setSearchedPage(page);
      }
      fetchData();
    }
  }, [query, searchedQuery, page, searchedPage, pageSize, pokemonToFetch, pokedex])

  return (
    <React.Fragment>
      <ImageList style={{ maxHeight: '80vh' }} cols={3}>
        {(pokemonList.map((pokemon) => (
          <ImageListItem
            key={pokemon.id}
            onClick={() => showPokemon(pokemon)}>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              srcSet={``}
              alt={pokemon.name}
              loading="lazy"
            />
            <ImageListItemBar
              style={{ textTransform: 'capitalize' }}
              title={pokemon.name.replaceAll('-', ' ')}
              position='bottom'
            />
          </ImageListItem>)))
        }
      </ImageList>
      <div style={{ maxHeight: '10vh' }}>
        <Button disabled={page === 1}
          onClick={() => { prevPage() }}>
          <NavigateBeforeIcon />
        </Button>
        <Button disabled={Math.ceil(pokemonToFetch.length / pageSize) <= page}
          onClick={() => { nextPage() }}>
          <NavigateNextIcon />
        </Button>
      </div>
    </React.Fragment>
  );
}