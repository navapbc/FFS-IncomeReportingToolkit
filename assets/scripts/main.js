console.log("Entered main.js!");

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("In event handler!");
  const secret = getURLParameter('secret');
  if (secret == "hithere") {
    console.log("got secret!");
    document.title = `Secret: ${secret}`;
  }
});
