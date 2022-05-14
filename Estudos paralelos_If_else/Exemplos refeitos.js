// Exemplos que encontrei na internet e reproduzi para ver se eu resolvia bem a construção do código sozinha para depois comentar.

// 1 Exercício:
// Vamos criar um login básico e simples? Primeiro, vamos criar nosso campo de input (do tipo senha, password) e o botão de entrar.
// var senha="2112", variável tentativa, senha == tentativa
// Primeira coisa que o meu código ficou diferente é que coloquei o type = "text", mas no exemplo estava <input id="password" type="password">
// Verificar essa mudança.
// O restante da escrita do código está semelhante, apenas mudei a ordem que foi de acordo com o meu raciocínio, porém
// O "parseInt" não estava lá, mas achei que fosse preciso converter em string.
// "tudo digitado dentro do input é uma string.", por isso apliquei o parseInt.

<!DOCTYPE html>
<html>
 <head>
   <title> Login basico</title>
   <input id = "password" type = "text">
   <button onclick = "login()">Entrar</button> <br />

   <script type="text/javascript">
    function login(){
     var tentativa = parseInt(document.getElementById("password").value
    var senha="2112"   
    }
    
    if (senha == tentativa) {
        alert("Senha está correta, você será redirecionado");
}else{
 alert("Senha está incorreta, tente novamente");
}


   </head>
</html>


// 2 Exercício
//"Faça um script que pergunte a idade ao usuário. Se tiver 65 anos ou mais, exiba uma mensagem dizendo que 
//ele já pode se aposentar. Senão, o tempo que ele ainda tem que trabalhar para se aposentar".
//Primeiro, criamos nosso formulário de input, do tipo numérico (number) e o botão de OK.
//Ao clicar no botão (onclick), ele chama a função aposentar() do script.
// O valor digitado é sempre uma string, então é preciso converter.

// Erros:
// Acabei colocando informção dentro de paranteses para o else, ver se pode ou não.
// Poderia ter acrescentado uma forma como: "Ainda falta " + (65-idade) +" ano(s) para se aposentar"), em que
// a resposta sairá mais completa.
//Aprendi novas questões como colocar um if dentro do else, mas o exemplo não realizei porque precisei acompanhar para 
// compreender, logo vou ver em novos exercícios.


<!DOCTYPE html>
<html>
 <head>
   <title> Perguntando a idade dos usuários</title>
   <input id = "idade1" type = "number">
   <button onclick = "aposentar()">OK</button> <br />

   <script type="text/javascript">
    function aposentar(){
     var idade = parseInt(document.getElementById("idade1").value   
    }
    
    if (idade>=65 anos) {
        alert("Você já pode se aposentar");
}else (idade<65 anos) {
 alert("Você não possui a idade para se aposentar");
}


   </head>
</html>