import React from "react";
import { Box, Button, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TypeSelector from "./TypeSelector";

export default function Pokemon(props) {
  const { pokemon, clickHandler } = props

  return (
    (pokemon !== null) ?
      <Box style={{maxHeight:'80vh'}}>
        <h2 style={{ textTransform: 'capitalize' }}>
          {pokemon.name.replaceAll('-', ' ')}
        </h2>
        <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <img src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          >
          </img>
          <Stack direction="row" spacing={2}>
            {TypeSelector(pokemon.types[0].type.name)}
            {(pokemon.types[1]) ? TypeSelector(pokemon.types[1].type.name) : null}
          </Stack>
        </Stack>
        <Button onClick={() => clickHandler()}>
          <ArrowBackIcon />
        </Button>
      </Box> :
      <Box />
  )
}