describe('testing app output: ', () => {
	beforeEach(() => {
		cy.visit('/');
	})

	context('On load features', () => {
		it('Testing header', () => {
			cy.contains('Yet Another Todo List!');
		})
	
		it('On load, empty input box is visible', () => {
			cy.get('#todo-input').should('be.visible')
		})
	
		it('On load, Save button is visible', () => {
			cy.get('#save-todo').should('be.visible');
		})
	})

	context('Adding todo List elements', () => {
		it('After clicking Save, input box should be empty', () => {
			cy.get('#todo-input').type('My first task!');
			cy.get('#save-todo').click();

			cy.get('#todo-input').should('have.value', '')
		})

		it('After clicking save, task is displayed', () => {
			cy.get('#todo-input').type('My first task!');
			cy.get('#save-todo').click();

			cy.contains('My first task!')
		})
	})

	context('checkbox tests', () => {
		it('clicking todo checkbox enables strikethrough', () => {
			cy.get('#todo-input').type('My first task!');
			cy.get('#save-todo').click();
			
			cy.get('#todo-0-text').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)');
	
			cy.get('#todo-0-check').click();
	
			cy.get('#todo-0-text').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
		})

		it('clicking todo checkbox disables strikethrough if already checked', () => {
			cy.get('#todo-input').type('My first task!');
			cy.get('#save-todo').click();
			cy.get('#todo-0-check').click();

			cy.get('#todo-0-text').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');

			cy.get('#todo-0-check').click();

			cy.get('#todo-0-text').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 0)');
		})
	})

	context('Clear button tests: ', () => {
		it('empties the todoList entries when clear is clicked', () => {
			cy.get('#todo-input').type('My first task!');
			cy.get('#save-todo').click();
			cy.get('#todo-input').type('My second task!');
			cy.get('#save-todo').click();
			cy.get('#todo-input').type('My third task!');
			cy.get('#save-todo').click();

			cy.get('#todo-clear').click();

			cy.contains('My first task!').should('not.exist')
			cy.contains('My second task!').should('not.exist')
			cy.contains('My third task!').should('not.exist')
		})
	})
})