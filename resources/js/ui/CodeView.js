var codeContainer;

class CodeView {

    constructor(){
        codeContainer = document.getElementById("pseudocode");
    }

    highlightStep(stepNum){
        codeContainer.children[stepNum].classList.add("highlighted");
    }

}

export default CodeView