import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Pokemon(props) {
  const { pokemon, clickHandler } = props

  return(
      (pokemon !== null) ?
      <Box>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        >
        </img>
        <Button onClick={()=>clickHandler()}>
          <ArrowBackIcon />
        </Button>
      </Box> : 
      <Box />
  )
}