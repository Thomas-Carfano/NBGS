import { add } from "cypress/types/lodash";

class mainPageSelectors {
  visit() {
    cy.visit("/");
  }

  static shoppingPage = '[data-cy="shopping-page"]';

  static LocationPage = '[data-cy="location-page"]';

  static contactPage = '[data-cy="contact-page"]';

  static aboutPage = '[data-cy="about-page"]';
}
export default mainPageSelectors;
