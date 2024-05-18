import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";




Before(function () {
  cy.fixture("contact-us").then((data) => {
    globalThis.data = data;
  });
});
////////////////////////////////////////////// TEST SUITE
Given("I am on the Contact Us page", () => {
  cy.visit(data.contactUsURL);
});
/////////////////////////////////////////////////////

When("I fill out the Contact Us form with valid information", () => {
  cy.firstName().type(data.firstName);
  cy.lastName().type(data.lastName);
  cy.email().type(data.email);
  cy.feedBack().type(data.message);
});
When("I click the Submit button to submit the form", () => {
  cy.upload().click();
});
Then("I should see a thank you message", () => {
  cy.thankYou().should("have.text", data.successMessage);
});

When("I fill out the Contact Us form without firstname", () => {
  cy.lastName().type(data.lastName);
  cy.email().type(data.email);
  cy.feedBack().type(data.message);
});
When("I fill out the Contact Us form without lastname", () => {
  cy.firstName().type(data.firstName);

  cy.email().type(data.email);
  cy.feedBack().type(data.message);
});
When("I fill out the Contact Us form without email", () => {
  cy.firstName().type(data.firstName);
  cy.lastName().type(data.lastName);

  cy.feedBack().type(data.message);
});
When("I submit empty form", () => {
  cy.firstName().clear();
  cy.lastName().clear();
  cy.email().clear();
  cy.feedBack().clear();
});

When("I click the Submit button to trigger error", () => {
  cy.upload().click();
});
Then("I should see an error message", () => {
  cy.error().should("exist");
});
When("I click on reset botton", () => {
  cy.firstName().type(data.firstName);
  cy.lastName().type(data.lastName);
  cy.email().type(data.email);
  cy.feedBack().type(data.message);
  cy.clearForm().click();
});
Then("the form should get cleared", () => {
  cy.firstName().should("have.value", "");
  cy.lastName().should("have.value", "");
  cy.email().should("have.value", "");
  cy.feedBack().should("have.value", "");
});
