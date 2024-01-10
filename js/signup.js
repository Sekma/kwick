
	function signup(){
		// récupérer les valeurs des champs du formulaire d'inscription:
		
		let name = document.getElementById('username').value; // le nom d'utilisateur,
		localStorage.setItem("name", name);

		let password = document.getElementById('password').value; // le mot de passe,
		localStorage.setItem("password", password);

		let confirmPassword = document.getElementById('confirmPassword').value; // et la confirmation du mot de passe.
		localStorage.setItem("confirmPassword", confirmPassword);

		const time = parseInt(Date.now()/1000-172800); // récupérer le timestamp-48h (avant 48h de l'inscription et l'entrer).
		localStorage.setItem("time", time);       

		// et les stoquer dans LocalStorage pour les utiliser dans le reste du code.     
	};

		
			async function getSignup(){
				// récuperer les valeurs (name, password et confirmPassword) du localStorage et les déclarer dans des variables.

				let name = localStorage.getItem("name");
				let password = localStorage.getItem("password");
				let confirmPassword = localStorage.getItem("confirmPassword");

				const url = 'https://greenvelvet.alwaysdata.net/kwick/api/signup/'+name+'/'+password; // l'URL de l'inscription d'un nouvel utilisateur.
				const options = {
				method: 'GET',
			};
			
			try {
					if(password==confirmPassword && name){         // si le mot de passe et la confirmation sont égales
						const response = await fetch(url, options);// activer L'URL 
						const object = await response.json();      // et stoquer la reponse dans un objet JSON.
						
						let loginId= object.result.id; // récupérer l'id et le déclarer dans un variable.
									// si le nom d'utilisateur est déja utilisé, l'ID retourné est égale à 0.
									   
						if(loginId>0){ // donc la première condition est si l'ID retourné dans l'objet et supérieur à 0. 

                       		let loginId= object.result.id;     // récupérer l'ID envoyé par l'objet JSON,
							localStorage.setItem("id",loginId);

							let token= object.result.token;     // et le token.
							localStorage.setItem("token", token); 

							// et les stoquer dans LocalStorage pour les utiliser dans le reste du code. 

							let msg=object.result.message;     // récupérer le message d'accueil envoyé par l'objet JSON.
							 
									document.getElementById("dialog").show(); // ouvrir une fenetre de dialog.
                                    document.getElementById('signal').innerText = msg; // et afficher le message d'accueil.
									
									// après 2 secondes on charge et affiche la page de messagerie.
                                    setTimeout(function openPage(){window.location.assign('messages.html')},2000);
							

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
		
			
	