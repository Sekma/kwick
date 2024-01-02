
	function signup(){
		// récupérer les valeurs des champs du formulaire d'inscription:
		// le non d'utilisateur, le mot de passe et la confirmation du mot de passe.
		// et les stoquer dans LocalStorage pour les utiliser dans le reste du code.
		let name = document.getElementById('username').value;
		localStorage.setItem("name", name);

		let password = document.getElementById('password').value;
		localStorage.setItem("password", password);

		let confirmPassword = document.getElementById('confirmPassword').value; 
		localStorage.setItem("confirmPassword", confirmPassword);
	};

		
			async function getSignup(){
				// récuperer le valeur de localStorage dans des variables
				let name = localStorage.getItem("name");
				let password = localStorage.getItem("password");
				let confirmPassword = localStorage.getItem("confirmPassword");

				// appel de l'URL api pour l'inscription d'un nouvel utilisateur.
				const url = 'https://greenvelvet.alwaysdata.net/kwick/api/signup/'+name+'/'+password;
				const options = {
				method: 'GET',
			};
			
			try {
				    // la reponse de l'URL retourne si et seulement si les 3 champs sont remplis

					if(password==confirmPassword && name){         // si le mot de passe et la confirmation sont égales
						const response = await fetch(url, options);// activer L'URL 
						const object = await response.json();      // et stoquer la reponse dans un objet JSON.
						
						let loginId= object.result.id;             
									   // si le nom d'utilisateur est déja utilisé, l'ID retourné est égale à 0.
						if(loginId>0){ // donc la première condition est si l'ID retourné dans l'objet et supérieur à 0. 

                       		let loginId= object.result.id;     //stoquer l'ID envoyé par l'objet JSON dans le localStorage,
							localStorage.setItem("id",loginId);// pour l'utiliser pour la déconnexion.

							let token= object.result.token;     // et nous aurons besoin du token aussi pour la déconnexion.
							localStorage.setItem("token", token); 

							let msg=object.result.message;     // stoquer le message envoyé par l'objet JSON dans le localStorage,
							localStorage.setItem("msg", msg);  // pour le récupérer et l'afficher dans la page suivante.
							 
							window.location.assign('messages.html');// on charge et affiche la page de messagerie.
							

						}else if(loginId==0){ // si l'ID est égale à 0, donc le nom d'utilisateur est déja utilisé.
							document.getElementById('signal').innerText=object.result.message;// on reste à la meme page est on affiche le message reçu.
						}
						
					}else if(password!==confirmPassword && name){ // si le mot de passe est la confirmation ne sont pas égales.
						document.getElementById('signal').innerText="Vérifiez votre mot de passe"; // on resta à la mème page et on affiche ce message.
					}
				
					
			} 
			catch (error){
				console.error(error);
			}
			}
			getSignup();
		
			
	