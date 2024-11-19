export function reset(optionNode){
    while(optionNode.firstElementChild){
            optionNode.removeChild(optionNode.firstElementChild);
    }
}