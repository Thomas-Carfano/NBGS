import { MainPage } from "../Pages/shopping-page.cy";

beforeEach(() => {
  cy.visit("/");
});
it("should visit shopping page", function () {
  cy.get(MainPage.shoppingPage).click();
});
it("should visit location page", function () {
  cy.get('[data-cy="location-page"]').click();
});
it("should visit contact us page", function () {
  cy.get('[data-cy="contact-page"]').click();
});
it("should visit about us page", function () {
  cy.get('[data-cy="about-page"]').click();
});
