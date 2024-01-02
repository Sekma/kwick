// afficher une fenetre (dialog), récuperer et afficher le message de "welcome back".
document.getElementById("dialog").show(); 
document.getElementById('signal').innerText = localStorage.getItem("msg");

// récuperer le non d'utilisateur pour l'afficher en haut de la page (welcome username).
const myName = localStorage.getItem("name");
document.getElementById('welcome-username').innerHTML = myName;

// récuperer le token pour le lien d'affichage des utilisateurs connectés
let token = localStorage.getItem("token");

async function get(){
    const url = 'https://greenvelvet.alwaysdata.net/kwick/api/user/logged/'+token;
const options = {
	method: 'GET',
};

try {
	const response = await fetch(url, options);  // activer L'URL 
	const object = await response.json();        // et stoquer la reponse dans un objet JSON.
    
    let users= object.result.user;               //récuperer la listes des utilisateurs connectés dans un objet.

   users.forEach(function usersList(item){
    if(item!==myName && item!=="null"){      // annuler les résultats "null" et le nom d'utilisateur de la liste envoyée.
        const node = document.createElement("li");
        node.innerHTML=item;                 
        document.getElementById("logged").appendChild(node); // afficher le resultat dans une liste "ul".
    }
   });

} 
catch (error) {
	console.error(error);
}
}
get();