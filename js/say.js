      
    function sendMessage(){ // faire l'appel du fonction sendMessage() quand l'utilisateur rempli le champ de message, et clique sur le bouton.
        let say = document.getElementById("say").value; // récuperer la valeur du champ.
        let iSay = encodeURI(say);                      // encoder la valeur pour l'URL.
        localStorage.setItem("say", iSay); // puis stoquer la valeur encodée dand localStorage.
        getSay(); 
        document.getElementById("say").value = "";
       }

     async function getSay(){                   // pour notre URL, on récupere les valeurs du:
    let id = localStorage.getItem("id");       // id
    let token = localStorage.getItem("token"); // token 
    let say = localStorage.getItem("say");     // say (le message encodé)

    const url = 'https://greenvelvet.alwaysdata.net/kwick/api/say/'+token+'/'+id+'/'+say; // l'URL
    const options = {
    method: 'GET',
    };

         

        try {
            await fetch(url, options); // activer L'URL 
          // effacer la valeur 'say' du localStorage, pour eviter le renvoyer en cas où
                                            // l'utisateur refraiche la page.


                
         
         
            
            
            }   
        
        catch (error) {
            console.error(error);
        }

        
               
    }
 //  ;  
 /* async function getSay(){
  
            }*/