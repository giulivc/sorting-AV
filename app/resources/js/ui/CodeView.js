var codeContainer;

class CodeView {

    constructor(){
        codeContainer = document.getElementById("pseudocode");
    }

    highlightStep(stepNum){
        let line = codeContainer.children[stepNum];

        this.removeHighlighting();
        
        if(!line.classList.contains("highlighted")){
            line.classList.add("highlighted");
        }    
    }

    removeHighlighting(){
        
        var listItems = codeContainer.getElementsByTagName("li");

        for(let i = 0; i < listItems.length; i++){

            if(listItems[i].classList.contains("highlighted")){
                listItems[i].classList.remove("highlighted");
            }
        }
        
    }


}

export default CodeView;