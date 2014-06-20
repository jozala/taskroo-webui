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


var testTasks = [
    {
        "closedDate": null,
        "createdDate": 1395103430000,
        "description": "0208 231 2200",
        "dueDate": 1395100800000,
        "finished": false,
        "id": 1017,
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
        "description": "NationWide, sort code: 07-02-46, Account no: 36231672, Do 23 ka\u017cdego miesi\u0105ca",
        "dueDate": 1395532800000,
        "finished": false,
        "id": 120,
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
        "id": 126,
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
    },
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
        "createdDate": 1376933740000,
        "description": null,
        "dueDate": 1395878400000,
        "finished": false,
        "id": 161,
        "startingOn": 1395878400000,
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
        "title": "Sp\u0142ata kredytu studenckiego - automat (sprawd\u017a mail od Sync) "
    },
    {
        "closedDate": null,
        "createdDate": 1395104081000,
        "description": null,
        "dueDate": 1396389600000,
        "finished": false,
        "id": 1020,
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
        "title": "Zapytaj taty czy za\u0142atwi\u0142 spraw\u0119 zwortu VAT za Mac'a "
    },
    {
        "closedDate": null,
        "createdDate": 1394280559000,
        "description": null,
        "dueDate": 1396389600000,
        "finished": false,
        "id": 951,
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
        "title": "Zapytaj Taty czy wypisa\u0142 mnie ju\u017c w Urz\u0119dzie Skarbowym z wynajmu mieszkania "
    },
    {
        "closedDate": null,
        "createdDate": 1391969153000,
        "description": null,
        "dueDate": 1396908000000,
        "finished": false,
        "id": 847,
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
        "title": "Przesy\u0142ka od Farnell z BeagleBone Black "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": 1397088000000,
        "finished": false,
        "id": 121,
        "startingOn": 1397088000000,
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
        "title": "Czynsz za mieszkanie we Wro - automat (przelew autom. mail potwierdzaj\u0105cy) "
    },
    {
        "closedDate": null,
        "createdDate": 1389745525000,
        "description": null,
        "dueDate": 1397692800000,
        "finished": false,
        "id": 737,
        "startingOn": 1397692800000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Pe\u0142ny przegl\u0105d "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": "Do 29 ka\u017cdego miesi\u0105ca (mniej wi\u0119cej)",
        "dueDate": 1397952000000,
        "finished": false,
        "id": 119,
        "startingOn": 1397952000000,
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
        "title": "Zap\u0142a\u0107 rat\u0119 kredytu za mieszkanie "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": 1398038400000,
        "finished": false,
        "id": 129,
        "startingOn": 1398038400000,
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
        "title": "Rachunek za pr\u0105d automatyczny z Sync 18-20 (dosta\u0142e\u015b maila?) "
    },
    {
        "closedDate": null,
        "createdDate": 1384907414000,
        "description": null,
        "dueDate": 1400104800000,
        "finished": false,
        "id": 538,
        "startingOn": null,
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
        "title": "Ostatnia p\u0142atno\u015b\u0107 automatyczna za pr\u0105d na In\u017cynierskiej zosta\u0142a zaplanowana na 20 Kwietnia przed\u0142u\u017c "
    },
    {
        "closedDate": null,
        "createdDate": 1376933401000,
        "description": null,
        "dueDate": 1408492800000,
        "finished": false,
        "id": 160,
        "startingOn": 1406505600000,
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
        "title": "Ostatnia p\u0142atno\u015b\u0107 automatyczna za kredyt studencki zostanie dokonana 29.07.2014 - trzeba odnowi\u0107 "
    },
    {
        "closedDate": null,
        "createdDate": 1390082231000,
        "description": null,
        "dueDate": 1420844400000,
        "finished": false,
        "id": 745,
        "startingOn": 1420844400000,
        "subtasks": [],
        "tags": [
            {
                "color": "#10f028",
                "id": 24,
                "name": "planned",
                "visibleInWorkView": false
            }
        ],
        "title": "Zapytaj Taty co z wys\u0142aniem rozliczenia rocznego za podatek za wynajem mieszkania "
    },
    {
        "closedDate": null,
        "createdDate": 1395103550000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 1018,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ],
        "title": "Napisz maila do Marcela podziekuj za tom gre albo skontaktuj sie z nim na Skype "
    },
    {
        "closedDate": null,
        "createdDate": 1395102976000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 1015,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1395185536000,
                "createdDate": 1395103002000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 1016,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Obejrzyj wszystkie filmiki z 1 tygodnia kursu mongoDB "
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
        "title": "Kurs z MongoDB "
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
        "createdDate": 1394491923000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 977,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": null,
                "createdDate": 1394491707000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 976,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zobacz co jest wartego do zobaczenia w Dublinie, \u017ceby wiedzie\u0107 na jak d\u0142ugo trzeba tam jecha\u0107 "
            },
            {
                "closedDate": null,
                "createdDate": 1394491973000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 978,
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
                "title": "Ania ma sprawdzi\u0107 loty i ceny hoteli oraz pomy\u015ble\u0107 kiedy mogliby\u015bmy lecie\u0107 "
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
        "title": "Zaplanuj podr\u00f3\u017c do Dublina/Irlandii "
    },
    {
        "closedDate": null,
        "createdDate": 1393267431000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 909,
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
        "title": "Przeczytaj ksi\u0105\u017ck\u0119 przygotowuj\u0105c\u0105 do certyfikatu z Web Service\u00f3w JEE5 "
    },
    {
        "closedDate": null,
        "createdDate": 1393070665000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 899,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ],
        "title": "Obejrzyj filmik o WebSocketach z vJUG zapisany na pocket'cie  26:29"
    },
    {
        "closedDate": null,
        "createdDate": 1392769530000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 891,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1392769569000,
                "createdDate": 1392759655000,
                "description": "http://london.usembassy.gov/niv/fee.html",
                "dueDate": null,
                "finished": true,
                "id": 889,
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
                "title": "Znale\u017a\u0107 wnioski o wiz\u0119 do Stan\u00f3w do wype\u0142nienia "
            },
            {
                "closedDate": 1393269225000,
                "createdDate": 1392769611000,
                "description": null,
                "dueDate": 1393286400000,
                "finished": true,
                "id": 892,
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
                "title": "Ania ma znalezc miejsce na Ealing zeby zrobic zdjecie do wizy do USA "
            },
            {
                "closedDate": 1393973881000,
                "createdDate": 1393266758000,
                "description": null,
                "dueDate": 1393804800000,
                "finished": true,
                "id": 908,
                "startingOn": 1393632000000,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#10f028",
                        "id": 24,
                        "name": "planned",
                        "visibleInWorkView": false
                    },
                    {
                        "color": "#d98b0c",
                        "id": 23,
                        "name": "polska",
                        "visibleInWorkView": false
                    }
                ],
                "title": "Zr\u00f3b zdj\u0119cia do Wizy USA w polsce "
            },
            {
                "closedDate": 1394496867000,
                "createdDate": 1394230563000,
                "description": null,
                "dueDate": 1394496000000,
                "finished": true,
                "id": 947,
                "startingOn": 1394496000000,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#fbfa64",
                        "id": 22,
                        "name": "waiting",
                        "visibleInWorkView": false
                    }
                ],
                "title": "Ania ma wype\u0142ni\u0107 podanie o wiz\u0119 jeszcze raz "
            },
            {
                "closedDate": null,
                "createdDate": 1394496911000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 982,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zarejestruj/zaloguj sie na https://ais.usvisa-info.com/ i zawnioskuj o spotkanie/zap\u0142a\u0107 "
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
        "title": "Za\u0142atw wize do USA "
    },
    {
        "closedDate": null,
        "createdDate": 1391624272000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 841,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ],
        "title": "obejrzyj filmiki ze squasha "
    },
    {
        "closedDate": null,
        "createdDate": 1389306304000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 717,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ],
        "title": "Zaktualizowa\u0107 vTigerCRM dla Bogdana "
    },
    {
        "closedDate": null,
        "createdDate": 1387187902000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 643,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1389474817000,
                "createdDate": 1387187924000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 644,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1389474800000,
                        "createdDate": 1387330978000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 659,
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
                        "title": "Pobierz wszystkie materialy do MiedzySlowami z FTP podanego w mailu "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zobacz czy masz wszystkie materialy zeby zaczac robic demo strony miedzy slowami "
            },
            {
                "closedDate": 1390775718000,
                "createdDate": 1389474838000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 724,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Wklej zdj\u0119cia do Paralaxa na strone Miedzy Slowami "
            },
            {
                "closedDate": 1390508216000,
                "createdDate": 1389562358000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 725,
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
                "title": "Odpowied\u017a od Marty Deutschman co z uszkodzonym zdj\u0119ciem na serwerze "
            },
            {
                "closedDate": 1390934055000,
                "createdDate": 1390775774000,
                "description": null,
                "dueDate": 1391209200000,
                "finished": true,
                "id": 795,
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
                "title": "Odpowied\u017a od Marty co s\u0105dzi o Parallaxie "
            },
            {
                "closedDate": null,
                "createdDate": 1390934106000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 802,
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
                "title": "Odpowied\u017a z sugestiami do miedzyslowami od Marty Deutschman "
            },
            {
                "closedDate": 1394237008000,
                "createdDate": 1394228328000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 944,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Kup layout Parallax do MiedzySlowami [kupie jak beda informacje od Marty co dalej]"
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
        "title": "Strona miedzy slowami dla Marty Deutschman "
    },
    {
        "closedDate": null,
        "createdDate": 1383176727000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 457,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1389452128000,
                "createdDate": 1383176775000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 458,
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
                "title": "Przygotuj \u015brodowisko do test\u00f3w Spock dla GTWeb "
            },
            {
                "closedDate": null,
                "createdDate": 1389743254000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 733,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zmie\u0144 tags z Controller'a na WebService w Jersey "
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
        "title": "Cucumber albo inny framework (Spock) do test\u00f3w integracyjnych/akceptacyjnych w  GTWeb "
    },
    {
        "closedDate": null,
        "createdDate": 1380981109000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 360,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": null,
                "createdDate": 1380673519000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 345,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1381180894000,
                        "createdDate": 1381178854000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 365,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#91EDFF",
                                "id": 45,
                                "name": "10min",
                                "visibleInWorkView": false
                            },
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Znajd\u017a narz\u0119dzie do robienia map my\u015bli na linuxa i Maca r\u00f3wnocze\u015bnie "
                    },
                    {
                        "closedDate": null,
                        "createdDate": 1391465518000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 828,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Spojrz do ksiazki zeby przypomniec sobie na czym polega perspektywa 20000 "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "zr\u00f3b map\u0119 my\u015bli dla perspektywy 20000 st\u00f3p "
            }
        ],
        "tags": [
            {
                "color": "#3241d2",
                "id": 20,
                "name": "next", "visibleInWorkView": true
            }
        ],
        "title": "Zr\u00f3b map\u0119 my\u015bli albo list\u0119 dla 30000 st\u00f3p i wi\u0119cej korzystajac z ksi\u0105\u017cki  (moze warto spojrzec w liste co lubie)"
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
                "finished": true,
                "id": 853,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1393289264000,
                        "createdDate": 1392682181000,
                        "description": "http://jimliu.github.io/Angular-NestedSortable/index.html",
                        "dueDate": null,
                        "finished": true,
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
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 102,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": 1394505473000,
                "createdDate": 1376085600000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 70,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Napisz na blog w jaki spos\u00f3b zapisujesz sesj\u0119 gnome-terminal"
            },
            {
                "closedDate": 1386019072000,
                "createdDate": 1376085600000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 80,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Przygotuj opis siebie na stron\u0119. Moze uzyj tego co przygotowales do IEEE ostatnio."
            },
            {
                "closedDate": 1386724265000,
                "createdDate": 1376085600000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 81,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Dopracuj WP theme dla dolnej cz\u0119\u015bci strony g\u0142\u00f3wnej "
            },
            {
                "closedDate": 1387755294000,
                "createdDate": 1385914806000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 576,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zrob social-buttons zeby byly linkami poprawnymi "
            },
            {
                "closedDate": 1386724269000,
                "createdDate": 1385916898000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 578,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Popraw wyswietlanie headera na podstronach i w pelnych postach (pole wyszukiwania)"
            },
            {
                "closedDate": 1387710144000,
                "createdDate": 1386724347000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 619,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Popraw wy\u015bwietlanie wynikow wyszukiwania (bez wynikow i z) z sidebarem "
            },
            {
                "closedDate": 1387755297000,
                "createdDate": 1387187762000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 642,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zrob zeby po najechaniu na social buttons zmienialy kolor, najlepiej stopniowo "
            },
            {
                "closedDate": 1393205669000,
                "createdDate": 1387755339000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 663,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Opisa\u0107 projekt SMS Code Reader na bloga "
            },
            {
                "closedDate": 1393208859000,
                "createdDate": 1387755359000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 664,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Opisa\u0107 projekt CatchIt na bloga "
            },
            {
                "closedDate": 1395007137000,
                "createdDate": 1387755376000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 665,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Opisa\u0107 projekt GTWeb na bloga "
            },
            {
                "closedDate": 1394230037000,
                "createdDate": 1392084280000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 854,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Wypisz wa\u017cne punkty do Code Conventions w Groovy do wpisu na bloga (z Evernote)"
            },
            {
                "closedDate": 1394235854000,
                "createdDate": 1394230062000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 946,
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
                "title": "Wrzu\u0107 na blog wpis o Java Code Conventions "
            },
            {
                "closedDate": 1394748696000,
                "createdDate": 1394505614000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 985,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Udost\u0119pnij wpis o gnome-terminal restoring "
            },
            {
                "closedDate": 1395188308000,
                "createdDate": 1395011593000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 1012,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Wrzu\u0107 now\u0105 szat\u0119 graficzn\u0105 z localhost na aetas.pl "
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
        "title": "Heapspace.co.uk - Zrobi\u0107 porz\u0105dnego bloga o pure coding"
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 104,
        "startingOn": null,
        "subtasks": [
            {
                "closedDate": null,
                "createdDate": 1376085600000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 84,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1381685292000,
                        "createdDate": 1379936796000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 322,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Przeczytaj w dokumentacji Androida w jakispos\u00f3b robi si\u0119 aktywne notyfikacje z mo\u017cliwo\u015bci\u0105 akcji "
                    },
                    {
                        "closedDate": null,
                        "createdDate": 1381685332000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 397,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Zaimplementuj PoC wyswietlania powiadomien w czytniku hase\u0142 zgodnie z przygotowanym projektem graficznym "
                    },
                    {
                        "closedDate": 1394408301000,
                        "createdDate": 1394386282000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 967,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Zapytaj Piotrka czy aplikacja ING nie wycyna mu paska notyfikacji w Androidzie "
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
                "title": "Zmie\u0144 spos\u00f3b wy\u015bwietlania powiadomie\u0144 SMS z wy\u015bwietlania fake activity na element na pasku notyfikacji "
            },
            {
                "closedDate": 1381258263000,
                "createdDate": 1376950286000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 168,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1381258256000,
                        "createdDate": 1379935840000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 321,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Wypisz mo\u017cliwe sposoby zapisu danych dla Czytnika hase\u0142 "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zdecyduj si\u0119 na spos\u00f3b zapisu danych dla Czytnika Hase\u0142 \u017ceby mog\u0142y by\u0107 wczytywane do bazy "
            },
            {
                "closedDate": 1381275921000,
                "createdDate": 1380749008000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 348,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Zmie\u0144 spos\u00f3b wy\u015bwietlania kodu ze spacjami przy wy\u0142 opcji \"Automatyczne kopiowanie\" i w innych miejscach te\u017c"
            },
            {
                "closedDate": 1394063870000,
                "createdDate": 1381258368000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 370,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1394063867000,
                        "createdDate": 1381258442000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 371,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Stw\u00f3rz porz\u0105dne klasy do \u0142adowania danych do bazy bez powt\u00f3rze\u0144, ale ci\u0105gle z danymi w pliku Java [inaczej ale done]"
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
                "title": "Zmie\u0144 dane w taki spos\u00f3b \u017ceby by\u0142a mo\u017cliwo\u015b\u0107 ich prostego testowania "
            },
            {
                "closedDate": 1381273818000,
                "createdDate": 1381258549000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 373,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1381273680000,
                        "createdDate": 1381258514000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 372,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Sprawd\u017a czy ca\u0142y kod ma wszystko pokryte testami jednostkowymi "
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
                "title": "Pokryj wszystko testami jednostkowymi w czytniku hase\u0142 [Odrzucone]"
            },
            {
                "closedDate": 1391474566000,
                "createdDate": 1381259252000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 374,
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
                "title": "Dodaj obs\u0142ug\u0119 Getin Banku do Czytnika Hase\u0142 SMS"
            },
            {
                "closedDate": 1391473995000,
                "createdDate": 1381275993000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 375,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Przetestuj wy\u015bwietlanie kod\u00f3w (spacje) jak nie ma automatycznego kopiowania kod\u00f3w "
            },
            {
                "closedDate": 1394410161000,
                "createdDate": 1392645926000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 880,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Dodaj obsluge PLAY24 z maila ktory dostales "
            },
            {
                "closedDate": 1394410163000,
                "createdDate": 1394063911000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 935,
                "startingOn": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Przetestuj czy czytnik dziala po wprowadzeniu zmian w \u0142adowaniu danych do bazy "
            },
            {
                "closedDate": 1394490285000,
                "createdDate": 1394230020000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 945,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": 1394490282000,
                        "createdDate": 1394386192000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 966,
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
                        "title": "Odpowied\u017a od osoby zg\u0142aszaj\u0105cej problem czy nadawca to \"BZWBK24\" "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Sprawd\u017a dlaczego mo\u017ce nie dzia\u0142a\u0107 BZWBK24 z podanego maila "
            },
            {
                "closedDate": null,
                "createdDate": 1394490337000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 973,
                "startingOn": null,
                "subtasks": [
                    {
                        "closedDate": null,
                        "createdDate": 1394490311000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 972,
                        "startingOn": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Zmie\u0144 logik\u0119 programu tak \u017ceby mo\u017cna by\u0142o dodawa\u0107 wi\u0119cej ni\u017c jednego nadawc\u0119 SMS'a "
                    }
                ],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Dodaj dodatkowego nadawc\u0119 SMS\u00f3w BZWBK24 z maila "
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
        "title": "Czytnik SMS 2.0 z danymi SMS z bazy i lepszymi powiadomieniami "
    },
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": "http://ozonekiteexperts.com/product/ozone-octane/",
        "dueDate": null,
        "finished": false,
        "id": 124,
        "startingOn": null,
        "subtasks": [],
        "tags": [
            {
                "color": "#6dffd3",
                "id": 27,
                "name": "zakupy",
                "visibleInWorkView": false
            }
        ],
        "title": "Latawiec du\u017cy "
    }
];

