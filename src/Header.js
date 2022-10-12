import React from 'react';
import { Button, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function Header(handleClick, showSearch) {

  const [text, setText] = React.useState(null);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      handleClick(text);
      showSearch();
    }
  }

  return (
    <header>
      <InputBase
        onChange={handleChange}
        onKeyUp={handleEnter}
        placeholder={'nombre de pokémon'}
      />
      <Button 
        aria-label="search"
        onClick={() => {handleClick(text);showSearch();}}
        onEnter>
        <Search />
      </Button>
    </header>
  );
}