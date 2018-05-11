var bouton = document.getElementById("bouton");
var reponse = Math.floor(Math.random()*100 + 1); //génère un chiffre random entre 1 et 100
document.addEventListener('keydown', verifier);
console.log(reponse); //Le petit cheat qui bypass VAC

/*Timer/décompte de deux minutes*/
var counter = 120;

function initTimer(){
    timer = setInterval(countdown, 1000);
}

function countdown(){
    counter = counter - 1;
    document.getElementById('decompte').innerHTML = counter + " secondes";

    if (counter <= 0){
        clearInterval(timer);
        document.getElementById('intro').style.display = "none";
        proposition.style.display = "none";
        resultat.style.color = "#FF0000";
        resultat.innerHTML = "Vous avez failli à votre mission." + "<br />" + "La combinaison était " + reponse + " mais Internet a déjà disparu..";
    }
}

/*Fonction principale qui vérifie que les règles du jeu sont respectées*/
function verifier(e) {
    var Key = e.keyCode;
    if (Key === 13){
    var proposition = document.getElementById("proposition");
    var resultat = document.getElementById("resultat");

    function formeReponse(){ //Factorisation des deux premiers if de la vérification
        resultat.style.color = "#990000";
        document.getElementById('intro').style.display = "none";
        proposition.style.display = "none";
        document.getElementById('effetBack2').style.backgroundImage = "url('r3Background.png')";
    }

    if (proposition.value < reponse) { //Premier cas
        formeReponse();
        document.getElementById('plus').style.marginTop = "75px";
        document.getElementById('resultat').style.marginTop = "20px";
        document.getElementById('plus').style.visibility='visible';
        resultat.innerHTML = "La combinaison doit avoir une valeur supérieure à " + proposition.value;
        setTimeout(reset, 1000);
    }
    
    if (proposition.value > reponse) { //Deuxième cas
        formeReponse();
        document.getElementById('moins').style.visibility='visible';
        resultat.innerHTML = "La combinaison doit avoir une valeur inférieure à " + proposition.value;
        setTimeout(reset, 1000);
    }
    
    if (proposition.value == reponse) { //Troisième cas
        resultat.style.color = "#990000";
        clearInterval(timer);
        document.getElementById('etoile').style.visibility='visible';
        document.getElementById('intro').style.display = "none";
        document.getElementById('effetBackground').style.backgroundImage = "url('successBackground.jpg')";
        document.getElementById('effetBack2').style.border = 'none';
        document.getElementById('effetBack2').style.justifyContent = "flex-end";
        proposition.style.display = "none";
        resultat.style.marginTop = "100px";
        resultat.innerHTML = "VOUS AVEZ SAUVÉ INTERNET !";
        document.getElementById('reloadpage').style.visibility ='visible';
        console.log('Tu es arrivé(e) ici par chance, déduction ou cheat, gg :)');
    }
}
}

/*Reset l'affichage*/
function reset() {
    proposition.value = "";
    document.getElementById('plus').style.marginTop = "0";
    document.getElementById('resultat').style.marginTop = "0";
    document.getElementById('intro').style.display = "block";
    proposition.style.display = "block";
    document.getElementById('plus').style.visibility='hidden';
    document.getElementById('moins').style.visibility='hidden';
    document.getElementById('etoile').style.visibility='hidden';
    document.getElementById('effetBack2').style.backgroundImage = "none";
}