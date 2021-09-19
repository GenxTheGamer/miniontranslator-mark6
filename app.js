var btn = document.querySelector("#btn-translate"); //button
var inputText = document.querySelector("#txt-input"); //input
var outputText = document.querySelector("#txt-output"); //output
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error has occured", error);
  alert("Some error has occured, please try again.");
}

function clickHandler() {
  //clickEventListener
  //   outputText.innerText = "hihitrhi " + inputText.value;
  var textInput = inputText.value;
  //  console.log("event", inputText.value); //taking value of inputText.
  fetch(getTranslation(textInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
