var score = 0;
export var questionbank = [
    {
        question:"Select the correct OOP concept from the following list:",
        options:[
            {
                answer:"Encapsulation",
                correct: true
            },
            {
                answer:"Java",
                correct: false
            },
            {
                answer:"Methods",
                correct: false
            },
            {
                answer:"Properties",
                correct: false
            }
        ]
    },

    //second question
    {
        question:"Select the correct statements from the following list:",
        options:[
            {
                answer:"An object must be created",
                correct: false
            },
            {
                answer:"A Java object has behaviour",
                correct: false
            },
            {
                answer:"A constructor is a property",
                correct: false
            },
            {
                answer:"A Java object has methods",
                correct: true
            }
        ]
    },

    // third question
    {
        question:"Select the correct statements from the following list:",
        options:[
            {
                answer:"Encapsulation hides the class name",
                correct: false
            },
            {
                answer:"Encapsulation allows access to data only via methosds",
                correct: false
            },
            {
                answer:"A constructor is a property",
                correct: false
            },
            {
                answer:"Encapsulations does not allow direct acces to methods",
                correct: true
            }
        ]
    }
]

// check for answer
export function checkForAnswer(e){
    // console.log(e.target);
    var node = e.target;
    var isOptionCorrect = node.dataset.correct;
    // console.log(isOptionCorrect)
    node.style.color = "white";
    if(isOptionCorrect == "true"){
        node.style.backgroundColor = "green";
        score++;
    }else{
        node.style.backgroundColor = "red";
    }

    // move to parent node
    var parentNode = node.parentNode;
    console.log(parentNode)
    // get the children of the parent
    var childrenNodes = parentNode.children;
    // console.log(childrenNodes);
    // loop through the children
    for(var i = 0; i < childrenNodes.length; i++){
        childrenNodes[i].setAttribute("disabled", true);        
    }
}

// default export: export default questionbank;