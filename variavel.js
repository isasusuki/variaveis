let a = 40;
let b = 10;
let c = 20;
let total = 0;
let totald = 0;
let x =100;

total = a + b + c;      
totald = a + b + c / x;  
console.log("valor do total é:", total);
console.log("valor do totald é:", totald);
console.log(outraconta());
console.log(carro());
console.log(media());
console.log(triangulo());
console.log(frutas());
console.log(operacao());
console.log(usandofor());

//inicio da function

function outraconta(){
    var d=10;
    var e=20;
    var f=30;
    var tot=0;
    var totd=0;
    var xx=100;
    tot= d+e+f;
    totd = d+e+f/xx;
   // console.log ("valor de tot é", tot);
   // console.log ("valor de totd é", totd);
   return tot;
   return totd;             
}


function media(){
    let nfinal=0;
    n1=30;
    n2=90;
    n3= 100;
    nfinal= (n1+n2+n3)/3;
console.log ("a media final é", nfinal.toFixed (1) );
}

function carro(){
carro1= "fusca";
carro2="uno";

kmcarro1=6;
kmcarro2=4;

precokm1= 20;
precokm2= 35;

totalcarro1= kmcarro1*precokm1;
totalcarro2= kmcarro2*precokm2;

console.log("O total do", carro1, "é:", totalcarro1);
console.log("O total do", carro2, "é:", totalcarro2);
    return
}

function triangulo(){
    Delta=0;
b=5;
a=2;
c=8;

Delta = b*b*4*a*c;
console.log("O delta é",Delta);
    return
}

function frutas(){
    let frutas=["maça","banana","laranja"];//let e pra criar variavel
    console.log(frutas.length);
    console.log(frutas);
    frutas.push("manga");
    console.log(frutas);
    console.log(frutas.length);
    frutas.pop();
    frutas.pop(); //apagar 
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.push('uva');
    frutas.push('amora');
    frutas.push('mexirica', 'abacate', 'abacaxi');//puxar alguma variavel
    console.log(frutas);
    console.log("a fruta na posiçao é", frutas[1]);
    console.log(frutas.length);
    console.log("o total de resgistros e de",frutas.length+1,"frutas" );
    return
}

function operacao(){
    let  aluno="isabela";
let n1= 420;
let n2= 2;
let n3= 256;
let n4= 8;

divisao= n1*n3;
multi= n4/n2;
adiçao=n3+n1;
menos=n3-n4;

console.log ("a conta da aluna",aluno, 'de divisão é',divisao)
console.log("a conta da aluna",aluno, 'de multiplicação é',multi)
console.log("a conta da aluna",aluno, 'de adição é',adiçao)
console.log("a conta da aluna",aluno, 'de subtração é',menos)
    return
}

function usandofor(){
    let notas=[8,7,6,9,10];
let soma=0;
for(let i=0; i<notas.length;i++){
    soma+=notas[i];
}
let media=soma/notas.length;
console.log("a média é:",media)
    return
}