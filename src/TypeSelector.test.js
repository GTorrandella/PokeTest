import { render, screen } from '@testing-library/react';
import TypeSelector from './TypeSelector';

test('renders normal type', async () => {
  render(TypeSelector('normal'));
  const typeImage = await screen.findByAltText(/.*?normal/i);
  const typeTitle = screen.getByText(/Normal/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders fighting type', async () => {
  render(TypeSelector('fighting'));
  const typeImage = await screen.findByAltText(/.*?fighting/i);
  const typeTitle = screen.getByText(/Fighting/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders flying type', async () => {
  render(TypeSelector('flying'));
  const typeImage = await screen.findByAltText(/.*?flying/i);
  const typeTitle = screen.getByText(/Flying/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders poison type', async () => {
  render(TypeSelector('poison'));
  const typeImage = await screen.findByAltText(/.*?poison/i);
  const typeTitle = screen.getByText(/Poison/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders ground type', async () => {
  render(TypeSelector('ground'));
  const typeImage = await screen.findByAltText(/.*?ground/i);
  const typeTitle = screen.getByText(/Ground/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders rock type', async () => {
  render(TypeSelector('rock'));
  const typeImage = await screen.findByAltText(/.*?rock/i);
  const typeTitle = screen.getByText(/Rock/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders bug type', async () => {
  render(TypeSelector('bug'));
  const typeImage = await screen.findByAltText(/.*?bug/i);
  const typeTitle = screen.getByText(/Bug/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders ghost type', async () => {
  render(TypeSelector('ghost'));
  const typeImage = await screen.findByAltText(/.*?ghost/i);
  const typeTitle = screen.getByText(/Ghost/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders steel type', async () => {
  render(TypeSelector('steel'));
  const typeImage = await screen.findByAltText(/.*?steel/i);
  const typeTitle = screen.getByText(/Steel/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders fire type', async () => {
  render(TypeSelector('fire'));
  const typeImage = await screen.findByAltText(/.*?fire/i);
  const typeTitle = screen.getByText(/Fire/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders water type', async () => {
  render(TypeSelector('water'));
  const typeImage = await screen.findByAltText(/.*?water/i);
  const typeTitle = screen.getByText(/Water/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders grass type', async () => {
  render(TypeSelector('grass'));
  const typeImage = await screen.findByAltText(/.*?grass/i);
  const typeTitle = screen.getByText(/Grass/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders electric type', async () => {
  render(TypeSelector('electric'));
  const typeImage = await screen.findByAltText(/.*?electric/i);
  const typeTitle = screen.getByText(/Electric/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders psychic type', async () => {
  render(TypeSelector('psychic'));
  const typeImage = await screen.findByAltText(/.*?psychic/i);
  const typeTitle = screen.getByText(/Psychic/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders ice type', async () => {
  render(TypeSelector('ice'));
  const typeImage = await screen.findByAltText(/.*?ice/i);
  const typeTitle = screen.getByText(/Ice/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders dragon type', async () => {
  render(TypeSelector('dragon'));
  const typeImage = await screen.findByAltText(/.*?dragon/i);
  const typeTitle = screen.getByText(/Dragon/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders dark type', async () => {
  render(TypeSelector('dark'));
  const typeImage = await screen.findByAltText(/.*?dark/i);
  const typeTitle = screen.getByText(/Dark/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});

test('renders fairy type', async () => {
  render(TypeSelector('fairy'));
  const typeImage = await screen.findByAltText(/.*?fairy/i);
  const typeTitle = screen.getByText(/Fairy/i);
  expect(typeTitle).toBeInTheDocument();
  expect(typeImage).toBeInTheDocument();
});
