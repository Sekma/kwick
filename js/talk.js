      
    function sendMessage(){ // faire l'appel du fonction sendMessage() quand l'utilisateur rempli le champ de message, et clique sur le bouton.
        let say = document.getElementById("say").value; // récuperer la valeur du champ.
        let iSay = encodeURI(say);                      // encoder la valeur pour l'URL.
        localStorage.setItem("say", iSay);              // puis stoquer la valeur encodée dand localStorage.
       }

     async function getSay(){                   // pour notre URL, on récupere les valeurs du:
    let id = localStorage.getItem("id");       // id
    let token = localStorage.getItem("token"); // token 
    let say = localStorage.getItem("say");     // say (le message encodé)

    const url = 'https://greenvelvet.alwaysdata.net/kwick/api/say/'+token+'/'+id+'/'+say; // l'URL
    const options = {
    method: 'GET',
    };

         let time = localStorage.getItem("time");
        const url_talk = 'https://greenvelvet.alwaysdata.net/kwick/api/talk/list/'+token+'/'+time;
        const options_talk = {
        method: 'GET',
        };

        try {
            await fetch(url, options); // activer L'URL 
          // effacer la valeur 'say' du localStorage, pour eviter le renvoyer en cas où
                                            // l'utisateur refraiche la page.


                const response_talk = await fetch(url_talk, options_talk); // activer L'URL 
                const object = await response_talk.json();       // et stoquer la reponse dans un objet JSON.
                const conversation = object.result.talk;
                console.log(conversation);
//****************************************afficher la conversation**********************************************************
            
           await conversation.forEach(element => {
            let block_discussion = document.getElementById('discussion-membres');
            let membre_say = document.createElement('div');
            let membre = document.createElement('h4');
            let say = document.createElement('p');
            if(element.content!=="null"){
                
                membre.innerText = element.user_name;
                say.innerText = element.content;

                block_discussion.appendChild(membre_say);
                membre_say.appendChild(membre);
                membre_say.appendChild(say);

                let name = localStorage.getItem('name');
                if(element.user_name==name){
                    membre.innerText="Moi";
                    membre_say.classList.add('right');
                }else{
                    membre_say.classList.add('left');
                }
            }
           
            
           
            
            let scrollDown = document.getElementById("discussion");
            scrollDown.scrollTop = scrollDown.scrollHeight;
                });
            
            
            }   
        
        catch (error) {
            console.error(error);
        }

        
               
    }
 //  ;  
 /* async function getSay(){
  
            }*/
            getSay(); 
            localStorage.removeItem('say')