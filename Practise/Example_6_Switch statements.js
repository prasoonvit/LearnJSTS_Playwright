//A switch statement in JavaScript chooses what code to run based on one value. It’s useful when you have several possible exact matches.

const day = "Tuesday";

//If the value being checked by switch is exactly
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Friday":
    console.log("Almost the weekend");
    break;

  default:
    console.log("Another day");
}

const name = prompt("What is your name?");
console.log("Hello, " + name);