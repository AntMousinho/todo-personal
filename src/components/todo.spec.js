import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Todo from './todo.js';

describe('Testing Todo component', () => {
	beforeEach(() => {
		render(<Todo text="My first task!" />);
	})

	test('displays text when rendered', () => {
		const element = screen.getByText('My first task!');
		expect(element).toBeInTheDocument();
	})

	test('has a checkbox that toggles strikethrough', () => {
		const element = screen.getByText('My first task!');
		expect(element).toHaveStyle({textDecoration: ''});

		userEvent.click(screen.getByRole('checkbox'));
		
		expect(element).toHaveStyle({textDecoration: 'line-through'});
	})
})