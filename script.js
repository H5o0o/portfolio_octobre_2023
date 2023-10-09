// :::::::: Sélecteurs page d'accueil :::::::::

const selecteurInfos = document.querySelector("#handinfos");
const selecteurProjets = document.querySelector("#handprojets");
const selecteurContact = document.querySelector("#handcontacts");

const infosLien = document.querySelector("#menuselectinfos");
const projetsLien = document.querySelector("#menuselectprojets");
const contactsLien = document.querySelector("#menuselectcontacts");

// Provisoire
const boutonRouge = document.querySelector("#boutonrouge");

boutonRouge.addEventListener("click", ()=>{
    infosLien.style.color = "red";
});


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