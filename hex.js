
// parâmetros de entrada 
// cores -> array de cores
// coresn -> array com quantidade de cores por cor
// largura ou altura a ocupar
// se não houver quantidade de cores por cor 
// largura e altura a ocupar
// o padrão é 290 mm de diâmetro
// pode ser mudado e os cálculos são adaptados
// portanto
// > largura do hexágono < opcional > default 290 mm
// > quantidade de cores < opcional > default 6
// > cores e quantidade de cada cor a usar < caso seja fornecido precisa ser guardado...
// > largura e altura do espaço de implantação
// > a largura, altura e quantidade de peças são valores dependentes pelo que só são úteis 2 deles

    var qtCores = 3;
    //var cores = ["lightgray","blue","brown","grey","cyan","orange"];
    var cores = ["#395676","#646466","#c0c0c0","#FFFFFF"];  // Miguel
    //var cores = ["#777777","#888888","#999999","#AAAAAA","#BBBBBB", "#DDDDDD","#FFFFFF"];
    // const qtcores = 10;
    //var cores = ["#444444","#555555","#666666","#777777","#888888","#999999",
    //    "#AAAAAA","#BBBBBB", "#CCCCCC", "#DDDDDD"];
    var branco = "white";

    var coresn = [6,9,9]; // [4,6,6]; // [1,2,3]; [6, 9, 9];

    var precor = [];

    var contalinhas;
    var linha1hex;
    var linha2hex;
    var totalhex;
    calcarea(2.25,1.13);  //chama uma área de 3 x 2 metros
    // calcarea(1,1);

    encheprecor();


//    var qtcols = 35;          // 11%4 = 3   9%4 = 1
//    var qtlins = 16;
    var qtcols = linha1hex * 2 + linha2hex * 2 + 1;
    var qtlins = contalinhas;

    var tipoc = qtcols%4;  // 1 ou 3   (5,9,13,17,21,...) ou (3,7,11,15,19,23,...)
    var tipol = qtlins%2;  // 0 - par ou 1 - impar
    const corlist = []; 
    // Usada para teste //const corlist = 
    // [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5];
    // vai ser mudado para ter em conta as quantidades dadas pelo operador
    enchecorlista(1);

    
    const cormapa = [];    // maximo 3000 para 30 colunas por 30 linhas
    var idnumber = 0, idcor = 0;
    let width = 73, height = 125, width2 = 145;
    let un = "px";
    var style = document.createElement('style');

    document.getElementsByTagName('head')[0].appendChild(style);


