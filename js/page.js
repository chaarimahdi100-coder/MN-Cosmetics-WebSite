function validerInscription() {

    // Récupération des champs
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("telephone").value.trim();
    let naissance = document.getElementById("naissance").value;
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let pays = document.getElementById("pays").value;
    let conditions = document.getElementById("conditions").checked;

    // Genre (radio)
    let genre = document.querySelector("input[name='genre']:checked");

    // Champs obligatoires
    if (nom === "") { alert("Veuillez entrer votre nom."); return false; }
    if (prenom === "") { alert("Veuillez entrer votre prénom."); return false; }
    if (email === "") { alert("Veuillez entrer votre email."); return false; }
    if (tel === "") { alert("Veuillez entrer votre numéro de téléphone."); return false; }
    if (naissance === "") { alert("Veuillez entrer votre date de naissance."); return false; }
    if (username === "") { alert("Veuillez choisir un nom d'utilisateur."); return false; }
    if (password === "") { alert("Veuillez entrer un mot de passe."); return false; }
    if (confirmPassword === "") { alert("Veuillez confirmer le mot de passe."); return false; }
    if (!genre) { alert("Veuillez sélectionner un genre."); return false; }

    // Vérification simple de l'email
if (!email.includes("@") || !email.includes(".")) {
    alert("Veuillez entrer un email valide.");
    return false;
}
// Vérifier email valide
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Vérification téléphone : 8 chiffres
if (tel.length !== 8) {
    alert("Téléphone invalide : 8 chiffres obligatoires.");
    return false;
}
// Vérifier que tous les caractères sont des chiffres
for (let i = 0; i < tel.length; i++) {
    if (tel[i] < '0' || tel[i] > '9') {
        alert("Téléphone invalide : uniquement des chiffres.");
        return false;
    }
}

// Vérification mot de passe simplifiée
if (password.length < 8) {
    alert("Mot de passe trop court : minimum 8 caractères.");
    return false;
}
// Vérifier password fort
function isStrongPassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[0-9]/.test(password) &&
           /[!@#$%^&*]/.test(password);
}

// Vérifier présence d'une majuscule
let majuscule = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
        majuscule = true;
        break;
    }
}
if (!majuscule) {
    alert("Mot de passe doit contenir au moins une majuscule.");
    return false;
}

// Vérifier présence d'un chiffre
let chiffre = false;
for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
        chiffre = true;
        break;
    }
}
if (!chiffre) {
    alert("Mot de passe doit contenir au moins un chiffre.");
    return false;
}

// Vérifier présence d'un caractère spécial
let special = false;
let caracteresSpeciaux = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
for (let i = 0; i < password.length; i++) {
    if (caracteresSpeciaux.includes(password[i])) {
        special = true;
        break;
    }
}
if (!special) {
    alert("Mot de passe doit contenir au moins un caractère spécial.");
    return false;
}


    // Correspondance mot de passe
    if (password !== confirmPassword) { alert("Les mots de passe ne correspondent pas."); return false; }

    // Vérifier pays
    if (pays === "") { alert("Veuillez sélectionner un pays."); return false; }

    // Conditions générales
    if (!conditions) { alert("Vous devez accepter les conditions générales !"); return false; }

    alert("Inscription validée avec succès !");
    return true;
}

/********************************************
 2) FONCTIONS ÉVÈNEMENTS 
*********************************************/
function mettreFond(elem) {
    elem.style.backgroundColor = 'yellow';
}


function mettreFond(elem) {
    elem.style.backgroundColor = "white";
}

function detecterTouche(event) {
    console.log("Touche appuyée : " + event.key);
}



function texteSelectionne() {
    alert("Du texte a été sélectionné !");
}

function afficherSaisie() {
    let txt = document.getElementById("prenom").value;
    console.log("Saisie en cours : " + txt);
}

function changerTitre() {
    let titre = document.querySelector("h2");
    titre.innerHTML = "Formulaire modifié automatiquement";
    titre.style.color = "blue";
}

/********************************************
 3) AJOUTER / MODIFIER / ÉCRASER
*********************************************/
function ajouter() {
    let nom = document.getElementById("nom").value;
    alert("Ajout effectué : " + nom);
}

function modifier() {
    let prenom = document.getElementById("prenom");
    prenom.value = "Valeur modifiée";
    alert("Prénom modifié !");
}

