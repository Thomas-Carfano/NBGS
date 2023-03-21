describe("Shopping page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
});
it("should not run", function () {
  cy.visit("/").click('[ data-cy="shopping-page"]');
  // cy.visit("/").click('[data-cy="shopping-page"]');
});
