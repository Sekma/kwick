
/* let membreSay = document.createElement('div');
let membre = document.createElement('h3');
let say = document.createElement('p');

membre.innerText = 'paul';
say.innerText = 'bonjour';


document.getElementById('discussion-membres').appendChild(membreSay).classList.add('right');
membreSay.appendChild(membre);
membreSay.appendChild(say); */


async function getTalk(){
    let token = localStorage.getItem("token"); 
    let time = localStorage.getItem("time");
    
    const url_talk = 'https://greenvelvet.alwaysdata.net/kwick/api/talk/list/'+token+'/'+time;
    const options_talk = {
    method: 'GET',
    };

            try {
                const response_talk = await fetch(url_talk, options_talk); // activer L'URL 
                const object = await response_talk.json();       // et stoquer la reponse dans un objet JSON.
                const conversation = object.result.talk.reverse();
         
//****************************************afficher la conversation**********************************************************
 let block_discussion = document.getElementById('discussion-membres');
 block_discussion.innerHTML="";
await conversation.forEach(element => {
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
   
    
   
    
        });
                }   
            
            catch (error) {
                console.error(error);
            }
            }
               

        setInterval(getTalk,1000);  
        
