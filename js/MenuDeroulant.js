// -------------------------------------- DÉBUT MENU DÉROULANT ----------------------------------


// variable qui contient un tableau contenant les différents sous-onglets du menu
var aDomaine = ["ACCUEIL", "À PROPOS", "ACTIVITÉS", "NOS SERVICES"]
/* On veut accéder au nom de domaine une seule fois. Ce tableau permettra de compter chaque acces */
//aCompteDomaine[numSousOnglet]++ va permettre d'égaliser le padding (les positions des balises a) entre-eux pour que cela s'affiche bien
var aCompteDomaine = [0,0,0,0]
var aChaineChoix = ['','','','']// aChaineChoix permet de placer les numéros des sous-onglets dans la bonne colonne
var aMenuPrincipal = []// aMenuPrinicpal va rajouter un div et le h2 poru bien créer le menu
var sMenu = ''// variable qui contiendra l'ensemble du menu déroulant




// pour chaque sous-onglet de collection_sousonglets, va exectuer le fonction menuDeroulant
collection_sousonglets.forEach(menuDeroulant)



// fonction qui permet de compter les sous-onglets et de bien placer les a
function menuDeroulant(elm, i){
	/* elm représente le contenu d'une cellule du tableau collection_sousonglets */
	/* i représente l'indice du contenu de la cellule */
	numSousOnglet = elm.position
	/* on ferme l'accès pour ce domaine */
	if (aCompteDomaine[numSousOnglet] == 0)
	{
		aMenuPrincipal[numSousOnglet] = '<div><h2>' + aDomaine[numSousOnglet] + "</h2>"
	}
	aCompteDomaine[numSousOnglet]++
	aChaineChoix[numSousOnglet] +=  '<a id="'+i+'" style="top:'+ (22*aCompteDomaine[numSousOnglet]+85) +'px">' + elm.nom + '</a>'
}


var aOrdre=[0,1,2,3]// contient l'ordre à laquelle on veut placer les éléments
// cette boucle permet de fermer le div et de placer le tout dans les bonnes colonnes et fermera le div
for (var k=0 ; k<aOrdre.length; k++)
{
	sMenu += aMenuPrincipal[aOrdre[k]] + aChaineChoix[aOrdre[k]] + '</div>'
}


// Ce code permet au menu déroulante de toujours être en haut de la fenêtre en suivant la position que l'on désire être dans la page
 var menu = document.querySelector('#barre_navigation')// variable sélectionnant le menu déroulant
 var menuPosition = menu.getBoundingClientRect().top;
 window.addEventListener('scroll', function() {
 if (window.scrollY >= menuPosition) {
 menu.style.position = 'fixed';
 menu.style.top = '0px';
 } else {
 //menu.style.position = 'static';
 menu.style.top = '';
 }
 });
// -------------------------------------- FIN MENU DÉROULANT ----------------------------------