class ExperimentResult{

    constructor(startedAt){
        
        this.questionnaire = {};
        this.quizzes = {};
        this.log = [];
        this.log.push(new LogData("startedAt", startedAt));

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

    addTimestamp(key, value){
        var logEntry = new LogData(key, value);
        logEntry.delta = logEntry.value - this.log[0].value;
        this.log.push(logEntry);
    }

}

class LogData {

    constructor(key, value){

        this.key = key; 
        this.value = value;
        
    }
}

export default ExperimentResult;