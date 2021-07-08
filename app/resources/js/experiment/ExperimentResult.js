class ExperimentResult{

    constructor(){
        
        this.questionnaire = {};
        this.quizzes = {};
        this.timestamps = {};

    }


    saveQuestionnaireData(data){
        Object.assign(this.questionnaire, data);
    }

    saveQuizData(algorithm, data){
        this.quizzes[algorithm] = data;
    }

    saveFeedback(feedback){
        this.feedback = feedback;
    }

    addTimestamp(key, timestamp){
        this.timestamps[key] = timestamp;
    }

    

}

export default ExperimentResult;