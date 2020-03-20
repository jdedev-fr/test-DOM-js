let onBouge = false;
let x;
let y;

let maVoit = new voiture("voiture.jpg", 50, 50, 12);
maVoit.afficheTest();

document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})
document.addEventListener('mouseup', () => {
    console.log("on stop !")
    onBouge = false;
})

function refresh() {
    if (onBouge) {
        console.log("on déplace !")
        maVoit.changePlace(x, y);
        maVoit.afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh();