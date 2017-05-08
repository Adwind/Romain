/* Titre: romain
   Auteur: Alexandra Potvin
fait la conversion d'un nombre entier entre
1 et 3999 sa notation romaine */

/* 1 => I; 2 => II; 3=> III; 4 => IV
 {...} 5 => V; 10 => X; 50 => L; 100=> C;
 500 => D; 1000 => M */

// fonction qui divise le nombre en 4 (millier,centaine,dizaine,unité)
function nombreRomain (nombre){
    
    //ôte plus haut que 3999 => erreur
    if (nombre > 3999) {
	
		return("Erreur: Nombre trop élever.");
    }
	
	//ôte les nombres a virgules
    if (nombre != Math.round(nombre)) {
	
		return("Erreur: Nombre à virgule.");
    }
	
    nombre = "" + nombre;//change le nombre en String s'il l'était pas
    
    while (nombre.length < 4){

		nombre = "0" + nombre ; // ajoute les nombre manquant pour le rendre au millier
    
	}
	
    // retourne les réponse des fonctions lié qui change en lettre (millier,centaine,dizaine,unité)
    // ex: pour les millier prend le premier charactère du String le trnasforme en nombre et l'envoie dans la fonction millier
    return ( millier (+nombre.charAt(0)) + centaine(+nombre.charAt(1)) + dizaine(+nombre.charAt(2)) + unite(+nombre.charAt(3)));
    
}

//assemble chaque unité pour former le nombre(unité,dizaine,centaine,milllier(
function assemblage( nombre, symbolebase, symbolemillieu, symbolefin){

	if (nombre < 4 ) {
	
		return (repeter(nombre,symbolebase));
		
	}else if (nombre == 4 ){

		return (symbolebase + symbolemillieu );
		
	}else if (nombre > 4 && nombre < 9 ){ 
	
		return (symbolemillieu + repeter(nombre - 5, symbolebase));
		
	}else{

		return (symbolebase + symbolefin);
	
	}
}
	
// donne lqa valeur des milliers

function millier (mille){

	return ( repeter (mille, "M" ) ); 

}
	
// donne la valeur des centaines
function centaine (cent) {

	return ( assemblage(cent, "C","D","M"));

}
// donne la valeur des dizaine
function dizaine (dix) {

	return ( assemblage(dix, "X","L","C"));

}
// donne la valeur des unites
function unite (un) {

	return ( assemblage(un, "I","V","X"));

}

// retourne la chaine du nombre qui contiens plusieurs fois le meme symbole
function repeter ( n, t ) {
	
	var nombreAjouter = "";

	for (i = 1 ; 1 < n ; i++ ) {
	
		nombreAjouter = nombreAjouter + t ;
	
	}

	return(nombreAjouter);
}


//fonction repeter ex:repeter(3,"I") doit retourner "III"
function repeter ( n, t ){
    
    var chainerep = "";//crée une variable qui va contenir la chaine de caractère
    
    for ( i = 0; i < n; i++ ) {
        
        chainerep = chainerep + t ;//ajoute un symbole a la chaine
        
    }
    
    return chainerep;//renvoi la chaine de caractère créé
    
}

//test unitaire 
function  testRomain (){
    
    assert( nombreRomain(0) == "" ); // test à 0
    assert( nombreRomain(3) == "III" ); // test simple
    assert( nombreRomain(439) == "CDXXXIX" );//test proposé 1
    assert( nombreRomain(2948) == "MMCMXLVIII");//test proposé 2
    assert( nombreRomain(3964) == "MMMCMLXIV" ); // test quelqu'on que utilisant un peu tout
    assert( nombreRomain(5691) == "Erreur: Nombre trop élever." ); //test supposé selon le programme écrit(>3999)
}
testRomain();//fait les test unitaire 