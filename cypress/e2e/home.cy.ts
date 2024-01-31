
describe('ALERT', () => {
    it('waiting for alert to be present', () => {
        cy.visit('/expected_conditions.html', { timeout: 2000 });
    });

    it('load delay emulate', () => {
        cy.visit('/expected_conditions.html', { timeout: 5000 });
        cy.get("[id='alert_trigger']").click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am alerting you!');
        });
    });
});

describe('ALERT', () => {
    it('waiting for alert to be present', () => {
        cy.visit('/expected_conditions.html', { timeout: 2 });
    });
    it('load delay emulate', () => {
        cy.visit('/expected_conditions.html', { timeout: 5 });
        cy.get("[id='alert_trigger']").click();
        cy.contains( 'Show Alert')
    });
}); 