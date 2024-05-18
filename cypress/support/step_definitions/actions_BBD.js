import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-real-events/support";

Given("I'm on the actions page", () => {
  cy.visit("https://www.webdriveruniversity.com/Actions/index.html");
});

When("I click and hold the item", () => {
  cy.get("#draggable")
    .trigger("mousedown", { which: 1, pageX: 100, pageY: 100 }) // Simulate mouse down event
    .trigger("mousemove", { which: 1, pageX: 200, pageY: 100 }) // Simulate mouse move event
    .trigger("mouseup"); // Simulate mouse up event
});

Then("the box should be red", () => {
  cy.get("#droppable > p").should(
    "have.css",
    "background-color",
    "rgb(244, 89, 80)"
  );
});

When("I double click the item", () => {
  cy.get("#double-click").dblclick();
});

Then("the class should change to 'double'", () => {
  cy.get("#double-click")
    .should("have.class", "double")
    .and("have.css", "background-color", "rgb(147, 203, 90)");
});

When("I hover on the first button", () => {
  cy.get(".dropdown.hover").realHover(); // Use realHover to simulate the hover event
  cy.wait(500); // Wait for the dropdown content to become visible
});

Then("the first dropdown should appear", () => {
  cy.get(".dropdown.hover .dropdown-content").should(
    "have.css",
    "display",
    "block"
  );
});

When("I hover on the second button", () => {
  cy.get('[style="float:center;"] > .dropbtn').realHover(); // Use realHover to simulate the hover event
  cy.wait(500); // Wait for the dropdown content to become visible
});

Then("the second dropdown should appear", () => {
  cy.get('[style="float:center;"] .dropdown-content').should(
    "have.css",
    "display",
    "block"
  );
});

When("I hover on the third button", () => {
  cy.get('[style="float:right;"] > .dropbtn').realHover(); // Use realHover to simulate the hover event
  cy.wait(500); // Wait for the dropdown content to become visible
});

Then("the third dropdown should appear", () => {
  cy.get('[style="float:right;"] .dropdown-content').should(
    "have.css",
    "display",
    "block"
  );
});
When("I click and hold the click box for 3 seconds", () => {
  cy.get("#click-box").trigger("mousedown", { which: 1 });

  // Continuously assert the color change during the hold
  const holdDuration = 3000; // Duration to hold in milliseconds
  const interval = 500; // Interval between checks in milliseconds

  for (let i = 0; i < holdDuration; i += interval) {
    cy.wait(interval);
    cy.get("#click-box").should(
      "have.css",
      "background-color",
      "rgb(0, 255, 0)"
    );
  }

  cy.get("#click-box").trigger("mouseup");
});
