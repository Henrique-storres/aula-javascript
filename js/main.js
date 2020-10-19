function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
}

function redirecionar(){
    window.open('https://github.com/Henrique-storres/aula-javascript');
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}





/*
function soma(n1,n2){
    return n1 + n2;
}


/*
var validar;

function validaIdade(idade){

    if (idade > 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Informe sua Idade");
console.log(validaIdade(idade));


alert(soma(5, 10));

*/



/*
var d = new Date();
alert(d.getMonth());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Informe sua idade");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/