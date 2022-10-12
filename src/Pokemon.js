import React from "react";
import { Box } from "@mui/material";

export default function Pokemon(props) {
  const { pokemon } = props

  return(
      (pokemon !== null) ?
      <Box>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        >
        </img>
      </Box> : 
      <Box />
  )
}