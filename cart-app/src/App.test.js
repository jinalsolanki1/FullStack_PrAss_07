import { render, screen } from '@testing-library/react';
import Cart from './App';

test('renders learn react link', () => {
  render(<Cart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
