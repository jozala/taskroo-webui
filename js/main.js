var app = angular.module("GTWeb", [])


app.factory("TagsService", function () {
    var tags = [
        {"id": 18, "name": "Inbox", "color": "#a3a3a3", "visibleInWorkView": false},
        {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false},
        {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false},
        {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false},
        {"id": 23, "name": "polska", "color": "#d98b0c", "visibleInWorkView": false},
        {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
        {"id": 25, "name": "atwork", "color": "#bbbaff", "visibleInWorkView": false},
        {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false},
        {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false},
        {"id": 35, "name": "call", "color": "#A94DFF", "visibleInWorkView": false},
        {"id": 36, "name": "priority", "color": "#FF80AA", "visibleInWorkView": false}
    ];
    return tags;
});

app.factory("TasksService", function () {
    var tasks = [
            {"id": 118, "title": "Podatek za wynajem - Inżynierska - 107zł - powinien pójść automatyczny przelew 17 każdego miesiąca (dostałeś maila?) ", "description": "Do 20 każdego miesiąca", "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1379376000000, "dueDate": 1379376000000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 208, "title": "Odpowiedź od National Express w sprawie reklamacji ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": 1379455200000, "closedDate": null, "createdDate": 1378249783000},
            {"id": 170, "title": "Napisz do Pauli jak się umawiamy dokładnie na ten 28.09 ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false}
            ], "startingOn": 1379196000000, "dueDate": 1379628000000, "closedDate": null, "createdDate": 1376951864000},
            {"id": 119, "title": "Zapłać ratę kredytu za mieszkanie ", "description": "Do 29 każdego miesiąca (mniej więcej)", "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1379635200000, "dueDate": 1379635200000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 129, "title": "Rachunek za prąd automatyczny z mBank 18-22 (dostałeś maila?) ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1377129600000, "dueDate": 1379894400000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 120, "title": "Zapłać czynsz za UK - £917 ", "description": "NationWide, sort code: 07-02-46, Account no: 36231672, Do 23 każdego miesiąca", "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1379894400000, "dueDate": 1379894400000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 161, "title": "Spłata kredytu stucenckiego - automat (sprawdź mail od mBanku) ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1380499200000, "dueDate": 1380499200000, "closedDate": null, "createdDate": 1376933740000},
            {"id": 132, "title": "Ostatnia automatyczna płatność podatku za mieszkanie została zaplanowana na 17.10. Odnów jeśli trzeba. ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false}
            ], "startingOn": 1381795200000, "dueDate": 1381795200000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 122, "title": "Ostatnia automatyczna płatność za prąd we Wro była na 18.10 - trzeba odnowić ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1381276800000, "dueDate": 1381881600000, "closedDate": null, "createdDate": 1376085600000},
            {"id": 160, "title": "Ostatnia płatność automatyczna za kredyt studencki zostanie dokonana 29.07.2014 - trzeba odnowić ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false},
                {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false}
            ], "startingOn": 1406505600000, "dueDate": 1408492800000, "closedDate": null, "createdDate": 1376933401000},
            {"id": 227, "title": "Wymyślić prezent urodzinowy dla Marcinka ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378926488000},
            {"id": 224, "title": "prezent urodzinowy dla Marcina ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 18, "name": "Inbox", "color": "#a3a3a3", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378858290000},
            {"id": 205, "title": "Przeczytaj Pragmatyczny Programista książkę ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378246506000},
            {"id": 203, "title": "RandomNumberGenerator ", "description": null, "finished": false, "subtasks": [
                {"id": 206, "title": "Napisz pare linijek kodu ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378247003000},
                {"id": 207, "title": "Pomyśl jak zaplanować cały projekt RandomNumberGenerator ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378247029000},
                {"id": 216, "title": "Przypomnij Marco o zatwierdzeniu urlopu na 25.09 ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false},
                    {"id": 25, "name": "atwork", "color": "#bbbaff", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378755594000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1378244611000},
            {"id": 169, "title": "Zwrot kasy za Funty od Kowalskich (£381 * 4,8577zł = 1850zł) - £20 = 1750zł ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376950708000},
            {"id": 155, "title": "Zadzwoń do Karola pogadać ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false},
                {"id": 35, "name": "call", "color": "#A94DFF", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376860721000},
            {"id": 68, "title": "Zrób plan półroczny co chciałbyś osiągnąć w programowaniu", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 70, "title": "Napisz na blog w jaki sposób zapisujesz sesję gnome-terminal ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 73, "title": "Przegląd całościowy ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 78, "title": "Przeczytać szybko Effective Java ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 89, "title": "Znajdź mecz w rugby żeby pójść ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 90, "title": "Zrób porządek w liście \"kiedyś/może\" w Evernote bo są dwie takie ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 91, "title": "Przeczytać dobrą książkę o SQLu ", "description": null, "finished": false, "subtasks": [
                {"id": 85, "title": "Przeczytaj książkę SQL Smarties ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 93, "title": "Przeczytaj o media queries ", "description": null, "finished": false, "subtasks": [
                {"id": 72, "title": "Przeczytaj artykuły o media queries zebrane w pocketcie ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 96, "title": "CatchIt - program do robienia zdjęć po wybudzeniu.włączeniu komputera ", "description": null, "finished": false, "subtasks": [
                {"id": 76, "title": "Napisz skrypt dodający CatchIt z opt do odpowiednich plików Gnome na linuxie ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
                {"id": 77, "title": "Znajdź gdzie dodać uruchamianie CatchIt żeby uruchamiało się po każdym zalogowaniu na Windowsie ", "description": "Jakoś to można dodawać do rejestru nawet spod Javy, ale może lepiej napisać ten skrypt w pliku reg?", "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 99, "title": "Stworzyć GTG w wersji na Web'a :) Houston, wylądowaliśmy ", "description": null, "finished": false, "subtasks": [
                {"id": 140, "title": "Zrob porzadek w JS GTWeb'a ", "description": null, "finished": false, "subtasks": [
                    {"id": 204, "title": "Przeczytaj jak działa AngularJS z artykułu zebranego w Pocket'cie ", "description": null, "finished": true, "subtasks": [], "tags": [
                        {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                    ], "startingOn": null, "dueDate": null, "closedDate": 1378926706000, "createdDate": 1378246437000}
                ], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376640288000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 100, "title": "Rozkmiń działanie MVC Spring Controller Testing framework ", "description": null, "finished": false, "subtasks": [
                {"id": 79, "title": "Znajdź artykuły do poczytania o Spring MVC controller testing ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376842330000, "createdDate": 1376085600000},
                {"id": 151, "title": "Przeczytaj artykuł o Spring MVC controller testing framework zebrany w Pockecie ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376842362000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 102, "title": "Heapspace.co.uk - Zrobić porządnego bloga o pure coding", "description": null, "finished": false, "subtasks": [
                {"id": 80, "title": "Przygotuj opis siebie na stronę ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
                {"id": 81, "title": "Dopracuj WP theme dla dolnej części strony głównej ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 103, "title": "Dodaj obsługę SMSów z Google i Dropbox 2-step verification i wydaj wersję czytnika 1.6 ", "description": null, "finished": false, "subtasks": [
                {"id": 75, "title": "Sprawdź czy da się coś zmienić w opcjach HandcentSMS żeby dochodziły SMS-y do czytnika ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376947997000, "createdDate": 1376085600000},
                {"id": 82, "title": "Dodaj obsługę Google 2-step verification ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376946057000, "createdDate": 1376085600000},
                {"id": 83, "title": "Zdobądź SMSa z 2-step verification Dropbox ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376933815000, "createdDate": 1376085600000},
                {"id": 88, "title": "Uogólnij parser dla BZWBK jak tylko się da ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376950639000, "createdDate": 1376085600000},
                {"id": 141, "title": "Dodaj obsluge Idea banku bo dostales SMS-y ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376947618000, "createdDate": 1376640344000},
                {"id": 142, "title": "Sprawdz czy nie dostales jeszcze jakichs SMS-ow z przykladowymi haslami do dodania ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376946343000, "createdDate": 1376640379000},
                {"id": 162, "title": "Dodaj obsługę Dropbox 2-step verification ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1376946345000, "createdDate": 1376933858000},
                {"id": 166, "title": "Napisz do jednej z osób zgłaszających problem z BZWBK24 z zapytaniem czy działa", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": 1378557100000, "createdDate": 1376947580000},
                {"id": 167, "title": "Odpowiedź od Człowieka chcącego IDEA Bank w czytniku z nazwą nadawcy SMSów ", "description": null, "finished": true, "subtasks": [], "tags": [
                    {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": 1377295200000, "closedDate": 1376981856000, "createdDate": 1376947681000},
                {"id": 213, "title": "Odpowiedź od Paweł (z maila) czy BZWBK działa poprawnie w najnowszej wersji ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": 1379462400000, "closedDate": null, "createdDate": 1378557150000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 104, "title": "Czytnik SMS 2.0 z danymi SMS z bazy i lepszymi powiadomieniami ", "description": null, "finished": false, "subtasks": [
                {"id": 84, "title": "Zmień sposób wyświetlania powiadomień SMS z wyświetlania fake activity na element na pasku notyfikacji ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
                {"id": 168, "title": "Zdecyduj się na sposób zapisu danych dla Czytnika Haseł żeby mogły być wczytywane do bazy ", "description": null, "finished": false, "subtasks": [], "tags": [
                    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false}
                ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376950286000}
            ], "tags": [
                {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 123, "title": "Kieszeń na telefon do biegania ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 124, "title": "Latawiec duży ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000},
            {"id": 125, "title": "MacBook Pro Retina ", "description": null, "finished": false, "subtasks": [], "tags": [
                {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false}
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
        ]

    return tasks;

});