var btn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");

function clickHandler() {
  console.log("click");
  console.log("event", inputText.value);
}

btn.addEventListener("click", clickHandler);

//querySelector live exercise
var ques1TextAreaTag = document.querySelector("textarea");
var quest2btnprimary = document.querySelector(".btn-primary");
var quest3inputBtn = document.querySelector("#input-btn");
var quest4inputTranslator = document.querySelector("input[name='translator']");
