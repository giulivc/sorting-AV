const QuizJSON = {

    BUBBLESORT: {
        "title":"Quiz über Bubble Sort",
        "pages":[
            {"name":"page1","elements":[
                {
                    "type": "comment",
                    "name": "question1",
                    "title": "Beschreibe die Funktionsweise des BubbleSort-Algorithmus mit eigenen Worten:",
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
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie links an die bereits aufgenommen Karten an."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Sei k der Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays. Kreuze alle wahren Aussagen an.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"In der k-ten Iteration ist der Abschnitt k ... n-1 des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Das größte Element im Abschnitt 0 ... k befindet sich an k-ter Stelle."},
                        {"value":"answer3","text":"Der Abschnitt 0 ... k - 1 ist bereits sortiert"},
                        {"value":"answer4","text":"Der Eintrag des Arrays an der Stelle k ist kleiner gleich jedem Element in k ... n-1"},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question4",
                    "title":"In jeder Iteration setzen wir ein beliebiges Element des noch unsortierten Bereichs an der richtigen Stelle ein.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
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
                    "title": "Beschreibe die Funktionsweise des oben genannten Sortieralgorithmus mit eigenen Worten:",
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
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie links an die bereits aufgenommen Karten an."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Sei k der Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays. Kreuze alle wahren Aussagen an.",
                    "hideNumber": true,
                    "choices": [
                        {"value":"answer1","text":"In der k-ten Iteration ist der Abschnitt k ... n-1 des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Das größte Element im Abschnitt 0 ... k befindet sich an k-ter Stelle."},
                        {"value":"answer3","text":"Der Abschnitt 0 ... k - 1 ist bereits sortiert"},
                        {"value":"answer4","text":"Der Eintrag des Arrays an der Stelle k ist kleiner gleich jedem Element in k ... n-1"},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question4",
                    "title":"In jeder Iteration wird das kleinste der noch ungeordneten Element gesucht und am rechten Ende des bereits sortierten Bereichs eingeordnet.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
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
                    "title": "Beschreibe die Funktionsweise des oben genannten Sortieralgorithmus mit eigenen Worten:",
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
                        {"value":"answer3","text":"Der Spieler nimmt die jeweils niedrigste der verbliebenen Karten auf und fügt sie links an die bereits aufgenommen Karten an."},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question3",
                    "title":"Sei k der Laufindex der äußeren for-Schleife und n die Größe des zu sortierenden Arrays. Kreuze alle wahren Aussagen an.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"answer1","text":"In der k-ten Iteration ist der Abschnitt k ... n-1 des Arrays bereits sortiert."},
                        {"value":"answer2","text":"Das größte Element im Abschnitt 0 ... k befindet sich an k-ter Stelle."},
                        {"value":"answer3","text":"Der Abschnitt 0 ... k - 1 ist bereits sortiert"},
                        {"value":"answer4","text":"Der Eintrag des Arrays an der Stelle k ist kleiner gleich jedem Element in k ... n-1"},
                    ],
                },
                {
                    "type":"checkbox",
                    "name":"question4",
                    "title":"Das größte Element wandert in jeder Iteration nach rechts.",
                    "hideNumber": true,
                    "isRequired": true,
                    "choices": [
                        {"value":"item1","text":"Wahr"},
                        {"value":"item2","text":"Falsch"},
                    ],
                }],
            },
        ],
    },

};

Object.freeze(QuizJSON);

export default QuizJSON;

