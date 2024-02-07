import React, { useReducer } from 'react'
import { Header } from '../../../src/todo/components/header'
import { todoReducer } from '../../../src/todo/reducer'

describe('<Header />', () => {
    it('renders', () => {
        cy.mount(<Header />)
    })
})
