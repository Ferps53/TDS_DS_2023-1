numeroPergunda = 0;

function credito(){
    window.location.href = "creditos.html";

}

function pergunta(){
    window.location.href = "pergunta.html";
  
}

function voltar(){

    window.location.href = "index.html";
}

function mudarPergunta(RealOuFake){

    if(RealOuFake == vet[numeroPergunda].RealFake){    

        numeroPergunda++;

        if(numeroPergunda == 15){

            window.location.href = "wins.html";
        }else{

            document.getElementById("numeroPergunta").innerHTML = numeroPergunda +1;

            if(numeroPergunda == 13){

                document.getElementById("textoPergunta").style.fontSize = "30px";
                document.getElementById("textoPergunta").style.position = "relative";
                document.getElementById("textoPergunta").style.left = "10vh";
                document.getElementById("textoPergunta").innerHTML = vet[numeroPergunda].pergunta;

            }else{
                document.getElementById("textoPergunta").innerHTML = vet[numeroPergunda].pergunta;
            
            }
        }

    }else{

        window.location.href = "fail.html";
    }   
}


let vet = [

{RealFake: 1 , pergunta: "Deodoro da Fonseca foi o primeiro presidente do Brasil?"},
{RealFake: 0 , pergunta: "Nelson Mandela criou a teoria da relatividade?"},
{RealFake: 1 , pergunta: "Batman não tem poderes?"},
{RealFake: 1 , pergunta: "Jupiter é o maior planeta do sistema solar? "},
{RealFake: 0, pergunta: "Platão disse: só sei que nada sei"},
{RealFake: 1, pergunta: "Secar roupa atrás da geladeira aumenta o consumo de energia?"},
{RealFake: 0 , pergunta: "San Marino é o menor país do mundo?"},
{RealFake: 0, pergunta: "Alexandre o grande, foi rei do imperio romano"},
{RealFake: 0, pergunta: "o iphone foi criado em 2003?"},
{RealFake: 1 , pergunta: "A luz é uma particula e uma onda ao mesmo tempo?"},
{RealFake: 0 , pergunta: "PHP é uma linguagem de programação mais antiga que o java?"},
{RealFake: 1 , pergunta: "Diógenes de Sinope refutou platão usando uma galinha?"},
{RealFake: 1 , pergunta: "     o teorema de pitagoras ajudou a concluir que a terra é redonda?"},
{RealFake: 0 , pergunta: "Newton criou Teoria da Gravidade durante quarentena \nda gripe espanhola?"},
{RealFake: 1 , pergunta: "Alan Turing é considerado o pai da ciência da computação"},

]