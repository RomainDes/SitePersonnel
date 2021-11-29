//CHANGEMENT DE STYLE

//Mettre le bon style lorsque qu'on lance une page

window.onload = function(){
	if(GetCookie("style")=="Webdesign"){
		setActiveStyleSheet("first")
	}else if(GetCookie("style")=="Polytech"){
			setActiveStyleSheet("alternative")
		}
};


//Permet d'enregistrer un cookie avec un certain nom 
 function SetCookie(name, value) { 
     var argv = SetCookie.arguments; 
     var argc = SetCookie.arguments.length; 
     var expires = (argc > 2) ? argv[2] : null; 
     var path = (argc > 3) ? argv[3] : null; 
     var domain = (argc > 4) ? argv[4] : null; 
     var secure = (argc > 5) ? argv[5] : false; 
     document.cookie = name + "=" + escape(value) + 
         ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
         ((path == null) ? "" : ("; path=" + path)) + 
         ((domain == null) ? "" : ("; domain=" + domain)) + 
         ((secure == true) ? "; secure" : ""); 
 } 
   
 function getCookieVal(offset) { 
     var endstr = document.cookie.indexOf(";", offset); 
     if (endstr == -1) endstr = document.cookie.length; 
     return unescape(document.cookie.substring(offset, endstr)); 
 } 
   
 // Permet de récuperer la valeur d'un cookie associé à une clé 
 function GetCookie(name) { 
     var arg = name + "="; 
     var alen = arg.length; 
     var clen = document.cookie.length; 
     var i = 0; 
     while (i < clen) { 
         var j = i + alen; 
         if (document.cookie.substring(i, j) == arg) return getCookieVal(j); 
         i = document.cookie.indexOf(" ", i) + 1; 
         if (i == 0) break; 
     } 
     return null;
} 


// Active une feuille CSS

function setActiveStyleSheet(title){
	var i,a,main;
	for(i=0;(a=document.getElementsByTagName("link")[i]);i++){
		if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){
			a.disabled=true;
			if(a.getAttribute("title")==title)a.disabled=false;
		}
	}
}


// Permute la feuille de style
function switch_theme(){
	if(GetCookie("style")=="Webdesign"){
		setActiveStyleSheet("alternative")
		SetCookie("style","Polytech");
	}else{
			setActiveStyleSheet("first")
			SetCookie("style","Webdesign");
		}
	}


////////////////////////////////////////////////////////////////////////////////////////



// VERIFICATION FORMULAIRE



function verif(){
	prenom=document.getElementById("prenom").value.toString();
	nom=document.getElementById("nom").value.toString();
	date=document.getElementById("date").value.toString();
	mail=document.getElementById("mail").value.toString();
	com=document.getElementById("com").value.toString();


/* verification du nom et du prenom */ 
	if(prenom==""){
		document.getElementById("prenom").style.border="2px solid red";
		alert("Il faut rentrer votre prénom !");
		return false;
	}

	if(nom==""){
		document.getElementById("nom").style.border="2px solid red";
		alert("Il faut rentrer votre nom !");
		return false;
	}

	var chiffre = [0,1,2,3,4,5,6,7,8,9];
	for(i=0;i<nom.length;i++){
		for(j=0;j<chiffre.length;j++){
			if(nom[i]==chiffre[j]){
				document.getElementById("prenom").style.border="2px solid red";
				alert("Un nom ne peut pas contenir de chiffres !");
				return false;
			}
			else if(prenom[i]==chiffre[j]){
				document.getElementById("prenom").style.border="2px solid red";
				alert("Un prénom ne peut pas contenir de chiffres !");
				return false;
			}
			
		}
	}


/* verification de la date */
	if(date==""){
		document.getElementById("date").style.border="2px solid red";
		alert("Il faut rentrer votre date de naissance !");
		return false;
	}

	var table_date = date.split("/");

	if(isNaN(table_date[0]) | isNaN(table_date[1]) | isNaN(table_date[2])){
		alert("Une date doit contenir des chiffres !");
		return false;
	}
	if(table_date[0]>31 | table_date[1]>12 | table_date[2]<1900 | table_date[2]>2017){
		alert("Format de date invalide !");
		return false;
	}	


/* verification du mail */
	
	if(mail==""){
		document.getElementById("mail").style.border="2px solid red";
		alert("Il faut rentrer votre adresse mail !");
		return false;
	}
	
	var table_mail = mail.split("@");
	var mail_autorise = ["gmail.com","orange.fr","wanadoo.fr","hotmail.fr","laposte.net,free.fr"];
	var j=0;
	for(i=0;i<mail_autorise.length;i=i+1){
		if(table_mail[1]!=mail_autorise[i]){
			j=j+1;
		}
	}
	if(j>=mail_autorise.length){
		alert("Votre mail est invalide !");
		return false;
	}
	if(table_mail[0]==""){
		alert("Votre mail est invalide !");
		return false;
	}



/* verification du commentaire */
	
	if(com==""){
		document.getElementById("com").style.border="2px solid red";
		alert("Il faut rentrer votre commentaire !");
		return false;
	}
	

/* Si tout est bon */
	alert("Le message a bien été envoyé");	
	return true;

}
function init_champ(champ){
	document.getElementById(champ).style.border="none";
}
