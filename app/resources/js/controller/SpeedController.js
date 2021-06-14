var speedSlider;

class SpeedController {

    constructor(animationController){

        speedSlider = document.getElementById("speed-slider");
        speedSlider.addEventListener("change", (event) => animationController.onSpeedChanged(this.getCurrentSpeed()));

    }

    getCurrentSpeed(){
        return 2000 - speedSlider.value;
    }

    
}

export default SpeedController;