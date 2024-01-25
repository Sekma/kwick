
function login(){
    // récupérer les valeurs des champs du formulaire d'ENTRER.

    let name = document.getElementById('username').value.toLowerCase(); // le nom d'utilisateur, et le transformer en miniscule
    localStorage.setItem("name", name); 

    let password = document.getElementById('password').value; // et le mot de passe.
    localStorage.setItem("password", password);

    const time = parseInt(Date.now()/1000-172800); // récupérer le timestamp-48h (avant 48h de l'inscription et l'entrer).
    localStorage.setItem("time", time);

    // et les stoquer dans LocalStorage pour les utiliser dans le reste du code. 
};

    
        async function getLogin(){
            // récuperer les valeurs (name et password) du localStorage et les déclarer dans des variables.

            let name = localStorage.getItem("name");
            let password = localStorage.getItem("password");
            
            function strUcFirst(a) {
                return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
              }
            let user_name = strUcFirst(name);
            const url = 'https://greenvelvet.alwaysdata.net/kwick/api/login/'+user_name+'/'+password; // l'URL du Login.
            const options = {
            method: 'GET',
            };
        
                try {
                    const response = await fetch(url, options); // activer L'URL 
                    const object = await response.json();       // et stoquer la reponse dans un objet JSON.
                 
                    if(name && password){ // si et seulement si les champs sont remplis.

                        let loginId= object.result.id;  // récuperer "id",
                        let token= object.result.token; // "token" 
                        let msg=object.result.message;  // et le message d'accueil envoyé.

                        if(loginId>0){ // si l'ID est supérieur à 0, le nom d'utilisateur existe dans la listes des utilisateurs inscris.
                                      // si le nom et le mot de passe sont corrects (condition mise par défaut dans l'API).
                        
                                    localStorage.setItem("token", token); //stoquer le "token" et l'ID envoyés par l'objet JSON dans le localStorage,
                                    localStorage.setItem("id",loginId);   // pour les utiliser dans la suite du code.

                                    document.getElementById("form_section").style.display = "none";

                                    document.getElementById("dialog").show(); // ouvrir une fenetre de dialog.
                                    document.getElementById('signal').innerText = msg; // et afficher le message d'accueil "welcome back".
                                    
                                    // et après 2 secondes on charge et affiche la page de messagerie.
                                    setTimeout(function openPage(){window.location.assign('messages.html')},3000);

                        }else{    // si l'ID est égale à 0, on reste à la mème page et on affiche le msg reçu.
                        document.getElementById('error_signal').innerText=msg;
                        }    
                    }   
                } 
                catch (error) {
                    console.error(error);
                }
                }
                getLogin();