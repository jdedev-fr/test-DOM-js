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

    logMe("Sérialisation du contexte : " + tabDingo.toString(), true)
    if (onBouge && idBouge != 0) {
        console.log("on déplace !")
        tabDingo[(idBouge - 1)].changePlace(x, y);
        tabDingo[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh();

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