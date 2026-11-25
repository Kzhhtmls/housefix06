

const WHATSAPP_NUMBER = "77053302614";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const name = (data.get("name") || "").trim();
  const service = data.get("service") || "Не указано";
  const area = (data.get("area") || "").trim();
  const details = (data.get("details") || "").trim();

  const lines = [
    "Здравствуйте! Хочу узнать стоимость и обсудить заказ.",
    "",
    `Меня зовут: ${name}`,
    `Услуга: ${service}`,
    `Площадь: ${area ? area + " м²" : "Пока не знаю"}`,
    `Описание: ${details || "Дополнительных подробностей пока нет."}`
  ];

  const message = encodeURIComponent(lines.join("\n"));

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(url, "_blank");
});


const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
