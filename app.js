var btn = document.querySelector("#btn-translate"); //button
var inputText = document.querySelector("#txt-input"); //input
var outputText = document.querySelector("#txt-output"); //output

function clickHandler() {
  //clickEventListener
  outputText.innerText = "hihitrhi" + inputText.value;

  console.log("event", inputText.value); //taking value of inputText.
}

btn.addEventListener("click", clickHandler);
