Feature: To-do
    Scenario: clicking on the add icon when the input field is shown [1]
        Given I am on the to-do page
        When I click on the add icon when the input field is shown
        Then the input field should disappear
    Scenario: clicking on the add icon when the input field is not shown [2]
        Given I am on the to-do page
        When I click on the add icon when the input field is not shown
        Then the input field should appear
    Scenario: adding a todo [3]
        Given I am on the to-do page
        When I fill the input field
        When I press enter
        Then todo should be added
    Scenario: clicking the todo to be done [4]
        Given I am on the to-do page
        When I click on the todo

        Then todo will have a line on it
    Scenario: clicking the done todo   [5]
        Given I am on the to-do page
        When I click on the done todo

        Then todo will have no line on it
    Scenario: deleteing a todo   [6]
        Given I am on the to-do page
        When I hover on the todo 
        Then delete icon appear
         
       


