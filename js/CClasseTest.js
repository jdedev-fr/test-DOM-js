class postIt {
    couleur;
    largeur;
    hauteur;
    couleurText;
    texts;
    vitesse;
    constructor(couleur, largeur, hauteur, couleurText, texts, vitesse) {
        this.couleur = couleur;
        this.largeur = x;
        this.hauteur = y;
        this.couleurText = couleurText;
        this.texts = texts;
        this.vitesse = vitesse;
    }
    changeVitesse(vitesse) {
        this.vitesse = vitesse;
    }

    changePlace(x, y) {
        this.largeur = x;
        this.hauteur = y;
    }

    changeCouleur(coul) {
        this.couleur = coul;
    }
    afficheTest() {
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.hauteur + "px";
        monElem.style.left = this.largeur + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "Je suis un objet de test, j'avance à " + this.vitesse + " Vroum";
        document.body.appendChild(monElem);
    }
}
monPostIt = new postIt(100, 200, 30, 'red');
monPostIt.afficheTest();