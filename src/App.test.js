import { render, screen } from '@testing-library/react';
import App from './App';

test('renders base', () => {
  render(<App />);
  const linkElement = screen.getByText(/Buscador de Pokémon/i);
  expect(linkElement).toBeInTheDocument();
});
