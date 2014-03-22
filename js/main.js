var app = angular.module("GTWeb", ["TabList", "ui.bootstrap"]);


app.factory("TagsService", function () {
    var tags = [
        {"id": 18, "name": "Inbox", "color": "#a3a3a3", "visibleInWorkView": false, "size": 34},
        {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false, "size": 4},
        {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false, "size": 43},
        {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false, "size": 24},
        {"id": 23, "name": "polska", "color": "#d98b0c", "visibleInWorkView": false, "size": 3},
        {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false, "size": 4},
        {"id": 25, "name": "atwork", "color": "#bbbaff", "visibleInWorkView": false, "size": 17},
        {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false, "size": 63},
        {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false, "size": 8},
        {"id": 35, "name": "call", "color": "#A94DFF", "visibleInWorkView": false, "size": 4},
        {"id": 36, "name": "priority", "color": "#FF80AA", "visibleInWorkView": false, "size": 43},
        {"id": 37, "name": "10min", "color": "#FF80AA", "visibleInWorkView": false, "size": 5},
        {"id": 38, "name": "20min", "color": "#FF80AA", "visibleInWorkView": false, "size": 4},
        {"id": 18, "name": "Inbox", "color": "#a3a3a3", "visibleInWorkView": false, "size": 32},
        {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": false, "size": 44},
        {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false, "size": 12},
        {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false, "size": 23},
        {"id": 23, "name": "polska", "color": "#d98b0c", "visibleInWorkView": false, "size": 5},
        {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false, "size": 2},
        {"id": 25, "name": "atwork", "color": "#bbbaff", "visibleInWorkView": false, "size": 32},
        {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false, "size": 5},
        {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false, "size": 65},
        {"id": 35, "name": "call", "color": "#A94DFF", "visibleInWorkView": false},
        {"id": 36, "name": "priority", "color": "#FF80AA", "visibleInWorkView": false, "size": 5},
        {"id": 37, "name": "10min", "color": "#FF80AA", "visibleInWorkView": false, "size": 3},
        {"id": 38, "name": "20min", "color": "#FF80AA", "visibleInWorkView": false, "size": 45},
        {"id": 39, "name": "30min", "color": "#FF80AA", "visibleInWorkView": false, "size": 2}
    ];
    return tags;
});

app.factory("TasksService", function () {
    var tasks = [
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
                {"id": 216, "title": "Przypomnij Marco o zatwierdzeniu urlopu na 25.09 ", "description": null, "finished": true, "subtasks": [], "tags": [
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
            {"id": 70, "title": "Napisz na blog w jaki sposób zapisujesz sesję gnome-terminal ", "description": null, "finished": true, "subtasks": [], "tags": [
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
            ], "startingOn": null, "dueDate": null, "closedDate": null, "createdDate": 1376085600000}
        ];

    return tasks;

});