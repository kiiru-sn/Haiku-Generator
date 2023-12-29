function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "Generating haiku...",
    autoStart: true,
  });
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
