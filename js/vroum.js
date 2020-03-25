let onBouge = false;
let x;
let y;
let idBouge = 0;
var tabDingo = new Array();




document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})
document.addEventListener('mouseup', () => {
    console.log("on stop !")
    idBouge = 0
    onBouge = false;
})

document.getElementById('dingPlus').addEventListener('mousedown', () => {
    //idBouge = tabDingo.length + 1;
    let voit = new voiture(tabDingo.length + 1, "voiture.jpg", 100, 100, 12)
    tabDingo.push(voit);
    //onBouge = true;
    tabDingo[(tabDingo.length - 1)].afficheTest();

});
function refresh() {

    //  logMe("Sérialisation du contexte : " + tabDingo.toString(), true)
    sauvContexte();
    if (onBouge && idBouge != 0) {
        console.log("on déplace !")
        tabDingo[(idBouge - 1)].changePlace(x, y);
        tabDingo[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 300)
}



function jdeAttachElem(parentId, elem, classElem = [], idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }

    }
    if (idElem != "") {
        elemACreer.id = idElem
    }
    if (fonct != "") {
        elemACreer.addEventListener('click', fonct);
    }
    document.getElementById(parentId).appendChild(elemACreer)

}

function delVoit(numVoit) {
    delete tabDingo[numVoit - 1]
}

/**
 * Fonction permettant de logger du texte dans un element HTML avec id logMe
 * 
 * @param {string} texte - Texte à logger
 * @param {boolean} vide - Reinit boite de log
 */
function logMe(texte, vide = false) {
    if (document.getElementById("logMe") != null) {
        if (vide) document.getElementById("logMe").innerHTML = "";
        document.getElementById("logMe").innerHTML += '<br>' + texte
    }
}

function sauvContexte() {
    createCookie("svTabDingo", "[" + tabDingo.toString() + "]")
    //  let myCookie = "svTabDingo=[" + tabDingo.toString() + "]";
    //On crée un délai d'expiration d'une semaine pour le cookie.
    //   let date = new Date();
    //   date.setTime(date.getTime() + (30 * 7 * 24 * 60 * 60 * 1000)); /* La date est en millisecondes */
    //   myCookie += "; expires=" + date.toGMTString(); /* Les dates des cookies doivent être au format GMT */
    //   logMe(myCookie, true);
    //  document.cookie = myCookie; /* Ajout du cookie */
}

window.onload = () => {
    tmpTabPost = readCookie("svTabDingo")
    tmpTabPost = eval(tmpTabPost)
    // alert("Voici le contenu de mon cookie : \n" + tmpTabPost + "\n ou \n " + eval(tmpTabPost))
    for (unPost in tmpTabPost) {
        //console.log(tmpTabPost[unPost])
        let voit = new voiture(tabDingo.length + 1, tmpTabPost[unPost].image, tmpTabPost[unPost].x, tmpTabPost[unPost].y, tmpTabPost[unPost].vitesse)
        tabDingo.push(voit);
        //onBouge = true;
        tabDingo[(tabDingo.length - 1)].afficheTest();
    }

    refresh();
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}