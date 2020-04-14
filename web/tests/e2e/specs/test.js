// https://docs.cypress.io/api/introduction/api.html

describe("Working with countries", () => {
  it("Search and navigate to Slovenia", () => {
    cy.visit("/");

    cy.get(".filtering").type("Slovenia");

    cy.get(".country-box").should("have.length", 1);

    cy.get(".country-box .box-name").should("have.text", "Slovenia");

    cy.get(".country-box").click();

    cy.url().should("include", "/country/SI");
  });

  it("Search for Slovenian city", () => {
    cy.visit("/country/SI");

    cy.get(".filtering").type("Celje");

    cy.get(".location-box").should("have.length", 1);

    cy.get(".location-box .box-name").should("have.text", "Celje");
  });

  it("Navigate back to main page", () => {
    cy.visit("/country/SI");

    cy.get(".go-back").click();

    cy.get(".go-back").should("not.be.visible");
  });
});
