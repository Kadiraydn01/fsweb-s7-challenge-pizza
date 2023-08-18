describe("Order Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Order Sayfasına Gidiyor Mu", () => {
    cy.get(".btn").click();
  });

  it("Seçenek Ekleniyor mu", () => {
    cy.visit("http://localhost:3000/Order");
    cy.get("input[value='M']").check();

    cy.get("#exampleSelect").select("İnce Kenar");

    cy.get(`#checkbox-Pepperoni`).check();
    cy.get(`#checkbox-Sosis`).check();

    cy.get(
      "textarea[placeholder='Siparişine eklemek istediğin bir not var mı?']"
    ).type("Ekstra acı olsun lütfen.");
    cy.get("textarea[placeholder='Adres giriniz!']").type(
      "Örnek Mahallesi, Örnek Sokak No: 123"
    );

    cy.get(".btn-2").click();

    cy.get(".btn-sayac").click();

    cy.location("pathname").should("eq", "/success");
  });
});
