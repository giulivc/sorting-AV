import Config from "../utils/Config.js";
import QuizJSON from "../utils/QuizJSON.js";

//class to create quiz according to previous visualized algorithm using SurveyJS

class Quiz {

    constructor(algorithm){

        this.algorithm = algorithm;

        // eslint-disable-next-line no-undef
        this.quiz = new Survey.Model(this.getQuizJSON(), "survey");
        this.editButton();
    }

    editButton(){

        document.querySelector(".sv-footer__complete-btn").value = "Fertig";

    }
 
    getQuizJSON(){

        var quizJSON;

        switch(this.algorithm){

            case Config.BUBBLESORT:
                quizJSON = QuizJSON.BUBBLESORT;
                break;
            case Config.SELECTIONSORT: 
                quizJSON = QuizJSON.SELECTIONSORT;
                break;
            case Config.INSERTIONSORT:
                quizJSON = QuizJSON.INSERTIONSORT;
                break;
            default: 
                break;
        }

        return quizJSON;
    }

    addOnCompleteListener(callback){
        this.quiz.onComplete.add(callback);
    }

}

export default Quiz;