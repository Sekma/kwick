      
    window.onload = function() {
        document.getElementById("say").focus(); // fixer le curseur dans le champ de l'ecriture des messages.
      }
    function sendMessage(){ // faire l'appel du fonction sendMessage() quand l'utilisateur rempli le champ de message, et clique sur le bouton.
        let say = document.getElementById("say").value; // récuperer la valeur du champ.
        let iSay = encodeURI(say);                      // encoder la valeur pour l'URL.
        localStorage.setItem("say", iSay); // puis stoquer la valeur encodée dand localStorage.
        getSay();                         // appeler la fonction de messagerie (ligne 13)
        document.getElementById("say").value = ""; // vider le champ après l'envoie du message.
       }

     async function getSay(){                   // pour notre URL, on récupere les valeurs du:
    let id = localStorage.getItem("id");       // id
    let token = localStorage.getItem("token"); // token 
    let say = localStorage.getItem("say");     // say (le message encodé) stoqué par la fonction sendMessage (ligne 5)

    const url = 'https://greenvelvet.alwaysdata.net/kwick/api/say/'+token+'/'+id+'/'+say; // l'URL
    const options = {
    method: 'GET',
    };

         

        try {
            await fetch(url, options); // activer L'URL 
        }   
        
        catch (error) {
            console.error(error);
        }           
    }