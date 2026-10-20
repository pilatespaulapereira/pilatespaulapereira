// Altere o número abaixo para o WhatsApp da Paula, com código do país e DDD.
// Exemplo de formato: 5531999999999 (não use +, espaços, parênteses ou traços).
const WHATSAPP_NUMBER = "5531999999999";
const WHATSAPP_MESSAGE = "Olá, Paula! Gostaria de saber mais sobre as aulas de Pilates.";

document.querySelectorAll(".whatsapp-link, .nav-cta, a[href='#contato']").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.classList.contains("whatsapp-link") || link.classList.contains("nav-cta")) {
      event.preventDefault();
      if (WHATSAPP_NUMBER === "5531999999999") {
        alert("Antes de publicar, substitua o número de exemplo pelo WhatsApp correto no arquivo script.js.");
        return;
      }
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.textContent = "☰";
  });
});
