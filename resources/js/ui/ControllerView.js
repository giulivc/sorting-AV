var visualizationStarted, 
    startButton, buttonDescr;

class ControllerView {

    constructor(){

        visualizationStarted = false;

        buttonDescr = document.getElementById("button-descr");
        startButton = document.getElementById("start-button");
        startButton.addEventListener("click", (event) => this.startVisualization());
    }

    startVisualization(){ 

        if(!visualizationStarted){
            this.onStartButtonClicked();
        } else {
            this.onStopButtonClicked();
        }
        
    }

    onStartButtonClicked(){
        visualizationStarted = true;

        startButton.src = "/resources/data/cancel-icon.png";
        buttonDescr.innerHTML = "Stop";
    }

    onStopButtonClicked(){
        visualizationStarted = false;

        startButton.src = "/resources/data/start-icon.png";
        buttonDescr.innerHTML = "Start";
    }



}

export default ControllerView;