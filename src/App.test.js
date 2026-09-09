import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the masthead name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /eric robinson/i })).toBeInTheDocument();
});

test('renders each main section', () => {
  render(<App />);
  ['Work', 'Projects', 'Skills', 'Contact'].forEach((title) => {
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
  });
});

test('mobile nav toggle opens and closes', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /menu/i });
  const list = document.getElementById('nav-links');

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(list).not.toHaveClass('open');

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(list).toHaveClass('open');

  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(list).not.toHaveClass('open');
});

test('choosing a nav link closes the menu', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /menu/i }));
  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(document.getElementById('nav-links')).not.toHaveClass('open');
});
