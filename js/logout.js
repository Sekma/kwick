    // en cliquant sur le bouton déconnexion, une fenètre Dialog s'affiche avec une question "ètes-vous sùre....?"
    // et deux bouton "OUI" et "NON"; le bouton "NON" ferme la fenètre sans aucune exécution.
    async function logout(){ // en clickant sur le bouton "OUI", on appel la fonction

            let id = localStorage.getItem("id");       // on récupere l'ID et le "token" du localStorage, qui sont déja stoqués à la 
            let token = localStorage.getItem("token"); // page précédente, que ce soit la page index (login) ou la page signup.
            
            const url = 'https://greenvelvet.alwaysdata.net/kwick/api/logout/'+token+'/'+id; // l'URL
            const options = {
            method: 'GET',
        };
        
        try {
                    const response = await fetch(url, options); // activer l'URL de déconnexion.

					window.location.assign('index.html'); // charger et afficher la page index (login)
					localStorage.clear()                  // et vider le localStorage               
              
        } 
        catch (error) {
            console.error(error);
        }
        }