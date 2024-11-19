// Named import
import { questionbank, checkForAnswer } from "./questionbank.js";
import { reset } from "./reset.js";

// create a variable index
var questionIndex = 0;
// select next node
var nextNode = document.getElementById("nextBtn")
nextNode.addEventListener("click", goToNextQuestion)
// select option node
var optionNode = document.getElementById("options");
var startquiz = function() {
    var currentQuestion = questionbank[questionIndex];
    // select question node
    var questionNode = document.getElementById("question");
    // insert question into question node
    questionNode.innerHTML = `${questionIndex + 1}. ${currentQuestion.question}`; 
    // loop through our array of options and append each to optionNode
    var currentOptions = currentQuestion.options;
    // console.log(currentOptions);

    for(var i = 0; i < currentOptions.length; i++){
        // create a button
        var buttonCreated = document.createElement("button");
        buttonCreated.innerHTML = currentOptions[i].answer;
        buttonCreated.addEventListener("click", checkForAnswer)
        // console.log(buttonCreated)
        buttonCreated.setAttribute("class", "opt")
        // store correct in button node
        buttonCreated.setAttribute("data-correct", currentOptions[i].correct)
        // insert option in button
        optionNode.append(buttonCreated)
        // append to option node   
    }
}



// go to next question
function goToNextQuestion(){
    // change question
    questionIndex++;
    // reset our option
    reset(optionNode);
    startquiz();
}


startquiz();