import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the to-do page", () => {
  cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html");
});
When("I click on the add icon when the input field is shown", () => {
  cy.plusIcon().click();
});
Then("the input field should disappear", () => {
  cy.input().should("have.css", "display", "none");
});
When("I click on the add icon when the input field is not shown", () => {
  cy.input().click();
});
Then("the input field should appear", () => {
  cy.input().should("have.attr", "style");
});
When("I fill the input field", () => {
  cy.input().type("this is the first todo");
});
When("I press enter", () => {
  cy.body().type("{enter}");
});

Then("todo should be added", () => {
  // Verify that the newly added todo item exists in the list
  cy.get("ul")
    .find("li")
    .last()
    .should("contain.text", "this is the first todo");
});
When("I click on the todo", () => {
  cy.listItem().click();
});
Then("todo will have a line on it", () => {
  cy.listItem().should("have.class", "completed");
});
When("I click on the done todo", () => {
  cy.listItem().click();
});
Then("todo will have no line on it", () => {
  cy.listItem().should("not.have.attr", "class", "");
});
When("I hover on the todo", () => {
  cy.get("ul > li").eq(0).invoke("show").trigger("mouseover", { force: true });
});

Then("delete icon appear", () => {
  cy.get("ul > li").eq(0).find("span").click({ force: true });
});
