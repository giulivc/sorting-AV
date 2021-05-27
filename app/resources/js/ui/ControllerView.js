
var startButton, buttonDescr;

class ControllerView {

    constructor(hasSequencer){

        this.hasSequencer = hasSequencer;
        
        startButton = document.getElementById("start-button");
        buttonDescr = document.getElementById("button-descr");
    }


    changeToStopButton(){

        if(this.hasSequencer){
            startButton.src = "/app/resources/data/pause-icon.png";
        } else {
            startButton.src = "/app/resources/data/cancel-icon.png";
            buttonDescr.innerHTML = "Stop";
        }
        
        

    }

    changeToStartButton(){

        startButton.src = "/app/resources/data/start-icon.png";
        buttonDescr.innerHTML = "Start";
    }



}

export default ControllerView;