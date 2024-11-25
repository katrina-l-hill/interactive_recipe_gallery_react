import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Gallery from './Gallery';
import { images } from './imageList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Normal test cases

test('Navigates to the second image when Next button is clicked', () => {
  render(<Gallery />);

  expect(screen.getByAltText(`Recipe ${images[0].id}`)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Next/i));

  expect(screen.getByAltText(`Recipe ${images[1].id}`)).toBeInTheDocument();
});

test('Navigates to the first image when Previous button is clicked', () => {
  render(<Gallery />);

  fireEvent.click(screen.getByText(/Next/i));

  fireEvent.click(screen.getByText(/Previous/i));

  expect(screen.getByAltText(`Recipe ${images[0].id}`)).toBeInTheDocument();
});

test('Displays description of current image', () => {
  render(<Gallery />);

  expect(screen.getByText(images[0].description)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Next/i));

  expect(screen.getByText(images[1].description)).toBeInTheDocument();
});

//Edge test cases

test('Next button is disabled on the last image', () => {
  render(<Gallery />);

  for (let i = 0; i < images.length - 1; i++) {
    fireEvent.click(screen.getByText(/Next/i));
  }

  expect(screen.getByText(/Next/i)).toBeDisabled();
});

test('Previous button is disabled on the first image', () => {
  render(<Gallery />);

  expect(screen.getByText(/Previous/i)).toBeDisabled();
});

test('Handles empty image array gracefully', () => {
  
  jest.mock('./imageList', () => ({
    images: []
  }));

  render(<Gallery />);

  expect(screen.queryByAltText(/Recipe/)).not.toBeInTheDocument();

  expect(screen.getByText(/Previous/i)).toBeDisabled();
  expect(screen.getByText(/Next/i)).toBeDisabled();
});