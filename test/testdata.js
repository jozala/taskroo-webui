var testTags = [
    {"id": 18, "name": "Inbox", "color": "#a3a3a3", "visibleInWorkView": false, "size": 34},
    {"id": 20, "name": "next", "color": "#3241d2", "visibleInWorkView": true, "size": 4},
    {"id": 21, "name": "projects", "color": "#df3a1c", "visibleInWorkView": false, "size": 43},
    {"id": 22, "name": "waiting", "color": "#fbfa64", "visibleInWorkView": false, "size": 24},
    {"id": 23, "name": "polska", "color": "#d98b0c", "visibleInWorkView": false, "size": 3},
    {"id": 24, "name": "planned", "color": "#10f028", "visibleInWorkView": false, "size": 4},
    {"id": 25, "name": "atwork", "color": "#bbbaff", "visibleInWorkView": false},
    {"id": 26, "name": "bills", "color": null, "visibleInWorkView": false, "size": 63},
    {"id": 27, "name": "zakupy", "color": "#6dffd3", "visibleInWorkView": false, "size": 8},
    {"id": 35, "name": "call", "color": "#A94DFF", "visibleInWorkView": false, "size": 4},
    {"id": 36, "name": "priority", "color": "#FF80AA", "visibleInWorkView": false, "size": 43},
    {"id": 37, "name": "10min", "color": "#FF80AA", "visibleInWorkView": false, "size": 5},
    {"id": 38, "name": "20min", "color": "#FF80AA", "visibleInWorkView": false, "size": 4}
];

var unfinishedTasks = [
    {
        "closedDate": null,
        "createdDate": 1380033679000,
        "description": null,
        "dueDate": 1395619200000,
        "finished": false,
        "id": 327,
        "startingOn": 1395619200000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Sprawd\u017a post\u0119py w realizacji planu p\u00f3\u0142rocznego "
    },
    {
        "closedDate": null,
        "createdDate": 1395105377000,
        "description": null,
        "dueDate": 1395702000000,
        "finished": false,
        "id": 1021,
        "startingOn": 1395702000000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Przegl\u0105d tygodniowy "
    },
    {
        "closedDate": null,
        "createdDate": 1394491991000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 979,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": null,
                "createdDate": 1394492013000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 980,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#fbfa64",
                        "id": 22,
                        "name": "waiting",
                        "visibleInWorkView": false
                    }
                ],
                "title": "Ania ma si\u0119\u00a0dowiedzie\u0107 co jest wartego zobaczenia \u017ceby oceni\u0107 czy potrzebujemy 1 czy 2 dni "
            }
        ],
        "tags": [
            {
                "color": "#df3a1c",
                "id": 21,
                "name": "project",
                "visibleInWorkView": false
            }
        ],
        "title": "Zaplanuj podr\u00f3\u017c i zwiedzanie Oxfordu "
    },
    {
        "closedDate": null,
        "createdDate": 1379069210000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 230,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1395343942000,
                "createdDate": 1391991027000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 853,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1393289264000,
                        "createdDate": 1392682181000,
                        "description": "http://jimliu.github.io/Angular-NestedSortable/index.html",
                        "dueDate": null,
                        "finished": false,
                        "id": 888,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            },
                            {
                                "color": "#FF80AA",
                                "id": 36,
                                "name": "priority",
                                "visibleInWorkView": false
                            }
                        ],
                        "title": "Zobacz czy nie da sie zrobic latwiej treetable jak w D&D "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    },
                    {
                        "color": "#FF80AA",
                        "id": 36,
                        "name": "priority",
                        "visibleInWorkView": false
                    }
                ],
                "title": "Przygotuj Drag&Drop to change task into subtask w AngularJS "
            }
        ],
        "tags": [
            {
                "color": "#df3a1c",
                "id": 21,
                "name": "project",
                "visibleInWorkView": false
            }
        ],
        "title": "Przepisz treetable js na AngularJS "
    }
];

var threeLevelFinishedTasks = [
    {
        "closedDate": 1381258256000,
        "createdDate": 1379935840000,
        "description": null,
        "dueDate": null,
        "finished": true,
        "id": 321,
        "startDate": null,
        "title": "Finished task 1",
        "subtasks": [
            {
                "closedDate": 1381258256000,
                "createdDate": 1379935840000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 1023,
                "startDate": null,
                "title": "Finished subtask 1.1",
                "subtasks": [
                    {
                        "closedDate": 1381258256000,
                        "createdDate": 1379935840000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 1024,
                        "startDate": null,
                        "subtasks": [],
                        "title": "Finished subtask 1.1.1",
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ]
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ]
            }
        ],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ]
    }
];


var threeLevelUnfinishedTasks = [
    {
        "closedDate": 1381258256000,
        "createdDate": 1379935840000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 321,
        "startDate": null,
        "title": "Unfinished task 1",
        "subtasks": [
            {
                "closedDate": 1381258256000,
                "createdDate": 1379935840000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 1023,
                "startDate": null,
                "title": "Unfinished subtask 1.1",
                "subtasks": [
                    {
                        "closedDate": 1381258256000,
                        "createdDate": 1379935840000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 1024,
                        "startDate": null,
                        "subtasks": [],
                        "title": "Unfinished subtask 1.1.1",
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ]
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ]
            }
        ],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ]
    }
];

var threeTopLevelTasks = [
    {
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Zarezerwuj stolik w Pillars na 20 Marca albo 26 Marca albo 17 kwietnia "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": "NationWide, sort code: 07-02-46, Account no: 1243655, Do 23 ka\u017cdego miesi\u0105ca",
        "dueDate": 1395532800000,
        "finished": false,
        "id": 2,
        "startingOn": 1395532800000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            },
            {
                "color": null,
                "id": 26,
                "name": "bills",
                "visibleInWorkView": false
            }
        ],
        "title": "Zap\u0142a\u0107 czynsz za UK - \u00a3917 "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": 1395532800000,
        "finished": false,
        "id": 3,
        "startingOn": 1395532800000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Przelej kas\u0119 na nast\u0119pny tydzie\u0144 na konto A/C "
    }
];

var tasksToFilter = [
    {
        "title": "This is task toFilter in (one)",
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "filterMe",
                "visibleInWorkView": false
            }
        ]
    },
    {
        "title": "This is task not to be returned as filtered",
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ]
    },
    {
        "title": "This is task toFilter (two)",
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "filterMe",
                "visibleInWorkView": false
            }
        ]
    },
    {
        "title": "This is some other task not toFilter in the tag filter test (three)",
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ]
    }

];