
/* let membreSay = document.createElement('div');
let membre = document.createElement('h3');
let say = document.createElement('p');

membre.innerText = 'paul';
say.innerText = 'bonjour';


document.getElementById('discussion-membres').appendChild(membreSay).classList.add('right');
membreSay.appendChild(membre);
membreSay.appendChild(say); */


async function getSay(){

    let token = localStorage.getItem("token"); 

        const url = 'https://greenvelvet.alwaysdata.net/kwick/api/talk/list/'+token+'/1704500644';
        const options = {
        method: 'GET',
        };

            try {
                const response = await fetch(url, options); // activer L'URL 
                const object = await response.json();       // et stoquer la reponse dans un objet JSON.
            
                console.log(object.result.talk);
                }   
            
            catch (error) {
                console.error(error);
            }
            }
            getSay(); 