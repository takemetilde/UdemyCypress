/// <reference types = "Cypress" />

import TravelPage from '../../pages/travelpage'
import {Given, And, Then} from "cypress-cucumber-preprocessor/steps"

var travelPage = new TravelPage();

Given('This is the first', () => {
    cy.visit(travelPage.url);
})
