import { render, screen } from '@testing-library/react';
import Pokemon from './Pokemon';

const mawile = require("./mawile.json")

test('renders Mawile', async () => {
    render(<Pokemon 
        pokemon={mawile} 
        clickHandler={null}></Pokemon>);
    const title = screen.getByText(/mawile/i);
    const image = await screen.getByAltText(/mawile/i);
    const typeFairy = await screen.getByAltText(/Type fairy/i);
    const typeSteel = await screen.getByAltText(/Type steel/i);
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mawile.sprites.other['official-artwork'].front_default);
    expect(typeFairy).toBeInTheDocument();
    expect(typeFairy).toHaveAttribute('src', "types/Fairy_icon_LA.webp");
    expect(typeSteel).toBeInTheDocument();
    expect(typeSteel).toHaveAttribute('src', "types/Steel_icon_LA.webp");
  });
  