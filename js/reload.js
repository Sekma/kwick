
setInterval(function reload(){
    location.reload();
}, 300000);

/* let membreSay = document.createElement('div');
let membre = document.createElement('h3');
let say = document.createElement('p');

membre.innerText = 'paul';
say.innerText = 'bonjour';


document.getElementById('discussion-membres').appendChild(membreSay).classList.add('right');
membreSay.appendChild(membre);
membreSay.appendChild(say); */
/* 
        let scrollDown = document.getElementById("discussion");
        scrollDown.scrollTop = scrollDown.scrollHeight;
 



async function getTalk(){

    let token = localStorage.getItem("token"); 

        const url = 'https://greenvelvet.alwaysdata.net/kwick/api/talk/list/'+token+'/1704830517';
        const options = {
        method: 'GET',
        };

            try {
                const response = await fetch(url, options); // activer L'URL 
                const object = await response.json();       // et stoquer la reponse dans un objet JSON.
                const conversation = object.result.talk;
                console.log(conversation);
//****************************************afficher la conversation**********************************************************
            
           await conversation.forEach(element => {
            let membreSay = document.createElement('div');
            let membre = document.createElement('h3');
            let say = document.createElement('p');
            
            membre.innerText = element.user_name;
            say.innerText = element.content;
            
            
            document.getElementById('discussion-membres').appendChild(membreSay).classList.add('right');
            membreSay.appendChild(membre);
            membreSay.appendChild(say);

            let scrollDown = document.getElementById("discussion");
            scrollDown.scrollTop = scrollDown.scrollHeight;
                });
                }   
            
            catch (error) {
                console.error(error);
            }
            }
            
        getTalk();  */