function main() {
    prepara();
    body = document.getElementsByTagName("body")[0];  // ponto de entrada 

    const main = document.createElement("main");  // contentor é uma grid
    main.style.display = "grid";
    // main.style.gridTemplateColumns = "repeat(10, 1fr)";
    // main.style.gridTemplateRows = "repeat(8, 1fr)";
    // main.style.gridColumnGap =  0px;  // não funciona
    // grid-row-gap: 0px;
    main.style.width = "min-content";
    main.style.height = "min-content";
    body.appendChild(main);
    let a, b, c, d;     // parâmetros de grid
    let esq;            // peça de esquerda
    let topo = false;   // peça de topo - false para começar a true...
        let corlinha = 0;   // começa numa linha par
        let corcol = 0;     // começa numa coluna par
        let contador = -1; corup = 1, coresq = 0, cordir = 0;
        setcolor("red","green");        // apenas atribui altura  e larguras das peças ... sem cores 
    for (let j = 0; j < qtlins; j++) {   // linhas da matriz
        b = -1; d = 0;  // atributos da grid
        esq = true;     // começa pela esquerda
        topo = !topo;   // começa pelo topo
        let corini, corfim;     // auxiliares para cores nas diagonais

        for (let i = 0; i < qtcols; i++) {   // colunas da matriz
            contador++;
            //if (contador%3 == 0) {coresq = idcor; idcor+=2; cordir = corup; corup+=2 }

            let gridItem = document.createElement("div");   // cada elemento da grid é um div
            let localid = "i"+(idnumber++).toString();      // id o elemento
            // gridItem.className = "d"+(j)+(i).toString();    // não usado
            gridItem.id = localid;       // id do elemento para atribuição de cor
            if (i%2 == 0) { // caso impar  0 é 1
                if (topo) {
                    if(esq) { 
                        gridItem.className += " finaue";
                        console.log(i);
                        if (i==qtcols-1 && i%4 == 0 ) {
                            //let aux = corini;
                            corini = branco;
//                            corfim = j==0 ? branco : cores[corlist[idcor]];
                            corfim = j==0 ? branco : cores[cormapa[contador]];
                            console.log(corini+' '+corfim);
                        } else
                            if (j==qtlins-1 && i%4==0){
                                corini = branco;
                                corfim = i==0 ? branco : cores[cormapa[contador]];
                            } else {
//                              corfim = i==0 || j==0 ? branco : cores[corlist[idcor]]; 
                                corfim = i==0 || j==0 ? branco : cores[cormapa[contador]]; 
//                              corini = cores[corlist[corup]];
                                corini = cores[cormapa[contador+1]];                        
                            }
                        gridItem.style.background = 
                        'linear-gradient( to left top, '+corini+' 50%, '+corfim+' 50%)';
                    }
                    else {  
                        gridItem.className += " finadd";
                        if (j==qtlins-1 && (i+2)%4==0){
                            corini = branco;
                            corfim = i==qtcols-1 ? branco : cores[cormapa[contador+1]];
                        } else {
//                          corini = cores[corlist[idcor]];
                            corini = cores[cormapa[contador]];
//                          corfim = i == qtcols -1 || j==0 ? branco : cores[corlist[corup]];
                            corfim = i == qtcols -1 || j==0 ? branco : cores[cormapa[contador+1]];
                        }
                        gridItem.style.background = 
                        'linear-gradient( to right top, '+corini+' 50%, '+corfim+' 50%)';
                    }
                }else {
                    if(esq) { 
                        gridItem.className += " finaud";
                        if (i==qtcols-1 && i%4 == 0) {
                            //let aux = corini;
//                            corini = j==qtlins-1 ? branco : cores[corlist[idcor]];
                            corini = j==qtlins-1 ? branco : cores[cormapa[contador]];
                            corfim = branco;
                            console.log(corini+' '+corfim);
                        } else {
//                            corini = i==0 || j==qtlins-1 ? branco : cores[corlist[idcor]] ;
//                            corfim = cores[corlist[corup]];
                            corini = i==0 || j==qtlins-1 ? branco : cores[cormapa[contador]] ;
                            corfim = cores[cormapa[contador+1]];
                        }
                        gridItem.style.background = 
                        'linear-gradient( to right top, '+corini+' 50%, '+corfim+' 50%)';
                    }else{
                        gridItem.className += " finade";
//                        corfim = cores[corlist[idcor]];
//                        corini = i==qtcols-1 || j==qtlins-1 ? branco : cores[corlist[corup]];
                        corfim = cores[cormapa[contador]];
                        corini = i==qtcols-1 || j==qtlins-1 ? branco : cores[cormapa[contador+1]];
                        gridItem.style.background = 
                        'linear-gradient( to left top, '+corini+' 50%, '+corfim+' 50%)';
                    }
                }
                b += 2; d += 2;
                esq = !esq;
            } else {  // caso par 1 é 2
                if (j==0 && (i+3)%4==2) gridItem.style.background = branco;  // (i+3)%4==2
                else 
                    if (j==qtlins-1 && tipol==0 && (i+3)%4==2) gridItem.style.background = branco;  // (i+3)%4==2
                    else
                        if (j==qtlins-1 && tipol==1 && (i+1)%4==2) gridItem.style.background = branco;  // (i+3)%4==2
                        else {
//                    if ((i+3)%4==2) gridItem.style.background = cores[corlist[idcor]];
//                    else gridItem.style.background = cores[corlist[corup]];
                        if ((i+3)%4==2) gridItem.style.background = cores[cormapa[contador]];
                        else gridItem.style.background = cores[cormapa[contador]];
                    }
                if (i%4==1) {
                    gridItem.className += " largag";
                }else{ 
                    gridItem.className += " largab";
                }
                b += 1; d += 1;
                //idcor++;   // incrementa a cor depois de gastar a anterior
            }  // fi
            corlinha = j%2;
            a = j + 1; c = j + 2; 
            gridItem.style.gridArea = a + '/' + b + '/' + c + '/' + d; 
            main.appendChild(gridItem);
            //let lgridItem = document.querySelector("#"+localid);
        } // for i
    }  //for j
    // main.remove(); // remove o elemento da dom, reset total
}

