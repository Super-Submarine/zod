const greetings = [
  ["Hello", "World!"],
  ["Hola", "Mundo!"],
  ["Bonjour", "Monde!"],
  ["Ciao", "Mondo!"],
  ["Namaste", "Duniya!"],
  ["Konnichiwa", "Sekai!"],
];

const messages = [
  "Hello right back at you.",
  "A little warmer already.",
  "Your greeting crossed the globe.",
  "The internet says hello.",
  "Nice to meet you!",
];

const root = document.documentElement;
const greeting = document.querySelector("#greeting");
const status = document.querySelector(".status");
const helloButton = document.querySelector("#say-hello");
const themeButton = document.querySelector(".theme-toggle");

let greetingIndex = 0;
let messageIndex = 0;

helloButton.addEventListener("click", () => {
  greetingIndex = (greetingIndex + 1) % greetings.length;
  messageIndex = (messageIndex + 1) % messages.length;

  const [firstLine, secondLine] = greetings[greetingIndex];
  greeting.innerHTML = `${firstLine},<br><em>${secondLine}</em>`;
  status.textContent = messages[messageIndex];

  helloButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.96)" },
      { transform: "scale(1)" },
    ],
    { duration: 220, easing: "ease-out" },
  );
});

themeButton.addEventListener("click", () => {
  const darkModeEnabled = root.classList.toggle("dark");
  themeButton.firstElementChild.textContent = darkModeEnabled ? "☾" : "☼";
  themeButton.setAttribute("aria-label", `Switch to ${darkModeEnabled ? "light" : "dark"} theme`);
});

document.querySelector("#year").textContent = new Date().getFullYear();