function ecraser() {
    document.getElementById("email").value = "";
    document.getElementById("telephone").value = "";
    alert("Champs écrasés !");
}


/********************************************
 * 1) FONCTIONS D’ÉVÉNEMENTS – PAGE COMMANDE
 *********************************************/

// Changer la couleur du texte (titre ou autre élément)
function changerCouleur(eleId, couleur) {
    let ele = document.getElementById(eleId);
    ele.style.color = couleur;
}

// Changer la couleur de fond d'un élément (produit)
function mettreFond(ele, couleur) {
    ele.style.backgroundColor = couleur;
}



/****************
 * 2) GESTION DU PANIER – PAGE COMMANDE
 ***************/


// Tableau pour stocker les commandes
let commandes = [];
let totalGeneral = 0;


function ajouterAuPanier(btn) {
    const produitDiv = btn.parentNode;
    
    
    const nom = produitDiv.getElementsByClassName("nom-produit")[0].textContent;
    const prix = parseFloat(produitDiv.getElementsByClassName("prix-unitaire")[0].textContent);
    let qty = parseInt(produitDiv.getElementsByClassName("qty")[0].value);

    
    const radiosTeinte = produitDiv.getElementsByClassName("teinte");
    let teinte = null;
    let i = 0;
    // Utilisation de la boucle 'for' 
    for (i = 0; i < radiosTeinte.length; i++) {
       
        if (radiosTeinte[i].checked) {
            teinte = radiosTeinte[i].value;
            break;
        }
    }
    
    // Utilisation de structure conditionnelle 'if' 
    if (!teinte) {
        alert("Veuillez choisir une teinte !");
        return;
    }

    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > 99) qty = 99;

    
    let index = -1; // -1 pour indiquer que le produit n'est pas trouvé
    let j = 0;
    // Utilisation de la boucle 'for' 
    for (j = 0; j < commandes.length; j++) {
        // On vérifie le nom ET la teinte
        if (commandes[j].nom === nom && commandes[j].teinte === teinte) {
            index = j;
            break; // Sort de la boucle dès que l'article est trouvé
        }
    }
    
    // Utilisation de structure conditionnelle 'if...else' 
    if (index !== -1) {
        commandes[index].qty += qty;
        commandes[index].sousTotal = commandes[index].qty * commandes[index].prix;
    } else {
        // Utilisation de la méthode push() 
        commandes.push({
            nom: nom,
            teinte: teinte,
            prix: prix,
            qty: qty,
            sousTotal: prix * qty
        });
    }

    afficherPanier();
}


// Afficher le panier et ajouter les boutons supprimer
function afficherPanier() {
    // Utilisation de document.getElementById() 
    const div = document.getElementById("listeCommandes");
    div.innerHTML = ""; // Nettoyage de l'intérieur
    totalGeneral = 0;
    
    
    let k = 0;
    // Utilisation de la boucle 'for' 
    for (k = 0; k < commandes.length; k++) {
        const p = commandes[k]; // L'objet commande
        const index = k;        // L'index du produit

        // Utilisation de document.createElement() 
        const ligne = document.createElement("p");
        // Utilisation de la propriété textContent 
        ligne.textContent =
        p.nom + " (" + p.teinte + ") : " +
        p.qty + " × " + p.prix + " DT = " +
        p.sousTotal + " DT ";

        // Bouton supprimer
        const btn = document.createElement("button");
        btn.textContent = "X";
        
        btn.onclick = function() {
            supprimerProduit(index);
        };

        // Utilisation de appendChild() 
        ligne.appendChild(btn);
        div.appendChild(ligne);

        totalGeneral += p.sousTotal;
    }; // Fin de la boucle for

    // Utilisation de document.getElementById() et textContent 
    document.getElementById("total-general").textContent = totalGeneral + " DT";
}

// Supprimer un produit avec la méthode splice 
function supprimerProduit(index) {
    commandes.splice(index, 1);
    afficherPanier();
}

// Réinitialiser le panier
function resetPanier() {
    commandes = [];
    afficherPanier();
    alert("Panier réinitialisé !");
}

// Valider la commande
function validerCommande() {
    if (commandes.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    alert("✔ Commande confirmée avec succès !");
    resetPanier();
}