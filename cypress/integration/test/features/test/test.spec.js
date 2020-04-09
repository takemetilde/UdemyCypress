/// <reference types = "Cypress" />

import TravelPage from '../../pages/travelpage'
import {given, and, then} from "cypress-cucumber-preprocessor"

var travelPage = new TravelPage();

given('This is the first', () => {
    cy.visit(travelPage.url);
})
