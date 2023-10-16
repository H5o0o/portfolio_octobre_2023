// :::::::: Sélecteurs page d'accueil :::::::::

const selecteurInfos = document.querySelector("#handinfos");
const selecteurProjets = document.querySelector("#handprojets");
const selecteurContact = document.querySelector("#handcontacts");

const infosLien = document.querySelector("#menuselectinfos");
const projetsLien = document.querySelector("#menuselectprojets");
const contactsLien = document.querySelector("#menuselectcontacts");

// Provisoire
// const boutonRouge = document.querySelector("#boutonrouge");

// boutonRouge.addEventListener("click", ()=>{
//     infosLien.style.color = "red";
// });

//Test scrolling thx ChatGPT


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".infosections"); // Sélectionnez toutes les sections
    let currentIndex = 0; // Indice de la section actuellement affichée

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.zIndex = i === index ? 1 : 0; // Mettez en avant la section sélectionnée (z-index : 1) et cachez les autres (z-index : 0)
        });
        currentIndex = index;
    }

    // Gestion des flèches précédentes et suivantes
    document.getElementById("precedent").addEventListener("click", function () {
        const previousIndex = (currentIndex - 1 + sections.length) % sections.length;
        showSection(previousIndex);
    });

    document.getElementById("suivant").addEventListener("click", function () {
        const nextIndex = (currentIndex + 1) % sections.length;
        showSection(nextIndex);
    });

    // Montrez la première section au chargement de la page
    showSection(currentIndex);
});







// ::::::::::::::::Page infos:::::::::::::::::

//:::::::::::::::::Code jQuery pour slider::::::::::

// $(document).ready(function(){
//     $(".slider").slick({
//         autoplay: false,
//         arrows:true,
//         dots:true
//     });
// });

// const boutons = document.querySelectorAll('.infosboutons');
// const precedent = document.getElementById('precedent');
// const suivant = document.getElementById('suivant');
// let index = 0;

// function afficherBouton(index) {
//     boutons.forEach((bouton, i) => {
//         if (i === index) {
//             bouton.style.display = 'block';
//         } else {
//             bouton.style.display = 'none';
//         }
//     });
// }

// precedent.addEventListener('click', () => {
//     index = (index - 1 + boutons.length) % boutons.length;
//     afficherBouton(index);
// });

// suivant.addEventListener('click', () => {
//     index = (index + 1) % boutons.length;
//     afficherBouton(index);
// });


// document.addEventListener("DOMContentLoaded", function(){
// // Afficher le premier bouton au chargement de la page
// afficherBouton(index);
// });
// // ::::::::::::::Supression des styles du DOM::::::::::::::::::

// document.addEventListener("DOMContentLoaded", function(){

// // Variables pour l'animation du bouton rouge 
// const domTousElements = document.querySelectorAll("*");
// console.log(domTousElements);
// const boutonRouge = document.querySelector("#boutonrouge");
// console.log(boutonRouge);

// function supprimerStyles(){
//     domTousElements.forEach(function(element){
//         element.removeProperty('position');
//     });

//     // Afficher la fenêtre modale
// }

// // Appeller la fonction supprimerStyle avec le bouton rouge
// boutonRouge.addEventListener("click", supprimerStyles);


// });
// ::::::::::::::::Partie Desktop::::::::::::::::::

// infosLien.addEventListener("mouseenter", (e)=>{
//     selecteurInfos.style.visibility = "visible";
// });