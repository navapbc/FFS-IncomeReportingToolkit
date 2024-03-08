console.log("Entered main.js!");

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("In event handler!");
  const secret = getURLParameter('secret');
  if (secret == "hithere") {
    console.log("got secret!");
    document.title = `Secret: ${secret}`;
  }
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};
