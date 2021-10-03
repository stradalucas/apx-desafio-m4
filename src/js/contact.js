function main() {
  headerComponent(document.querySelector(".section-header"));
  headerMobileInteraction();

  contactComponent(document.querySelector(".section-contact"));
  document.querySelector(".form__title").textContent = "Contacto";

  footerComponent(document.querySelector(".section-footer"));
}

main();
