import React from 'react';
import { Button, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Stack } from '@mui/system';

export default function Header(handleClick) {

  const [text, setText] = React.useState(null);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      handleClick(text);
    }
  }

  return (
    <header>
      <Stack direction="row" justifyContent="center"
          alignItems="center" spacing={2}
          style={{backgroundColor : 'lightgrey'}}>
      <div>Buscador de Pokémon</div>
      <InputBase
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder={'nombre de pokémon'}
      />
      <Button 
        aria-label="search"
        onClick={() => {handleClick(text)}}>
        <Search />
      </Button>
      </Stack>
    </header>
  );
}