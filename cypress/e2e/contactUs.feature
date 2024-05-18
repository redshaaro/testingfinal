Feature: Contact Us Page Functionality

 Scenario: Submitting a successful contact request [1]
    Given I am on the Contact Us page
    When I fill out the Contact Us form with valid information
    And I click the Submit button to submit the form
    Then I should see a thank you message

Scenario: Submitting a contact request with firstname missing [2]
    Given I am on the Contact Us page
    When I fill out the Contact Us form without firstname
    And I click the Submit button to trigger error
    Then I should see an error message

Scenario: Submitting a contact request with lastname missing [3]
    Given I am on the Contact Us page
    When I fill out the Contact Us form without lastname
    And I click the Submit button to trigger error
    Then I should see an error message
Scenario: Submitting a contact request with email missing [4]
    Given I am on the Contact Us page
    When I fill out the Contact Us form without email
    And I click the Submit button to trigger error
    Then I should see an error message
Scenario: Submitting an empty form [6]
    Given I am on the Contact Us page
    When I submit empty form
    And I click the Submit button to trigger error
    Then I should see an error message
Scenario: clicking on reset botton [7]
    Given I am on the Contact Us page
    When I click on reset botton
     
    Then the form should get cleared
