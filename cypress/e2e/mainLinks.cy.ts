import { contains } from "cypress/types/jquery";
import mainPage from "../fixtures/Pages";

beforeEach("visit NBGS", () => {
  cy.visit("/");
});

it("should open to shopping page", () => {
  cy.get(mainPage.shoppingPage).click();
  cy.contains("Golf-Clubs");
  cy.contains("Golf Balls");
  cy.contains("Apparel");
  cy.contains("Accessories");
});

it("should open to location page", () => {
  cy.get(mainPage.LocationPage).click();
});

it("should open to contact page", () => {
  cy.get(mainPage.aboutPage).click();
});

it("should open to about page", () => {
  cy.get(mainPage.contactPage).click();
});
