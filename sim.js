function simulateur() {
    //constante
    const unit = {
        "PT": 0,
        "GT": 1,
        "CL": 2,
        "CLO": 3,
        "CR": 4,
        "VB": 5,
        "VC": 6,
        "RC": 7,
        "SE": 8,
        "SS": 9,
        "BB": 10,
        "DEST": 11,
        "TR": 12,
        "EDLM": 13,
        "LM": 14,
        "ALL": 15,
        "ALO": 16,
        "AI": 17,
        "CG": 18,
        "LP": 19,
        "PB": 20,
        "GB": 21,
        "MI": 22,
        "MIP": 23
    };
    this.getUnit = function () {
        return unit;
    }

    const unitFeature = {"Degat": 0, "Bouclier": 1, "Coque": 2, "Soute": 3};
    const unitsFeature =
        [
            /*               PT */[5, 10, 4000, 5000],
            /*               GT */[5, 25, 12000, 25000],
            /*               Cl */[50, 10, 4000, 50],
            /*               CL */[150, 25, 10000, 100],
            /*               CR */[400, 50, 27000, 800],
            /*               VB */[1000, 200, 60000, 1500],
            /*               VC */[50, 100, 30000, 7500],
            /*               RC */[1, 10, 16000, 20000],
            /*               SE */[0, 0, 1000, 0],
            /*               SS */[1, 1, 2000, 0],
            /*               BB */[1000, 500, 75000, 500],
            /*               DS */[2000, 500, 110000, 2000],
            /*               BC */[700, 400, 70000, 750],
            /*               EM */[200000, 50000, 9000000, 1000000],
            /*               LM */[80, 20, 2000, 0],
            /*               Ll */[100, 25, 2000, 0],
            /*               LL */[250, 100, 8000, 0],
            /*               AI */[150, 500, 8000, 0],
            /*               CG */[1100, 200, 35000, 0],
            /*               LP */[3000, 300, 100000, 0],
            /*               PB */[0, 2000, 20000, 0],
            /*               GB */[0, 10000, 100000, 0]

        ];
    const RapidFire = [
        /*               PT */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               GT */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               Cl */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               CL */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               CR */[-1, -1, 83.333, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1, -1],
        /*               VB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               VC */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               RC */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               SE */[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               SS */[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               BB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, 95, 95, 90, 90, -1, -1, -1, -1],
        /*               DS */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, 50, -1, -1, 90, -1, -1, -1, -1, -1, -1],
        /*               BC */[66.667, 66.667, -1, 75, 75, 85.7, -1, -1, 80, 80, -1, -1, -1, -1, -1, 90, -1, -1, -1, -1, -1, -1],
        /*               EM */[99.6, 99.6, 99.5, 99, 96.97, 99.667, 99.6, 99.6, 99.6, 99.6, 96, 80, 93.333, 0, 99.5, 99.5, 99, 99, 98, -1, -1, -1],
        /*               LM */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               Ll */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               LL */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               AI */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               CG */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               LP */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               PB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               GB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    ];


    // declaration
    var FA = []; // flotte attaquante
    var FD = []; //flotte defense

    var FATab=[];
    var FDTab=[];



    //ajout flotte attaquante
    this.addFA = function (tabUnit) {
        if (this.getEmptyFA().length != tabUnit.length) {
            throw "Flotte manquante";
        }

        FA.push(tabUnit);
    };
    //retourn les listes d attauqant
    this.getFA = function () {
        return FA;
    };
    //recupere une liste vide de flotte d'ataque'
    this.getEmptyFA = function () {
        //var keys = Object.keys(unit)
        let retour = [];
        for (var i = unit.PT; i < unit.EDLM; i++) {
            retour[i] = 0;
        }
        return retour
    };
    //ajout defense
    this.addFD = function (tabUnit) {
        if (this.getEmptyFD().length != tabUnit.length) {
            throw "Flotte manquante";
        }
        FD.push(tabUnit);
    };
    //retourn les listes des defenseurs
    this.getFD = function () {
        return FD;
    };
    //recupere une liste vide de defense
    this.getEmptyFD = function () {
        let retour = [];
        for (var i = unit.PT; i < unit.MIP + 1; i++) {
            retour[i] = 0;
        }
        return retour
    };

    function getNameUnitBYid(id)
    {
        var keys = Object.keys(unit);
        return keys[id];
    }


    ///generer la flotte réél
    function generateFATAb()
    {
        var FlotteID = 0; //identifiant flotte
        // on va parcourir la flotte réél
        for(var idFlotte= 0; idFlotte < FA.length; idFlotte++)
        { // pour chaque flotte on integre les vasseaux
            for (var i = unit.PT; i < unit.EDLM; i++) {
                if (FA[idFlotte][i] != 0)
                {
                    //debug
                    //console.log("function generateFATAb()  flotte Attaque " + idFlotte + " vaisseau " + i + " nb " + FA[idFlotte][i]);

                   // FAFeaturePondere[idFlotte][i]=[[unitFeature.Degat], unitsFeature[i][unitFeature.Bouclier],unitsFeature[i][unitFeature.Coque] ]


                    var count=0;
                    for ( count = 0; count < FA[idFlotte][i]; count++) {
                       FATab.push([idFlotte, i , unitsFeature[i][unitFeature.Degat], unitsFeature[i][unitFeature.Bouclier],unitsFeature[i][unitFeature.Coque],unitsFeature[i][unitFeature.Coque] ]) // todo virer les enums
                     }
                    //console.log("ajout vaisseaux " + count + "  flotte Attaque " + FA[idFlotte][i]);

                }
            }
        }
    }


///generer la flotte réél
    function generateFDTAb()
    {
        var FlotteID = 0; //identifiant flotte
        // on va parcourir la flotte réél
        for(var idFlotte= 0; idFlotte < FD.length; idFlotte++)
        { // pour chaque flotte on integre les vasseaux
            for (var i = unit.PT; i < unit.MIP + 1; i++) {
                if (FD[idFlotte][i] != 0) {
                    //debug

                    //console.log("function generateFDTAb()  flotte Defense " + idFlotte + " vaisseau " + i + " nb " + FA[idFlotte][i]);
                    var count = 0;
                    for (count = 0; count < FD[idFlotte][i]; count++) {
                        FDTab.push([idFlotte, i, unitsFeature[i][unitFeature.Degat], unitsFeature[i][unitFeature.Bouclier], unitsFeature[i][unitFeature.Coque], unitsFeature[i][unitFeature.Coque]]) // todo virer les enums
                        //            0       1                     2                                3                                  4                                  5
                    }
                    //console.log("ajout vaisseaux " + count + "  flotte Attaque " + FD[idFlotte][i]);
                }
            }
        }
    }

    function pullOutDestroy()
    {
        // flotte attaquante
        for (var i = 0; i < FATab.length ; i++) {
            if (FATab[i][4] == -1)
            {
                // sniff
                ////console.log("    avant FATab pullOutDestroy " + FATab.length);
                FATab.splice(i,1);
                ////console.log("    apres FATab pullOutDestroy " + FATab.length);
            }
        }
        for (var i = 0; i < FDTab.length ; i++) {
            if (FDTab[i][4] == -1)
            {
                // sniff
                ////console.log("    avant FDTab pullOutDestroy " + FDTab.length);
                FDTab.splice(i,1);
                ////console.log("    apres FDTab pullOutDestroy " + FDTab.length);

            }
        }




    }


    this.simulate = function () {
        generateFATAb();
        generateFDTAb();
        //console.log("RF : " + RapidFire);
        console.log(FATab.length);
        console.log(FDTab.length);



        var NombreDeTours;
        for (NombreDeTours = 1; NombreDeTours <= 6; ++NombreDeTours) {
            //console.log(" Tour " + NombreDeTours);
            if (FATab.length == 0) // defenseur gaganant
            {
                //console.log("    fin du combat tour " + NombreDeTours);
                break ;
            }
            if (FDTab.length == 0) // Attaquant gaganant
            {
                //console.log("    fin du combat tour " + NombreDeTours);

                break ;
            }
            //console.log("    Flotte attaque  " + FATab.length);
            //console.log("    Flotte defense  " + FDTab.length );



            //console.log("Attaquant attaque");
            var isRapidfire = true;
            for (var i = 0; i < FATab.length ; ++i) {
                do { //permet rapidfire
                    ////console.log("vaisseau " + i + " " + getNameUnitBYid(FATab[i][1]));
                    //recupéarion d'une cible
                    var  idUniteDefense = Math.floor(Math.random()*(FDTab.length - 1)) ;

                    //console.log(getNameUnitBYid(FATab[i][1]) + " VS " + getNameUnitBYid(FDTab[idUniteDefense][1]));

                    var degatAvenir = FATab[i][2];

                    if ( degatAvenir < FDTab[idUniteDefense][2] / 100 )
                    {
                        //console.log("    L'attaque n'est pas assez puissante pour avoir un effet." );
                        degatAvenir = 0 ;
                    }
                    else
                    {
                        if ( degatAvenir < FDTab[idUniteDefense][3] )
                        {
                            //console.log(" Le bouclier de l'unité en défense a tout absorbé." );
                            FDTab[idUniteDefense][3] -= degatAvenir ;
                            degatAvenir = 0 ;
                        }
                        else
                        {
                            //console.log("  Le bouclier de l'unité en défense a absorbé " + FDTab[idUniteDefense][3] + " points." );
                            degatAvenir -= FDTab[idUniteDefense][3] ;
                            FDTab[idUniteDefense][3] = 0 ;
                        }
                    }
                    //  dégats dans la coque
                    if ( degatAvenir > 0 )
                    {
                        //console.log("L'unité en défense encaisse " + degatAvenir + " points." );
                        if ( degatAvenir < FDTab[idUniteDefense][4] )
                        {
                            FDTab[idUniteDefense][4]-= degatAvenir ;
                        }
                        else
                        {
                            //console.log(" L'unité en défense a été détruite (reste 0 points de structure)." );
                             FDTab[idUniteDefense][4] = -1 ;
                                                   }
                    }
                    // Calcul de la probabilité de destruction
                    if (  FDTab[idUniteDefense][4] * 10 < FDTab[idUniteDefense][5] * 7 )
                    {
                        //if ( (uint)r.Next((int)unitesDefenseur[idUniteDefense].coqueInitiale) > unitesDefenseur[idUniteDefense].coque )
                        if ( Math.floor(Math.random() * FDTab[idUniteDefense][5]) > FDTab[idUniteDefense][4] )
                        {
                            //console.log(" L'unité en défense a été détruite (reste " +  FDTab[idUniteDefense][4] + " points de structure)" );
                              //unitesDefenseur[idUniteDefense].detruit = true ;
                            FDTab[idUniteDefense][4] = -1 ;
                        }
                    else
                        {
                            //console.log(" L'unité en défense a été resisté (reste " +  FDTab[idUniteDefense][4] + " points de structure)" );

                         }
                    }
                    else
                    {
                        //console.log(" L'unité en défense a été resisté(2) (reste " +  FDTab[idUniteDefense][4] + " points de structure)" );
                    }



                    // rapidfire

                //    //console.log("RF : " + RapidFire[ FATab[idUniteDefense][1]][FDTab[idUniteDefense][1]]);
                    var rnd = Math.random()*100;
                    //console.log("rnd : " + rnd);

                  if ( rnd > RapidFire[ FATab[i][1]][FDTab[idUniteDefense][1]])
                     {
                    //console.log("Pas de rapid fire)" );
                     isRapidfire= false;

                    }
                    else
                  {
                      isRapidfire= true;
                      //console.log("Rapid fire)" );
                  }


                }
                while (isRapidfire);

            }//fin tour attaquant


            //console.log("Le defenseur attaque");

            isRapidfire = true;
            for (var i = 0; i < FDTab.length ; ++i) {
                do { //permet rapidfire
                    ////console.log("vaisseau " + i + " " + getNameUnitBYid(FDTab[i][1]));
                    //recupéarion d'une cible
                    var  idUniteDefense = Math.floor(Math.random()*(FATab.length-1)) ;
                    //console.log(getNameUnitBYid(FDTab[i][1]) + " VS " + getNameUnitBYid(FATab[idUniteDefense][1]));

                    var degatAvenir = FDTab[i][2];

                    if ( degatAvenir < FATab[idUniteDefense][2] / 100 )
                    {
                        //console.log("    L'attaque n'est pas assez puissante pour avoir un effet." );
                        degatAvenir = 0 ;
                    }
                    else
                    {
                        if ( degatAvenir < FATab[idUniteDefense][3] )
                        {
                            //console.log(" Le bouclier de l'unité en défense a tout absorbé." );
                            FATab[idUniteDefense][3] -= degatAvenir ;
                            degatAvenir = 0 ;
                        }
                        else
                        {
                            //console.log("  Le bouclier de l'unité en défense a absorbé " + FATab[idUniteDefense][3] + " points." );
                            degatAvenir -= FATab[idUniteDefense][3] ;
                            FATab[idUniteDefense][3] = 0 ;
                        }
                    }
                    //  dégats dans la coque
                    if ( degatAvenir > 0 )
                    {
                        //console.log("L'unité en défense encaisse " + degatAvenir + " points." );
                        if ( degatAvenir < FATab[idUniteDefense][4] )
                        {
                            FATab[idUniteDefense][4]-= degatAvenir ;
                        }
                        else
                        {
                            //console.log(" L'unité en défense a été détruite (reste 0 points de structure)." );
                            FATab[idUniteDefense][4] = -1 ;
                        }
                    }
                    // Calcul de la probabilité de destruction
                    if (  FATab[idUniteDefense][4] * 10 < FATab[idUniteDefense][5] * 7 )
                    {
                        if ( Math.floor(Math.random() * FATab[idUniteDefense][5]) > FATab[idUniteDefense][4] )
                        {
                            //console.log(" L'unité en défense a été détruite (reste " +  FATab[idUniteDefense][4] + " points de structure)" );
                            FATab[idUniteDefense][4] = -1 ;
                        }
                        else
                        {
                            //console.log(" L'unité en défense a été resisté (reste " +  FATab[idUniteDefense][4] + " points de structure)" );

                        }
                    }
                    else
                    {
                        //console.log(" L'unité en défense a été resisté(2) (reste " +  FATab[idUniteDefense][4] + " points de structure)" );
                    }



                    // rapidfire

                    //console.log("idUniteDefense : " + idUniteDefense);
                    //console.log("FATab[idUniteDefense][1] : " + FATab[idUniteDefense][1]);

                    var rnd = Math.random()*100;
                    //console.log("rnd : " + rnd);

                    if ( rnd > RapidFire[FDTab[i][1]][FATab[idUniteDefense][1]])
                    {
                        //console.log("Pas de rapid fire)" );
                        isRapidfire= false;

                    }
                    else
                    {
                        isRapidfire= true;
                        //console.log("Rapid fire)" );
                    }


                }
                while (isRapidfire);

            }//fin tour defense

            //suppression vaisseau detruit
            pullOutDestroy();
        }//fin nb de tour


    // and the winner is :
        if (FATab.length == 0)
        {
            console.log(" Defenseur gagne" );
        }
        else if (FDTab.length == 0)
        {
            console.log(" Attaquant gagne" );
        }
        else
        {
            console.log(FATab.length);
            console.log(FATab);
            console.log(FDTab.length);
            console.log(" pas de gagnant ");
        }

        // 1 todo reconstituer flotte apres
        //   todo comparatif avant apres ....
        // 2 todo retourner resultat
        //  todo refactoring (simplification)
        // 3 todo test unitaire ....retour actuellement improbable :s



    };




};



