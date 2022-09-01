// DOM

const touche = [...document.querySelectorAll('.bouton')];
const listeKeycode = touche.map(matouche => matouche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const matouche = touche[indexKeycode];
                ecran.textContent += matouche.innerHTML;
        }
    }
}