function simulateur() {

    //-------------------------------------------------
    //--------Declaration -----------------------------
    //-------------------------------------------------
    var FA = []; // flotte attaquante
    var FD = []; //flotte defense

    var FATab = []; // flotte réélle Attaquante
    var FDTab = []; // flotte réélle Defense

    var ResultFA = []; // flotte Attaquante restante
    var ResultFD = []; // flotte Attaquante restante

    //-------------------------------------------------
    //-------------------------------------------------


    //-------------------------------------------------
    //--------ajout Constante -----------------
    //-------------------------------------------------
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
    this.getunitFeature = function () {
        return unitFeature;
    };

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
    this.getunitsFeature = function () {
        return unitsFeature;
    };
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

    this.getRapidFire = function () {
        return RapidFire;
    };

    //-------------------------------------------------
    //-------------------------------------------------


    //-------------------------------------------------
    //--------ajout flottes attaquante-----------------
    //-------------------------------------------------
    //ajout flotte attaque
    this.addFA = function (tabUnit) {

        console.log("normalement " + this.getEmptyFA().length);
        console.log("recu " + tabUnit.length);

        if (this.getEmptyFA().length != tabUnit.length) {
            throw "Flotte manquante";
        }

        FA = tabUnit;
    };
    //ajout flotte defense
    this.addFD = function (tabUnit) {
        if (this.getEmptyFD().length != tabUnit.length) {
            throw "Flotte manquante";
        }
        FD = tabUnit;
    };

    //recupere une liste vide de flotte d'ataque'
    this.getEmptyFA = function () {
        //var keys = Object.keys(unit)
        let retour = [];
        var unit = this.getUnit();
        for (var i = unit.PT; i < unit.EDLM + 1; i++) {
            retour[i] = 0;
        }
        return retour;
    };

    //recupere une liste vide de defense
    this.getEmptyFD = function () {
        let retour = [];
        var unit = this.getUnit();
        for (var i = unit.PT; i < unit.MIP + 1; i++) {
            retour[i] = 0;
        }
        return retour;
    };
    //retourne les listes d attauqant
    this.getFA = function () {
        return FA;
    };
    this.getFD = function () {
        return FD;
    };
    //retourne les listes d'attaquant apres combat
    this.ResultFA = function () {
        return ResultFA;
    };
    this.ResultFD = function () {
        return ResultFD;
    };
    //-------------------------------------------------
    //-------------------------------------------------

    //-------------------------------------------------
    //----------------------- util --------------------
    //-------------------------------------------------

    function getNameUnitBYid(id) {
        var keys = Object.keys(unit);
        return keys[id];
    }

    //-------------------------------------------------
    //-------------------------------------------------


    //-------------------------------------------------
    //--------Creation tableaux de flotte--------------
    //-------------------------------------------------
    ///generer la flotte réél attaque
    function generateFATAb() {
        var FlotteID = 0; //identifiant flotte
        // on va parcourir la flotte réél
        for (var i = unit.PT; i < unit.EDLM; i++) {
            if (FA[i] != 0) {
                var count = 0;
                for (count = 0; count < FA[i]; count++) {
                    FATab.push([i, unitsFeature[i][unitFeature.Degat], unitsFeature[i][unitFeature.Bouclier], unitsFeature[i][unitFeature.Coque] / 10, unitsFeature[i][unitFeature.Coque] / 10, unitsFeature[i][unitFeature.Bouclier]]); // todo virer les enums
                    //            0       1                                         2                                     3                                 4 (valeur initiale)                              5 (valeur initiale)
                }
            }
        }
    }

    ///generer la flotte réél defense
    function generateFDTAb() {
        var FlotteID = 0; //identifiant flotte
        // on va parcourir la flotte réél
        for (var i = unit.PT; i < (unit.MIP + 1); i++) {
            if (FD[i] != 0) {
                var count = 0;
                for (count = 0; count < FD[i]; count++) {
                    FDTab.push([i, unitsFeature[i][unitFeature.Degat], unitsFeature[i][unitFeature.Bouclier], unitsFeature[i][unitFeature.Coque] / 10, unitsFeature[i][unitFeature.Coque] / 10, unitsFeature[i][unitFeature.Bouclier]]); // // todo virer les enums
                    //            0        1                                              2                                3                                  4                                  5
                }
            }
        }
    }

    //-------------------------------------------------
    //-------------------------------------------------

    //-------------------------------------------------
    //--------comptage de flotte ---------------------
    //-------------------------------------------------
    function generateFAResult() {
        ResultFA = sim.getEmptyFA();

        for (var i = 0; i < FATab.length; ++i) {
            ResultFA[FATab[i][0]]++;
        }
    }

    function generateFDResult() {
        ResultFD = sim.getEmptyFD();

        for (var i = 0; i < FDTab.length; ++i) {
            ResultFD[FDTab[i][0]]++;
        }
    }

    //-------------------------------------------------
    //-------------------------------------------------


    //-------------------------------------------------
    //--------FN simulation--------------
    //-------------------------------------------------
    ///Purge tableaux de flotte
    function pullOutDestroy() {
        // flotte attaquante
        for (var i = 0; i < FATab.length; i++) {
            if (FATab[i][3] <= 0) {
                // sniff
                FATab.splice(i, 1);
            }
        }
        //flotte defense
        for (var i = 0; i < FDTab.length; i++) {
            if (FDTab[i][3] <= 0) {
                // sniff
                FDTab.splice(i, 1);
            }
        }
    }

    //reinitialisation des boucliers
    function ReinitBouclier() {
        // flotte attaquante
        for (var i = 0; i < FATab.length; i++) {
            FATab[i][2] = FATab[i][5];
        }
        //flotte defense
        for (var i = 0; i < FDTab.length; i++) {
            FDTab[i][2] = FDTab[i][5];
        }
    }

    function fighting(_typeFlotte, _IDtype, _degatAvenir) {
        typeFlotte = _typeFlotte;
        IDtype = _IDtype;
        degatAvenir = _degatAvenir;
        isRapidfire = true;

        do { //permet rapidfire

            //////// delection de la cible \\\\\\\\\\\\\\
            VaisseauCible = [];
            if (typeFlotte == "att") // la cible est un vaisseau de la flotte def
            {
                var idVaisseauCible = Math.floor(Math.random() * (FDTab.length - 1)); // selection aléatoire
                VaisseauCible = FDTab[idVaisseauCible];

            }
            else //la cible est un vaisseau de la flotte attaquant
            {
                var idVaisseauCible = Math.floor(Math.random() * (FATab.length - 1)); // selection aléatoire
                VaisseauCible = FATab[idVaisseauCible];

            }
            //////// ------------------------ \\\\\\\\\\\\\\

            //////// routine d attaque \\\\\\\\\\\\\\
            if (degatAvenir < VaisseauCible[2] / 100) { /// si l'adversaire pas assz puissant
                degatAvenir = 0;
            }
            else {
                if (degatAvenir < VaisseauCible[2]) { // le bouclier absorbe tout il y a un restant bouclier
                    VaisseauCible[3] -= degatAvenir;
                    degatAvenir = 0;
                }
                else { // le bouclier ne peut tout absorber
                    degatAvenir -= VaisseauCible[2];
                    VaisseauCible[2] = 0; // bouclier a 0 maintenant
                }

            }
            if (degatAvenir > 0) {   //  dégats dans la coque possible uniquement si les tirs ont mis le bouclier a 0
                if (degatAvenir < VaisseauCible[3]) {
                    VaisseauCible[3] -= degatAvenir;
                }
                else {
                    //console.log(" L'unité en défense a été détruite (reste 0 points de structure)." );
                    VaisseauCible[3] = -1;
                }
            }
            if (VaisseauCible[3] * 10 < VaisseauCible[4] * 7) {        /// Calcul de la probabilité de destruction si cible atteinte a %
                if (Math.floor(Math.random() * VaisseauCible[4]) > VaisseauCible[3]) {
                    VaisseauCible[3] = -1;
                }
            }
            //////// ------------------------ \\\\\\\\\\\\\\

            //////// Rapid fire  \\\\\\\\\\\\\\
            var RF = RapidFire[IDtype][VaisseauCible[0]]; // rf id_vaisseau vs id_cible
            var rnd = Math.random() * 100;
            if (rnd > RF) {
                isRapidfire = false;

            }
            //////// ------------------------ \\\\\\\\\\\\\\


            //fin du cycle d'attaque, on rend la flottille
            if (typeFlotte == "att") {
                FDTab[idVaisseauCible] = VaisseauCible;
            }
            else {
                FATab[idVaisseauCible] = VaisseauCible;
            }
            //////// ------------------------ \\\\\\\\\\\\\\


        }
        while (isRapidfire);//permet RF tant que RF est vrai

        //////// ------------------------ \\\\\\\\\\\\\\

    }

    //-------------------------------------------------
    //-------------------------------------------------


    this.simulate = function () {

        ///creation de la flotte

        console.log("avant combat");
        console.log(FA);
        console.log(FD);

        console.log("avant simulation");
        generateFATAb();
        generateFDTAb();
        console.log(FATab);
        console.log(FDTab);


        var NombreDeTours;
        for (NombreDeTours = 1; NombreDeTours < 7; ++NombreDeTours) {

            // si ce n 'est pas le premier tour il faut reinitialiser le bouclier
            if (NombreDeTours != 1) {
                ReinitBouclier();
            }

            /// attaque attaque
            var size = FATab.length;
            for (var i = 0; i < size; ++i) {
                fighting("att", FATab[i][0], FATab[i][1]);
            }

            /// defense attaque
            size = FDTab.length;
            for (var i = 0; i < size; ++i) {
                fighting("def", FDTab[i][0], FDTab[i][1]);
            }

            //suppression vaisseau detruit
            pullOutDestroy();

            //on sort si plus de flotte
            if (FATab.length == 0) // defenseur gagnant
            {
                console.log(" defenseur gagnant tour " + NombreDeTours);
                break;
            }
            if (FDTab.length == 0) // Attaquant gagnant
            {
                console.log(" attaquant gagnant tour " + NombreDeTours);
                break;
            }


        }


        // on compte les rescapés
        generateFAResult();
        generateFDResult();
        // console.log("apres combat");
        //console.log(ResultFA);
        // console.log(ResultFD);


    };


};



