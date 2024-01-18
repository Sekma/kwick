function strUcFirst(a) { // fonction pour mettre la première lettre en Majuscule
    return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }

// récuperer le non d'utilisateur pour l'afficher en haut de la page (welcome username).
const myName = localStorage.getItem("name");

if(!myName){ // s'il n'y a pas un nom stoquer dans localStorage
    window.location.assign('index.html'); // retour à la page d'accueil (login)
}else{ //si non
    document.getElementById('welcome-username').innerHTML = strUcFirst(myName); // afficher le nom en haut de la page (première lettre en majuscule)

    // récuperer le token pour le lien d'affichage des utilisateurs connectés
    let token = localStorage.getItem("token");

    async function get(){
        const url = 'https://greenvelvet.alwaysdata.net/kwick/api/user/logged/'+token; //url logged
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);  // activer L'URL 
        const object = await response.json();        // et stoquer la reponse dans un objet JSON.
        
        
        document.getElementById('logged').innerHTML=""; // vider la liste des utilisateurs connectés, pour les réafficher (ligne 39)

        let users= object.result.user;               //récuperer la listes des utilisateurs connectés dans un objet.

    users.forEach(function usersList(item){ // récuperer chaque utilisateur 
       
          user_name=strUcFirst(item);       // mettre la première lettre en majuscule

        if(item!==myName && item!=="null"){      // annuler les résultats "null" et le nom d'utilisateur de la liste envoyée.
            const node = document.createElement("li"); // et mettre chaque nom dans une balise li
            
            node.innerHTML = user_name;                 
            document.getElementById("logged").appendChild(node); // afficher le resultat dans une liste "ul".
        }
    });

    } 
    catch (error) {
        console.error(error);
    }
    }
   
     setInterval(get,1000); // appeler la fonction en boucle chaque 1 sec.
                            // vider la liste et l'afficher de nouveau pour afficher le mise a jour des utilisateurs connectés chaque seconde.
    }