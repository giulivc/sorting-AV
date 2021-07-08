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
                [{
                    value: 1,
                    text: "Stimmt nicht"
                }, {
                    value: 2,
                    text: "Eher nicht"
                }, {
                    value: 3,
                    text: "Weder noch"
                }, {
                    value: 4,
                    text: "Eher schon"
                }, {
                    value: 5,
                    text: "Stimmt"
                }],
                "rows":
                ["Ich habe mich bereits mit Sortieralgorithmen auseinandergesetzt.",
                "Ich kann den Ablauf verschiedener Sortieralgorithmen mit Worten beschreiben.",
                "Wenn mir die Funktionsweise eines Sortieralgorithmus beschrieben wird kann ich diesen beim Namen nennen.",
                "Ich kann Sortieralgorithmen anhand ihrer Beschreibung namentlich unterscheiden."]}],
        "title":"Selbsteinschätzung"}],
        "showPageTitles":false

};

Object.freeze(QuestionnaireJSON);

export default QuestionnaireJSON;