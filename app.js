// DOM

const touche = [...document.querySelectorAll('.bouton')];
const listeKeycode = touche.map(matouche => matouche.dataset.key);

document.addEventListener('keydown', (e) => console.log(e))