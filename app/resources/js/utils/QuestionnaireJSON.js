const QuestionnaireJSON = {

    "title":"Über dich",
    "pages":[
        {"name":"page1","elements":[
            {"type": "text","name": "age","title": "Alter","hideNumber": true,"isRequired": true,"inputType": "number","min": "16"},
            {"type": "radiogroup","name": "gender","title": "Geschlecht","hideNumber": true,"isRequired": true,"choices":[
                {"value":"w","text":"weiblich"},
                {"value":"m","text":"männlich"},
                {"value":"d","text":"divers"}]},
            {"type":"text","name":"studies","title":"Studiengang","hideNumber":true,"isRequired":true},
            {"type":"text","name":"semester","title":"Semester","hideNumber":true,"isRequired":true,"inputType":"number","min":"1"}
        ],
        "title":"Demographisches\n"},
        {"name":"page2","elements":[
            {"type":"matrix","name":"self-assessment","maxWidth":"","title":"Gib an, wie sehr diese Aussagen auf dich zutreffen:","hideNumber":true,"isRequired":true,"isAllRowRequired" : true,"columns":
                ["Stimmt nicht","Eher nicht","Weder noch","Eher schon ","Stimmt"],"rows":
                ["Aussage 1","Aussage 2","Aussage 3","Aussage 4", "Aussage 5"]}],
        "title":"Selbsteinschätzung"}],
        "showPageTitles":false

};

Object.freeze(QuestionnaireJSON);

export default QuestionnaireJSON;