var testFinishedTasks = [
    // 3 finished + 0 unfinished
    {
        "closedDate": null,
        "createdDate": 1383176727000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 457,
        "startDate": null,
        "title": "Finished task 1 with two subtasks (both finished)",
        "subtasks": [
            {
                "closedDate": 1389452128000,
                "createdDate": 1383176775000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 458,
                "startDate": null,
                "subtasks": [],
                "title": "Finished subtask 1.1 (level 1)",
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
                ]
            },
            {
                "closedDate": null,
                "createdDate": 1389743254000,
                "description": null,
                "dueDate": null,
                "finished": true,
                "id": 733,
                "startDate": null,
                "subtasks": [],
                "tags": [
                    {
                        "color": "#3241d2",
                        "id": 20,
                        "name": "next", "visibleInWorkView": true
                    }
                ],
                "title": "Finished subtask 1.2 (level 1)"
            }
        ],
        "tags": [
            {
                "color": "#df3a1c",
                "id": 21,
                "name": "project",
                "visibleInWorkView": false
            }
        ]
    },
    // 0 finished + 1 unfinished
    {
        "closedDate": null,
        "createdDate": 1376933740000,
        "description": null,
        "dueDate": 1395878400000,
        "finished": false,
        "id": 161,
        "startDate": 1395878400000,
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
        "title": "Unfinished - task 2"
    },
    //  4 finished + 5 unfinished
    {
        "closedDate": null,
        "createdDate": 1376085600000,
        "description": null,
        "dueDate": null,
        "finished": false,
        "id": 104,
        "startDate": null,
        "title": "Unfinished task 3 with many subtasks (some finished)",
        "subtasks": [
            {
                "closedDate": null,
                "createdDate": 1376085600000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 84,
                "startDate": null,
                "title": "Unfinished - subtask 3.1",
                "subtasks": [
                    {
                        "closedDate": 1381685292000,
                        "createdDate": 1379936796000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 322,
                        "startDate": null,
                        "title": "Finished - subtask 3.1.1",
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ]
                    },
                    {
                        "closedDate": null,
                        "createdDate": 1381685332000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 397,
                        "startDate": null,
                        "title": "Unfinished - subtask 3.1.2",
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ]
                    },
                    {
                        "closedDate": 1394408301000,
                        "createdDate": 1394386282000,
                        "description": null,
                        "dueDate": null,
                        "finished": true,
                        "id": 967,
                        "startDate": null,
                        "subtasks": [],
                        "tags": [
                            {
                                "color": "#3241d2",
                                "id": 20,
                                "name": "next", "visibleInWorkView": true
                            }
                        ],
                        "title": "Finished - subtask 3.1.3"
                    }
                ],
                "tags": [
                    {
                        "color": "#df3a1c",
                        "id": 21,
                        "name": "project",
                        "visibleInWorkView": false
                    }
                ]
            },
            {
                "closedDate": 1381258263000,
                "createdDate": 1376950286000,
                "description": null,
                "dueDate": null,
                "finished": false,
                "id": 168,
                "startDate": null,
                "title": "Unfinished task 3.2 with lower level finished task",
                "subtasks": [
                    {
                        "closedDate": 1381258256000,
                        "createdDate": 1379935840000,
                        "description": null,
                        "dueDate": null,
                        "finished": false,
                        "id": 321,
                        "startDate": null,
                        "title": "Unfinished subtask 3.2.1",
                        "subtasks": [
                            {
                                "closedDate": 1381258256000,
                                "createdDate": 1379935840000,
                                "description": null,
                                "dueDate": null,
                                "finished": true,
                                "id": 1023,
                                "startDate": null,
                                "title": "Finished subtask 3.2.1.1",
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
                                        "title": "Finished subtask 3.2.1.1.1",
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
                "color": "#df3a1c",
                "id": 21,
                "name": "project",
                "visibleInWorkView": false
            }
        ]
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