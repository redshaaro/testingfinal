Cypress.Commands.add("plusIcon", () => {
  cy.get("#plus-icon");
});
Cypress.Commands.add("input", () => {
  cy.get("input");
});
Cypress.Commands.add("body", () => {
  cy.get("body");
});
Cypress.Commands.add("listItem", () => {
  cy.get("ul > :nth-child(1)");
});
