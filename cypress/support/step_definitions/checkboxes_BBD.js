import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I'm on the checkbox page", () => {
  cy.visit(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
});

When("I select Option 1", () => {
  cy.get('input[value="option-1"]').check().should("be.checked");
});

When("I select Option 2", () => {
  cy.get('input[value="option-2"]').check().should("be.checked");
});

Then("Option 1 should be selected", () => {
  cy.get('input[value="option-1"]').should("be.checked");
});

Then("Option 2 should be selected", () => {
  cy.get('input[value="option-2"]').should("be.checked");
});
