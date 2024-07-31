var titre = document.getElementById('Titre');

/*METTRE LE NOM DANS LE TITRE*/
if(localStorage.getItem("prenomDuVisiteur")){
	titre.textContent = "Bonjour " + localStorage.getItem("prenomDuVisiteur") + " !";
}else{
	var prenom = prompt("Comment tu t'appelles ?");
	localStorage.setItem("prenomDuVisiteur", prenom);
}


