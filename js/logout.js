//*********************************** */ ajouter une fonction pour ne plus charger la page si le localStorage est vide.
//*********************************** */ + window.location (index.html); *****************************************************
        
        async function logout(){ // en clickant sur le bouton déconnexion, on appel la fonction

            let id = localStorage.getItem("id");       // on récupere l'ID et le "token" du localStorage, qui sont déja stoqués à la 
            let token = localStorage.getItem("token"); // page précédente, que ce soit la page index (login) ou la page signup.
            
            const url = 'https://greenvelvet.alwaysdata.net/kwick/api/logout/'+token+'/'+id; // l'URL
            const options = {
            method: 'GET',
        };
        
        try {
                    const response = await fetch(url, options); // activer l'URL de déconnexion.
                    //const object = await response.json();       // et stoquer la reponse dans un objet JSON.

					window.location.assign('index.html'); // charger et afficher la page index (login)
					localStorage.clear()                  // et vider le localStorage               
              
        } 
        catch (error) {
            console.error(error);
        }
        }