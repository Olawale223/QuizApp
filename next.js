// go to next question
export function goToNextQuestion(){
    // change question
    questionIndex++;
    // reset our option
    reset(optionNode);
    startquiz();
}