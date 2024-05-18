Feature: accordion page

    Scenario: click on manual testing accordion [1]
        Given I'm on the accordion page
        When I click on the manual testing accordion
        Then the manual testing description should appear
    Scenario: click on cucumber accordion [2]
        Given I'm on the accordion page
        When I click on the cucumber accordion
        Then the cucumber testing description should appear
    Scenario: click on automation accordion [3]
        Given I'm on the accordion page
        When I click on the automation accordion
        Then the automation testing description should appear
    Scenario: click on click accordion [4]
        Given I'm on the accordion page
        When I click on the click accordion
        Then the timeout should appear