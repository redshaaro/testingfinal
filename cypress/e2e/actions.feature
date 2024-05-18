Feature: actions page

  Scenario: drag & drop [1]
    Given I'm on the actions page
    When I click and hold the item
    Then the box should be red

  Scenario: double click [2]
    Given I'm on the actions page
    When I double click the item
    Then the class should change to 'double'

  Scenario: hover on first button [3]
    Given I'm on the actions page
    When I hover on the first button
    Then the first dropdown should appear

  Scenario: hover on second button [4]
    Given I'm on the actions page
    When I hover on the second button
    Then the second dropdown should appear

  Scenario: hover on third button [5]
    Given I'm on the actions page
    When I hover on the third button
    Then the third dropdown should appear
  Scenario: hold the click box [6]
    Given I'm on the actions page
    When I click and hold the click box for 3 seconds
    
