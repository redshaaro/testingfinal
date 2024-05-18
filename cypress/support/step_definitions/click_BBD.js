import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let confirmAppeared = false;

Given("I'm on the clicks page", () => {
  cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html");
});

When("I click on the js alert", () => {
  // Listen for the alert event
  cy.on("window:alert", () => {
    alertAppeared = true;
  });

  // Perform the action that triggers the alert
  cy.get("#button1").click();
});

Then("the alert box should appear", () => {
  // Assert that the alert appeared
  cy.wrap(null).then(() => {
    expect(alertAppeared).to.be.true;
  });
});

When("I click on modal", () => {
  // Perform the action that triggers the modal
  cy.get("#button2").click();
});

Then("the modal should appear", () => {
  // Assert the existence of the modal
  cy.get(".modal-body > p").should("exist");
});

When("I click on confirm box button", () => {
  // Listen for the confirm event
  cy.on("window:confirm", () => {
    confirmAppeared = true;
  });

  // Perform the action that triggers the confirm box
  cy.get("#button4").click();
});

Then("Confirm box should appear", () => {
  // Assert that the confirm box appeared
  cy.wrap(null).then(() => {
    expect(confirmAppeared).to.be.true;
  });
});
