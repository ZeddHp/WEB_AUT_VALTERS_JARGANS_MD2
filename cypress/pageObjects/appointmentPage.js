// cypress/support/pageObjects/appointmentPage.js

class AppointmentPage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    }

    /* scenario 1 */

    clickMakeAppointment() {
        cy.get('#btn-make-appointment').click();
    }

    fillUsername(name) {
        cy.get('#txt-username').type(name);
    }

    fillPassword(password) {
        cy.get('#txt-password').type(password);
    }

    clickLogin() {
        cy.get('#btn-login').click();
    }

    selectFacility(facility) {
        cy.get('#combo_facility').select(facility);
    }

    applyForHospitalReadmission() {
        cy.get('#chk_hospotal_readmission').check();
    }

    selectHealthcareProgram(program) {
        cy.get('input[value="' + program + '"]').check();
    }

    setDate(date) {
        cy.get('#txt_visit_date').click();
        cy.get('.datepicker-days').find('.day').contains(date).click();
    }

    setComment(comment) {
        cy.get('#txt_comment').type(comment);
    }

    clickBookAppointment() {
        cy.get('#btn-book-appointment').click();
    }

    verifyAppointmentDetails(facility, readmission, program, date, comment) {
        cy.get('#facility').should('have.text', facility);
        cy.get('#hospital_readmission').should('have.text', readmission ? 'Yes' : 'No');
        cy.get('#program').should('have.text', program);
        cy.get('#visit_date').invoke('text').then((text) => {
            const actualDateDay = text.split('/')[0];
            expect(actualDateDay).to.eq(date);
        });
        cy.get('#comment').should('have.text', comment);
    }


    /* scenario 2 */

    openMenu() {
        cy.get('#menu-toggle').click();
    }

    verifySidebarIsActive() {
        cy.get('#sidebar-wrapper').should('have.class', 'active');
    }

    clickHistory() {
        cy.get('.sidebar-nav').contains('History').click(); // Using the sidebar-nav class to find and click on History
    }

    verifyNoAppointments() {
        cy.get('.col-sm-12.text-center').contains('p', 'No appointment').should('be.visible');
    }
}

export default AppointmentPage;
