const QuestionnaireJSON = {

    "title":"Über dich",
    "pages":[
        {"name":"page1","elements":[
            {   
                "type": "text",
                "name": "age",
                "title": "Alter",
                "hideNumber": true,
                "isRequired": true,
                "inputType": "number",
                "min": "16",
            },
            {
                "type": "radiogroup",
                "name": "gender",
                "title": "Geschlecht",
                "hideNumber": true,
                "isRequired": false,
                "choices":[
                    {"value":"w","text":"weiblich"},
                    {"value":"m","text":"männlich"},
                    {"value":"d","text":"divers"},
                ],
            },
            {  
                 "type":"text",
                "name":"studies",
                "title":"Studiengang",
                "hideNumber": true,
                "isRequired": true,
            },
            {
                "type":"text",
                "name":"semester",
                "title":"Fachsemester",
                "hideNumber": true,
                "isRequired": true,
                "inputType":"number",
                "min":"1",
            },
            {
                "type":"checkbox",
                "name":"studyprogress",
                "title":"Folgende Vorlesungen habe ich bereits erfolgreich besucht:",
                "hideNumber": true,
                "isRequired": true,
                "choices": [
                    {"value":"answer1","text":"eine Grundlagenvorlesung zur Einführung in die objektorientierte Programmierung (z.B. OOP)"},
                    {"value":"answer2","text":"eine Grundlagenvorlesung zur Einführung in die Anwendungsprogrammierung (z.B. Android)"},
                    {"value":"answer3","text":"eine Grundlagenvorlesung zu Algorithmen & Datenstrukturen (z.B. ADP)"},
                    {"value":"answer4","text":"eine Grundlagenvorlesung zu Datenbanken & -verarbeitung (z.B. Daten effizient speichern und verarbeiten)"},
                ],
            },
        ],
        "title":"Demographisches\n"},
        {"name":"page2","elements":[
            {"type":"matrix","name":"self-assessment","maxWidth":"","title":"Gib an, wie sehr diese Aussagen auf dich zutreffen:","hideNumber":true,"isRequired":true,"isAllRowRequired" : true,"columns":
                [{
                    value: 1,
                    text: "Trifft nicht zu",
                }, {
                    value: 2,
                    text: "Trifft eher nicht zu",
                }, {
                    value: 3,
                    text: "Neutral",
                }, {
                    value: 4,
                    text: "Trifft eher zu",
                }, {
                    value: 5,
                    text: "Trifft zu",
                }],
                "rows":
                ["Ich habe mich bereits mit dem BubbleSort-Algorithmus auseinandergesetzt.",
                "Ich habe mich bereits mit dem SelectionSort-Algorithmus auseinandergesetzt.",
                "Ich habe mich bereits mit dem InsertionSort-Algorithmus auseinandergesetzt.",
                "Ich kann den Ablauf verschiedener Sortieralgorithmen mit Worten beschreiben.",
                "Wenn mir die Funktionsweise eines Sortieralgorithmus beschrieben wird, kann ich diesen beim Namen nennen.",
                "Ich kann Sortieralgorithmen anhand ihrer Beschreibung namentlich unterscheiden."]}],
        "title":"Selbsteinschätzung"}],
        "showPageTitles":false,

};

Object.freeze(QuestionnaireJSON);

export default QuestionnaireJSON;