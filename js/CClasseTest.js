class voiture {
    image;
    posX;
    posY;
    couleurText;
    texts;
    vitesse;
    constructor(image, posX, posY, vitesse) {
        this.image = image;
        this.posX = posX;
        this.posY = posY;
        this.vitesse = vitesse;
    }
    changeVitesse(vitesse) {
        this.vitesse = vitesse;
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
        if (document.getElementById('vroum') == null) {
            //non, on la créé
            monElem = document.createElement('div');
            creation = true;
        }
        else {
            //oui, on la récupère
            console.log("Mon elem Existe")
            monElem = document.getElementById('vroum');
        }
        monElem.style.position = "fixed";
        monElem.id = "vroum"
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundImage = "url(./img/" + this.image + ")";
        monElem.style.backgroundRepeat = "no-repeat";
        monElem.style.backgroundSize = "contain";

        monElem.addEventListener('click', () => {
            console.log("on bouge !")
            onBouge = true;
        })

        //Si ma voiture n'existe pas je l'ajoute au html
        if (creation) {
            document.body.appendChild(monElem);
        }
    }
}
