/// <reference types = "Cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

import TravelPage from "../../pages/travelpage"

var travelPage = new TravelPage();

Given('This is the first', () => {
    cy.visit(travelPage.baseUrl);
})

When('This is visible', () => {
    cy.get(travelPage.searchBoxElement).should("be.visible");
})
