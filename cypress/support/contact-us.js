Cypress.Commands.add("firstName", () => {
  cy.get('[name="first_name"]');
});
Cypress.Commands.add("lastName", () => {
  cy.get('[name="last_name"]');
});
Cypress.Commands.add("email", () => {
  cy.get('[name="email"]');
});
Cypress.Commands.add("feedBack", () => {
  cy.get("textarea.feedback-input");
});
Cypress.Commands.add("upload", () => {
  cy.get('[type="submit"]');
});
Cypress.Commands.add("thankYou", () => {
  cy.get("h1");
});
Cypress.Commands.add("clearForm",()=>{
    cy.get('[type="reset"]')
})
Cypress.Commands.add("error", () => {
  cy.get("body");
});
