// cypress/e2e/make_appointment.cy.js

import AppointmentPage from '../pageObjects/appointmentPage';

describe('Appointment Test Scenario', () => {
  const appointmentPage = new AppointmentPage();

  it('Scenario 1 - Make an Appointment', () => {
    appointmentPage.visit();
    appointmentPage.clickMakeAppointment();
    appointmentPage.fillUsername('John Doe');
    appointmentPage.fillPassword('ThisIsNotAPassword');
    appointmentPage.clickLogin();
    appointmentPage.selectFacility('Seoul CURA Healthcare Center');
    appointmentPage.applyForHospitalReadmission();
    appointmentPage.selectHealthcareProgram('Medicaid');
    appointmentPage.setDate('30');  // Adjust the date navigation as needed
    appointmentPage.setComment('CURA Healthcare Service');
    appointmentPage.clickBookAppointment();
    appointmentPage.verifyAppointmentDetails('Seoul CURA Healthcare Center', true, 'Medicaid', '30', 'CURA Healthcare Service');
  });



  it('Scenario 2 - Appointment history empty', () => {
    appointmentPage.visit();
    appointmentPage.clickMakeAppointment();
    appointmentPage.fillUsername('John Doe'); // Replace with actual demo credentials
    appointmentPage.fillPassword('ThisIsNotAPassword'); // Replace with actual demo credentials
    appointmentPage.clickLogin();
    appointmentPage.openMenu();
    appointmentPage.verifySidebarIsActive();
    appointmentPage.clickHistory();
    appointmentPage.verifyNoAppointments();
  });
});
