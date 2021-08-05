const QuizJSON = {

    BUBBLESORT: {
        "title":"Quiz über Bubble Sort",
        "pages":[
            {"name":"page1","elements":[
                {
                    "type": "comment",
                    "name": "question1",
                    "title": "Beschreibe in 2-3 eigenen Sätzen den Ablauf der Sortierung eines Arrays mit dem eben visualisierten BubbleSort-Algorithmus:",
                    "hideNumber": true,
                    "isRequired": true,
                },
                {
                    "type":"checkbox",
                    "name":"question2",
                    "title":"Welches der folgenden \"Verfahren\" beim Aufnehmen von Spielkarten auf die Hand ähnelt dem Sortierverfahren des BubbleSort-Algorithmus?",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Der Spieler nimmt eine Karte nach der anderen auf und sortiert sie in die bereits aufgenommenen Karten ein."},
                        {"value":"answer2","text":"Der Spieler nimmt zuerst alle Karten auf und fängt dann an zu sortieren, indem er benachbarte Karten solange vertauscht, bis alle in der richtigen Reihenfolge liegen."},
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie rechts an die bereits aufgenommenen Karten an."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Kreuze alle wahren Aussagen an, wenn i den Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays beschreibt.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Im i-ten Durchlauf ist der Abschnitt (n-1-i) ... (n-1) des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Im i-ten Durchlauf ist der Abschnitt 0 ... i-1 bereits sortiert."},
                        {"value":"answer3","text":"Nach dem i-ten Durchlauf befindet sich das größte Element im Abschnitt 0 ... (n-1-i) an (n-1-i)-ter Stelle."},
                        {"value":"answer4","text":"Nach dem i-ten Durchlauf ist der Eintrag des Arrays an der Stelle i kleiner gleich jedem Element in i ... (n-1)."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ]
                },
                {
                    "type":"radiogroup",
                    "name":"question4",
                    "title":"In jeder Iteration wird das kleinste der noch ungeordneten Element gesucht und am rechten Ende des bereits sortierten Bereichs eingeordnet.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                }],
            },
        ],
    }, 

    SELECTIONSORT: {
        "title":"Quiz über Selection Sort",
        "pages":[
            {"name":"page1","elements":[
                {
                    "type": "comment",
                    "name": "question1",
                    "title": "Beschreibe in 2-3 eigenen Sätzen den Ablauf der Sortierung eines Arrays mit dem eben visualisierten SelectionSort-Algorithmus:",
                    "hideNumber": true,
                    "isRequired": true,
                },
                {
                    "type":"checkbox",
                    "name":"question2",
                    "title":"Welches der folgenden \"Verfahren\" beim Aufnehmen von Spielkarten auf die Hand ähnelt dem Sortierverfahren des SelectionSort-Algorithmus?",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Der Spieler nimmt eine Karte nach der anderen auf und sortiert sie in die bereits aufgenommenen Karten ein."},
                        {"value":"answer2","text":"Der Spieler nimmt zuerst alle Karten auf und fängt dann an zu sortieren, indem er benachbarte Karten solange vertauscht, bis alle in der richtigen Reihenfolge liegen."},
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie rechts an die bereits aufgenommenen Karten an."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Kreuze alle wahren Aussagen an, wenn i den Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays beschreibt.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Im i-ten Durchlauf ist der Abschnitt (n-1-i) ... (n-1) des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Im i-ten Durchlauf ist der Abschnitt 0 ... i-1 bereits sortiert."},
                        {"value":"answer3","text":"Nach dem i-ten Durchlauf befindet sich das größte Element im Abschnitt 0 ... (n-1-i) an (n-1-i)-ter Stelle."},
                        {"value":"answer4","text":"Nach dem i-ten Durchlauf ist der Eintrag des Arrays an der Stelle i kleiner gleich jedem Element in i ... (n-1)."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                },
                {
                    "type":"radiogroup",
                    "name":"question4",
                    "title":"In jeder Iteration wird ein beliebiges Element des noch unsortierten Bereichs an der richtigen Stelle eingesetzt.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                }],
            },
        ],
    }, 

    INSERTIONSORT: {
        "title":"Quiz über Insertion Sort",
        "pages":[
            {"name":"page1","elements":[
                {
                    "type": "comment",
                    "name": "question1",
                    "title": "Beschreibe in 2-3 eigenen Sätzen den Ablauf der Sortierung eines Arrays mit dem eben visualisierten InsertionSort-Algorithmus:",
                    "hideNumber": true,
                    "isRequired": true,
                },
                {
                    "type":"checkbox",
                    "name":"question2",
                    "title":"Welches der folgenden \"Verfahren\" beim Aufnehmen von Spielkarten auf die Hand ähnelt dem Sortierverfahren des InsertionSort-Algorithmus?",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Der Spieler nimmt eine Karte nach der anderen auf und sortiert sie in die bereits aufgenommenen Karten ein."},
                        {"value":"answer2","text":"Der Spieler nimmt zuerst alle Karten auf und fängt dann an zu sortieren, indem er benachbarte Karten solange vertauscht, bis alle in der richtigen Reihenfolge liegen."},
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie rechts an die bereits aufgenommenen Karten an."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Kreuze alle wahren Aussagen an, wenn i den Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays beschreibt.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"Im i-ten Durchlauf ist der Abschnitt (n-1-i) ... (n-1) des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Im i-ten Durchlauf ist der Abschnitt 0 ... i-1 bereits sortiert."},
                        {"value":"answer3","text":"Nach dem i-ten Durchlauf befindet sich das größte Element im Abschnitt 0 ... (n-1-i) an (n-1-i)-ter Stelle."},
                        {"value":"answer4","text":"Nach dem i-ten Durchlauf ist der Eintrag des Arrays an der Stelle i kleiner gleich jedem Element in i ... (n-1)."},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                },
                {
                    "type":"radiogroup",
                    "name":"question4",
                    "title":"Das größte Element wandert in jeder Iteration nach rechts.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
                        {"value":"noanswer","text":"Diese Frage kann ich nicht beantworten."},
                    ],
                }],
            },
        ],
    },

};

Object.freeze(QuizJSON);

export default QuizJSON;