function setcolor(cor1, cor2) {
    style.innerHTML = 'div { border: 0px solid gainsboro; height: '+height+un+'; } \
    .finaue { width: '+width+un+'; } .finadd { width: '+width+un+'; } .finade { width: '+width+un+'; }\
    .finaud { width: '+width+un+'; } .largag { width: '+width2+un+'; } .largab { width: '+width2+un+'; }';
}

function aleatorio(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function encheprecor() {
    var poscor = 0;                             // posição atual no array precor
    for (let i = 0; i < qtCores; i++) {         // para todas as cores 
        for (let j = 0; j < coresn[i]; j++) {   // para todas as peças da cor
            precor[poscor++] = i;               // a posição recebe esta cor
        }
    }
    for (let i = poscor; i < totalhex; i++) {
        precor[i] = qtCores;
    }
}

function enchecorlista(op) {
    if (op == 0) {
        for (let i = 0; i < 200; i++){  // gera uma lista aleatória de índices de cores - simula array bidimensional
            corlist[i] = aleatorio(qtCores-1);
        }
    } else {
        let x = totalhex;                       // total de hexágonos
        for (let i = 0; i < totalhex; i++) {    // para todos os hexágonos
            y = aleatorio(x - 1);               // é obtido um hexágono aleatório (distinto pela cor)
            corlist[i] = precor[y];             // e colocado por ordem na corlist
            x--;
            for (let j = y; j < x; j++ ) {      // o hexágono sorteado é retirado dos possíveis
                precor[j] = precor[j+1];
            }
        }
    }
}

// largura e altura em metros
function calcarea(largura, altura) {

// cálculo do número de hexágonos de determinada dimensão 
// que cabem numa área retangular de determinada dimensão
// dispostos com lados paralelos horizontais <_> 

    let hexraio = 0.145;   // = hexlado  distância menor entre vértices
    let hexlarg = 2 * hexraio;  // diâmetro - distância maior entre vértices
    // = 2 * sqrt(hexraio * hexraio - hexraio * hexraio / 4) = 0.251147
    let hexalt = 0.25;    // raio do círculo interno - distância entre lados paralelos
    // hexalt = 2 * sqrt(hexraio * hexraio - hexraio * hexraio / 4);
    // printf("a altura é %f ", hexalt);
    let hexmeioraio = hexraio / 2;    // metade do raio
    let hexmeialt = hexalt / 2;       // metade da altura
    //let largura = 3; //2.030;              // largura da parede (espaço de aplicação)
    //let altura = 2; //1.750;               // altura da parece (espaço de aplicação)
    console.log("largura a preencher: ");
    // scanf("%f", &largura);
    console.log("%.04f", largura);
    console.log("\naltura a preencher: ");
    // scanf("%f", &altura);
    console.log("%.04f", altura);
    let somalargura = hexlarg;        // começa com um hexágono de largura
    let somaaltura = hexalt;          // começa com um hexágono de altura
    totalhex = 0;                   // total de hexágonos do painel
    linha1hex = 0;                  // total de hexágonos da primeira linha
    linha2hex = 0;                  // total de hexágonos da segunda linha
    contalinhas = 0;                // contador de linhas (meias linhas exceto na primeira)
    let contacolunas = 0;               // contador de colunas                
    // tipo 1 - só tem a primeira linha; 2 - tem pelo menos duas linhas
    let acabar = 0;
    let tipo = 0;
    if (somaaltura > altura) 
        // no caso especial em que não cabe nenhum hexágono na altura, não começa
        acabar = 1;
    else {
        if (somaaltura + hexmeialt <= altura){  // a altura dá para, pelo menos, duas linhas
            tipo = 2;
            contalinhas = 1;
        }else {                         // a altura só dá para uma linha
//            printf("\numa linha");
            tipo = 1;
            contalinhas = 0;
        }
    }
    while (!acabar) {
        if (somalargura > largura)      // chegou ao fim a largura
            if (somaaltura > altura) acabar = 1; // fim da largura e da altura
            else {                      // ainda há linhas...
//                printf("\npassei aos %d", contalinhas);
                somaaltura += hexmeialt;
                totalhex += contalinhas%2 == 0 ? linha2hex: linha1hex;
                contalinhas++;
            }
        else {                          // definindo as larguras
            // caso particular em que só dá para uma linha de hexágonos
            if ( tipo == 1) {
                somalargura += hexlarg; // os hexágonos ficam seguidos <_><_><_>
                contacolunas++;
                linha1hex++;
            } else {
                contacolunas++;
                somalargura += hexraio + hexmeioraio; // os hexágonos ficam encaixados <_>-<_>-<_> 
                contacolunas%2 == 0 ? linha2hex++: linha1hex++;
            }
        }
    }
    console.log("\nTotal de linhas: %d", contalinhas);
    console.log("\nTotal de linhas 1: %d", linha1hex);
    console.log("\nTotal de linhas 2: %d", linha2hex);
    console.log("\nTotal de hexágonos: %d", totalhex);
}



    function prepara() {
    let aux = 0, aux1 = 1;
    let c = 0;

    for (let j = 0; j < qtlins; j++){
        cormapa[c++] = corlist[aux];
        for (let i = 0; i < qtcols-1; i+=4){
            console.log("j ",j," aux ",aux, " aux1 ", aux1);
            cormapa[c++] = corlist[aux];
            cormapa[c++] = corlist[aux];
            if ((i < qtcols - 4) || qtcols%4 == 1){    // não executa para 7, 11, 15, 19, 23, ... 
                cormapa[c++] = corlist[aux1];
                cormapa[c++] = corlist[aux1];
            }
            aux += 2;
            aux1 += 2;
            console.log(c-5,aux, aux1,cormapa[c-4],cormapa[c-3],cormapa[c-2],cormapa[c-1]);
        }
        if (j%2 == 0){    // linha par
            console.log("par aux "+aux+" aux1 ", aux1);
            aux = qtcols%4 == 3 ? aux - (qtcols+1)/2 : aux -(qtcols-1)/2;
            if (j==0){
                aux = 0;  //////
                aux1 = 1;
            }else{
                aux1 += qtcols%4 == 1 ? 0 : -1;
            }
            console.log("aux "+aux+" aux1 ", aux1);
        }else {            // linha impar
            console.log("impar aux "+aux+" aux1 ", aux1);
            if(qtcols%4 == 1) {
                aux += 0;
                aux1 = aux1 + 1 - (qtcols+1)/2; 
            } else {
                aux1 = aux1  - (qtcols+1)/2;
                aux--;
            }
            // aux += qtcols%4 == 1 ? 0 : -1;
            // aux1 = aux1 - 2;
            // aux1 = aux1  - (qtcols+1)/2;
            console.log("aux "+aux+" aux1 ", aux1);
        }
    }
}


