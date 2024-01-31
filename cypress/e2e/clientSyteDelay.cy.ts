describe('CLIENT SYTE DELAY', () => {
    it('test', () => {
        cy.visit('/clientdelay');
cy.get('#ajaxButton').should('be.visible').and('exist').click()
cy.get('#spinner').should('be.visible').should('exist')
    });
    
});