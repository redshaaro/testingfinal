import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I'm on the accordion page", () => {
  cy.visit("https://www.webdriveruniversity.com/Accordion/index.html");
});

When("I click on the manual testing accordion", () => {
  cy.get("#manual-testing-accordion").click();
});

Then("the manual testing description should appear", () => {
  cy.get("#manual-testing-description").should("be.visible");
});
When("I click on the cucumber accordion", () => {
  cy.get("#cucumber-accordion").click();
});

Then("the cucumber testing description should appear", () => {
  cy.get("#cucumber-testing-description > p").should("be.visible");
});
When("I click on the automation accordion", () => {
  cy.get("#automation-accordion").click();
});

Then("the automation testing description should appear", () => {
  cy.get("#automation-testing-description > p").should("be.visible");
});
When("I click on the click accordion", () => {
  cy.get("#click-accordion").click();
});

Then("the timeout should appear", () => {
  cy.get("#timeout").should("be.visible");
});
