import Config from "../utils/Config.js";
import QuestionnaireJSON from "../utils/QuestionnaireJSON.js";

//class to create demographics and self assessment questionnaire using SurveyJS

class Questionnaire {

    constructor(){

        this.editColorTheme();
        this.questionnaire = new Survey.Model(QuestionnaireJSON, "survey");
        this.editButtons();
        
        
    }

    editColorTheme(){

        var themeColors = Survey.StylesManager.ThemeColors["modern"];

        themeColors["$main-color"] = Config.MAIN_PURPLE;
        themeColors["$text-color"] = "white";
        themeColors["$text-input-color"] = "white";
        themeColors["$answer-background-color"] = "rgba(153, 128, 255, 0.1)";
        themeColors["$radio-checked-color"] = Config.LIGHT_PURPLE;

        Survey.StylesManager.applyTheme("modern");

    }

    editButtons(){

        document.querySelector(".sv-footer__next-btn").value = "Weiter";
        document.querySelector(".sv-footer__prev-btn").value = "Zurück";
        document.querySelector(".sv-footer__complete-btn").value = "Starten";

    }


    addOnCompleteListener(callback){
        this.questionnaire.onComplete.add(callback);
    }


}

export default Questionnaire;