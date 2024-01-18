// la fonction d'affiche des messages envoyés.
async function getTalk(){
    let token = localStorage.getItem("token"); // récupérer le token
    let time = localStorage.getItem("time");   // et le timestamp stoqué dans du login.js (ligne 11) ou signup.js (ligne 14)
    
    const url_talk = 'https://greenvelvet.alwaysdata.net/kwick/api/talk/list/'+token+'/'+time; // l'URL
    const options_talk = {
    method: 'GET',
    };

            try {
                const response_talk = await fetch(url_talk, options_talk); // activer L'URL 
                const object = await response_talk.json();       // et stoquer la reponse dans un objet JSON.
                const conversation = object.result.talk.reverse(); // et inverser le résultet.
         
//****************************************afficher la conversation**********************************************************
 let block_discussion = document.getElementById('discussion-membres'); // le bloc où on va afficher la discussion
 block_discussion.innerHTML="";   // vider le bloc pour l'afficher de nouveau chaque 1 sec (voir ligne 52)
await conversation.forEach(element => { // pour chaque element de la conversation (chaque message)
    let membre_say = document.createElement('div'); // créer un div
    let membre = document.createElement('h4');      // créer un h4 pour le nom d'utilisateur
    let say = document.createElement('p');          // créer un p pour le message 
    if(element.content!=="null"){    // si le message n'est pas NULL
        
        function strUcFirst(a) {
            return (a+'').charAt(0).toUpperCase() + (a+'').substr(1); 
          }

        membre.innerText = strUcFirst(element.user_name); // prendre le nom avec une première lettre en majuscule (fonction ligne 26) et l'insérer dans le h4
        say.innerText = element.content;                  // et insérer le message dan le p

        block_discussion.appendChild(membre_say); // insérer le div créer à la ligne 20 dans le bloc de discussion
        membre_say.appendChild(membre);           // et insérer de dans la balise h4 (nom d'utilisateur) créer a la ligne 21
        membre_say.appendChild(say);              // et la balise p (message envoyé) créer a la ligne 22

        let name = localStorage.getItem('name');  // récupérer le nom d'utilisateur 
        if(element.user_name==name){              // et si le nom du l'envoyeur égale au nom de l'utisateur
            membre.innerText="Moi";               // on affiche "Moi" au lieu du nom.
            membre_say.classList.add('right');    // et l'aligner a droite
        }else{
            membre_say.classList.add('left');     // sinon, afficher le nom et l'aligner à gauche.
        }
    }
        });
                }   
            
            catch (error) {
                console.error(error);
            }
            }
               
        setInterval(getTalk,1000);  // appeler la fonction en boucle pour afficher le mise a jour des messages envoyés chaque seconde.
        
