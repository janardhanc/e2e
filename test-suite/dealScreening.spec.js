describe('DealScreening Suite', () => {
    beforeEach(() => {
        cy.Login(); 
    });

        it('Should login and land on dealscreening', () => {
            cy.fixture('ui/dealScreening').then((json) => {
            cy.url().should('eq', json.dashBoardUrl);
            cy.wait(150000); 
            cy.landOnDealScreening();            
            cy.url().should('eq', json.dealScreeningUrl);
        });
    });    
});