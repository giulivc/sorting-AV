class ControllerView {

    getCurrentContainer(){

        var container;

        [...document.querySelector(".footer").children].forEach(function(controller){

            if(controller.style.display == "block"){
                container = controller;
            }
        });

        return container;

    }

    enableResetButton(){

        var resetButton = this.getCurrentContainer().querySelector("#reset-button");

        resetButton.style.opacity = "100%";
        resetButton.style.pointerEvents = "initial";
        resetButton.disabled = false;
    }

    disableResetButton(){

        var resetButton = this.getCurrentContainer().querySelector("#reset-button");

        resetButton.style.opacity = "50%";
        resetButton.style.pointerEvents = "none";
        resetButton.disabled = true;

    }

    changeToStartButton(){

        var startButton = this.getCurrentContainer().querySelector("#start-button"),
            pauseButton = this.getCurrentContainer().querySelector("#pause-button"),
            buttonDescr = this.getCurrentContainer().querySelector("#button-descr");

        startButton.style.display = "inline";
        pauseButton.style.display = "none";

        buttonDescr.innerHTML = "Play";
    
    }

    changeToPauseButton(){

        var startButton = this.getCurrentContainer().querySelector("#start-button"),
            pauseButton = this.getCurrentContainer().querySelector("#pause-button"),
            buttonDescr = this.getCurrentContainer().querySelector("#button-descr");

        pauseButton.style.display = "inline";
        startButton.style.display = "none";

        buttonDescr.innerHTML = "Pause";
    
    }


}

export default new ControllerView();
