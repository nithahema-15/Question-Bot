function getAnswer() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let output = document.getElementById("output");

  let answers = {
    "html": "HTML is used to structure web pages.",
    "css": "CSS is used to style web pages.",
    "javascript": "JavaScript makes web pages interactive.",
    "react": "React is a JavaScript library for building UI.",
    "ai": "AI means machines that simulate human intelligence.",
    "intern": "To get an intern role, build projects and practice daily.",
    "project": "Start with simple projects and improve step by step."
  };

  let found = false;

  for (let key in answers) {
    if (input.includes(key)) {
      output.innerText = answers[key];
      found = true;
      break;
    }
  }

  if (!found) {
    output.innerText = "I don't understand. Try asking something else!";
  }
}