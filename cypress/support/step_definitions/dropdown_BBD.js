import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I'm on the dropdown page", () => {
    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
  });
  
  When("I select python", () => {
    cy.get("#dropdowm-menu-1").select("Python").should("have.value", "python");
  });
  
  When("I select java", () => {
    cy.get("#dropdowm-menu-1").select("JAVA").should("have.value", "java");
  });
  
  When("I select c", () => {
    cy.get("#dropdowm-menu-1").select("C#").should("have.value", "c#");
  });
  
  When("I select sql", () => {
    cy.get("#dropdowm-menu-1").select("SQL").should("have.value", "sql");
  });
  When("I select maven", () => {
    cy.get("#dropdowm-menu-2").select("Maven").should("have.value", "maven");
  });
  
  When("I select testng", () => {
    cy.get("#dropdowm-menu-2").select("TestNG").should("have.value", "testng");
  });
  
  When("I select junit", () => {
    cy.get("#dropdowm-menu-2").select("JUnit").should("have.value", "junit");
  });
  
  When("I select eclipse", () => {
    cy.get("#dropdowm-menu-2").select("Eclipse").should("have.value", "eclipse");
  });
  When("I select css", () => {
    cy.get("#dropdowm-menu-3").select("CSS").should("have.value", "css");
  });
  
  When("I select javascript", () => {
    cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value", "javascript");
  });
  
  When("I select jqeury", () => {
    cy.get("#dropdowm-menu-3").select("JQuery").should("have.value", "jquery");
  });
  
  When("I select html", () => {
    cy.get("#dropdowm-menu-3").select("HTML").should("have.value", "html");
  });
  
  
  