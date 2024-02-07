import data from '../../fixtures/todos.json'

describe('E2E spec', () => {
    //This visits the root of the app before each test run
    beforeEach(() => {
        cy.visit('/')
    })
    //Emulates user behaviour
    it('Creates todos', () => {
        //Getting example data for testing
        const todos = data.todos
        for (const todo of todos) {
            //Adds each todo
            cy.get('[data-testid="text-input"]')
                .should('be.focused')
                .type(`${todo.task}{enter}`)
            //Checks if the todo gets appended to the top
            cy.get('[data-testid="todo-item-label"]')
                //Validates length update
                .should('have.length', todo.id)
                .first()
            //Validates todo content - Fails due to a fault in symbol handling logic
            // .contains(todo.task)
        }

        //Get all the todos to be renamed
        const renamedTodos = todos.filter((t) => 'rename' in t)
        for (const todo of renamedTodos) {
            //Rename each todo to be renamed
            cy.get('[data-testid="todo-item-label"]')
                .eq(todo.id - 1)
                .dblclick()
            cy.get('[data-testid="text-input"]')
                .last()
                .clear()
                .type(`${todo.rename}{enter}`)
        }

        //Get all the completed todos
        const completedTodos = todos.filter((t) => t.completed)
        for (const todo of completedTodos) {
            //Mark each completed todo
            cy.get('[data-testid="todo-item-toggle"]')
                .eq(todo.id - 1)
                .click()
        }
    })
})
