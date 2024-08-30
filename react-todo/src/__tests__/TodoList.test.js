import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  const heading = screen.getByText(/Todo List/i);
  expect(heading).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('deletes a todo', () => {
  render(<TodoList />);
  // Ensure initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getAllByText(/Delete/i)[0]);
  
  // Ensure the deleted todo is no longer in the document
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
