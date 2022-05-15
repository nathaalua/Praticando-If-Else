// Exercícios de Teste Condicional IF ELSE em JavaScript
// 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

// Na resposta comentada foi utilizada if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
//  alert("Vogal");
//   else     
//       alert("Consoante");
//     } 

<!DOCTYPE html>
<html>
 <head>
   <title> Vendo se é vogal ou consoante?</title>

<body>
<input id = "consoante" type= "text"></input>
<button onclick = "enviar()">OK</button> <br />

   <script type="text/javascript">
    function enviar(){
     var consoante = parseInt(document.getElementById("consoante").value
    var vogal = "a", "e", "i", "o", "u"
    }
    
    if (consoante != vogal) {
        alert("A letra digitada é uma consoante.");
}else{
 alert("A letra digitada é uma vogal.");
}
</body>

<html>
</head>

