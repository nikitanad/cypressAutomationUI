import { before } from "cypress/types/lodash";

describe('Website', () => {
    beforeEach(()=>{
        cy.visit('/home')
    })
    it('Verify page', () => {
     cy.visit('/home')
     cy.title().should('eq',"UI Test Automation Playground")
     })
     it('Verify page', () => {
        cy.visit('/home')
        cy.window().title().then(element=>{
            cy.log(element)
            expect(element === "UI Test Automation Playground").to.be.true
            expect(element).to.eq("UI Test Automation Playground")
            cy.wrap(element).should('eq',"UI Test Automation Playground")
        })
        })
    });