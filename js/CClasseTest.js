class voiture {
    image;
    posX;
    posY;
    couleurText;
    texts;
    vitesse;
    numVoit;
    constructor(numVoit, image, posX, posY, vitesse) {
        this.numVoit = numVoit;
        this.image = image;
        this.posX = posX;
        this.posY = posY;
        this.vitesse = vitesse;
    }
    changeVitesse(vitesse) {
        this.vitesse = vitesse;
    }

    /**
    * Affichage textuel du postIt - Sérialisation du postIt
    */
    toString() {
        return '{"x":' + this.posX + ',"y":' + this.posY + ',"image":"' + this.image + '","vitesse":' + this.vitesse + '}'
    }

    changePlace(x, y) {
        this.posX = x;
        this.posY = y;
    }

    changeImage(img) {
        this.image = img;
    }
    afficheTest() {
        let monElem;
        let creation = false;

        //Ma voiture existe t'elle ?
        if (document.getElementById("vroum" + this.numVoit) == null) {
            //non, on la créé
            monElem = document.createElement('div');
            creation = true;
        }
        else {
            //oui, on la récupère
            console.log("Mon elem Existe")
            monElem = document.getElementById("vroum" + this.numVoit);
        }
        monElem.style.position = "fixed";
        monElem.id = "vroum" + this.numVoit;
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundImage = "url(./img/" + this.image + ")";
        monElem.style.backgroundRepeat = "no-repeat";
        monElem.style.backgroundSize = "contain";




        //Si ma voiture n'existe pas je l'ajoute au html
        if (creation) {
            document.body.appendChild(monElem);
            monElem.innerHTML += "mon Num = " + this.numVoit
            jdeAttachElem("vroum" + this.numVoit, "div", ["basDroite"], "menBas" + this.numVoit)
            jdeAttachElem("menBas" + this.numVoit, 'i', ["fas", "fa-arrows-alt"], "", () => {
                idBouge = this.numVoit;
                onBouge = true;
            });
            jdeAttachElem("menBas" + this.numVoit, 'i', ["fas", "fa-trash-alt"], "", () => {
                document.getElementById("vroum" + this.numVoit).remove()
                delVoit(this.numVoit)
            });


        }



    }
}
