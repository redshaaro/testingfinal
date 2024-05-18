Feature: Clicks Page

    Scenario: click js alert[1]
        Given I'm on the clicks page
        When I click on the js alert
        Then the alert box should appear

    Scenario: click modal pop up[2]
        Given I'm on the clicks page
        When I click on modal
        Then the modal should appear
    Scenario: Clicking the confirm box[3]
        Given I'm on the clicks page
        When I click on confirm box button
        Then Confirm box should appear