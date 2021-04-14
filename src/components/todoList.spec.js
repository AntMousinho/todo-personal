import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TodoList from './todoList.js';

describe('Testing on load: ', () => {
	beforeEach(() => {
		render(<TodoList />);
	})

	test('displays an empty input text box', () => {
		const element = screen.getByRole('textbox');
		expect(element).toBeInTheDocument();
	})

	test('displays a Save button', () => {
		const element = screen.getByRole('button');
		expect(element).toBeInTheDocument();
	})
})

describe('Testing save and display task: ', () => {
	beforeEach(() => {
		render(<TodoList />);
	})

	test('save 1 task and displays it', () => {
		userEvent.type(screen.getByRole('textbox'), 'My first todo!');
		userEvent.click(screen.getByRole('button'));

		const element = screen.getByText('My first todo!');
		expect(element).toBeInTheDocument();
	})

	test('save 2 tasks and displays both', () => {
		userEvent.type(screen.getByRole('textbox'), 'My first todo!');
		userEvent.click(screen.getByRole('button'));
		userEvent.type(screen.getByRole('textbox'), 'My second todo!');
		userEvent.click(screen.getByRole('button'));

		const element = screen.getByText('My first todo!');
		expect(element).toBeInTheDocument();

		const element2 = screen.getByText('My second todo!');
		expect(element2).toBeInTheDocument();
	})
})

describe('Clear button funtionality', () => {
	it('clears the todoList when clicked', () => {
		render(<TodoList />)
		userEvent.type(screen.getByRole('textbox'), 'My first todo!');
		userEvent.click(screen.getByRole('button'));
		userEvent.type(screen.getByRole('textbox'), 'My second todo!');
		userEvent.click(screen.getByRole('button'));
		userEvent.type(screen.getByRole('textbox'), 'My third todo!');
		userEvent.click(screen.getByRole('button'));

		const element = screen.getByText('My first todo!');
		const element2 = screen.getByText('My second todo!');
		const element3 = screen.getByText('My third todo!');

		userEvent.click(screen.getByRole('link'));

		expect(element).not.toBeInTheDocument();

		expect(element2).not.toBeInTheDocument();

		expect(element3).not.toBeInTheDocument();
	})
})
