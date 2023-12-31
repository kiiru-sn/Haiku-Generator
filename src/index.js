function displayHaiku(response) {
  console.log("Haiku generated.");
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a54148fd46a72dfo367725b17e20t9b0";
  let prompt = `User instructions are: Generate a haiku about ${instructionsInput.value}`;
  let context =
    "You are a haiku expert and you love to write haikus. Your mission is to write a haiku and seperate each line with a <br />. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating haiku...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
