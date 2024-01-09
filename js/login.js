
function login(){// quand l'utilisateur rempli le formulaire de login et click sur le bouton ENTRER, on appel la fonction login().
    let name = document.getElementById('username').value;
    localStorage.setItem("name", name); 

    let password = document.getElementById('password').value;
    localStorage.setItem("password", password); // stoquer le nom et le mot de passe dans localStorage pour les utiliser dans la suite du code.

    const time = parseInt(Date.now()/1000-172800);
    
    localStorage.setItem("time", time);
};

    
        async function getLogin(){

            let name = localStorage.getItem("name");
            let password = localStorage.getItem("password"); // puis les récuperer pour l'URL de "login".
            
            const url = 'https://greenvelvet.alwaysdata.net/kwick/api/login/'+name+'/'+password; // l'URL
            const options = {
            method: 'GET',
            };
        
                try {
                    const response = await fetch(url, options); // activer L'URL 
                    const object = await response.json();       // et stoquer la reponse dans un objet JSON.
                 
                    if(name && password){ // si et seulement si les champs sont remplis.

                        let loginId= object.result.id;  // récuperer "id",
                        let token= object.result.token; // "token" 
                        let msg=object.result.message;  // et le message envoyé.

                        if(loginId>0){ // si l'ID est supérieur à 0, le nom d'utilisateur existe dans la listes des utilisateurs inscris.
                                      // si le nom et le mot de passe sont corrects (condition mise par défaut dans l'API).
                        
                                      localStorage.setItem("token", token); //stoquer le "token" et l'ID envoyés par l'objet JSON dans le localStorage,
                                      localStorage.setItem("id",loginId);   // pour les utiliser pour la déconnexion.

                                      localStorage.setItem("msg", msg);    // stoquer le message envoyé par l'objet JSON dans le localStorage,
                                                                           // pour le récupérer et l'afficher dans la page suivante.

                                    // afficher une fenetre (dialog), récuperer et afficher le message de "welcome back".
                                    document.getElementById("dialog").show(); 
                                    document.getElementById('signal').innerText = localStorage.getItem("msg");
                                    
                                      // et après 2 secondes on charge et affiche la page de messagerie.
                                      setTimeout(function openPage(){window.location.assign('messages.html')},2000);

                        }else{    // si l'ID est égale à 0, on reste à la mème page et on affiche le msg reçu.
                        document.getElementById('signal').innerText=msg;
                        }    
                    }   
                } 
                catch (error) {
                    console.error(error);
                }
                }
                getLogin();