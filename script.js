function abrirModalRules() {
    var modal = document.getElementById("myModal-rules");
    var span = document.getElementsByClassName("close")[0];
    
    // Tornando o modal visível
    modal.style.display = "block";

    // Fechar o modal ao clicar no x
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var cartas = [
    {
        nome: "Baraka", 
        habilidades : {ataque: 1225, saude: 1100, resistencia: 1050, recuperacao: 1050},
        imagem: "assets/cards/baraka.webp"
    },
    {
        nome: "Ermac", 
        habilidades : {ataque: 1225, saude: 980, resistencia: 1025, recuperacao: 1050},
        imagem: "assets/cards/ermac.webp"
    },
    {
        nome: "Johnny Cage", 
        habilidades : {ataque: 1225, saude: 1100, resistencia: 1200, recuperacao: 1050},
        imagem: "assets/cards/johnny-cage.webp"
    },
    {
        nome: "Jax Briggs", 
        habilidades : {ataque: 870, saude: 1050, resistencia: 1200, recuperacao: 750},
        imagem: "assets/cards/jax-briggs.webp"
    },
    {
        nome: "Kano", 
        habilidades : {ataque: 950, saude: 880, resistencia: 880, recuperacao: 950},
        imagem: "assets/cards/kano.webp"
    },
    {
        nome: "Kotal Kahn", 
        habilidades : {ataque: 980, saude: 980, resistencia: 1050, recuperacao: 1100},
        imagem: "assets/cards/kotal-kahn.webp"
    },
    {
        nome: "Liu Kang", 
        habilidades : {ataque: 990, saude: 900, resistencia: 980, recuperacao: 1050},
        imagem: "assets/cards/liu-kang.webp"
    },
    {
        nome: "Mileena", 
        habilidades : {ataque: 1250, saude: 950, resistencia: 1090, recuperacao: 850},
        imagem: "assets/cards/mileena.webp"
    },
    {
        nome: "Raiden", 
        habilidades : {ataque: 1200, saude: 1300, resistencia: 1000, recuperacao: 1000},
        imagem: "assets/cards/raiden.webp"
    },
    {
        nome: "Shinnok", 
        habilidades : {ataque: 1275, saude: 1100, resistencia: 1000, recuperacao: 1100},
        imagem: "assets/cards/shinnok.webp"
    },
    {
        nome: "Tanya", 
        habilidades : {ataque: 1100, saude: 1225, resistencia: 1100, recuperacao: 1050},
        imagem: "assets/cards/tanya.webp"
    },
    {
        nome: "Sonya Blade", 
        habilidades : {ataque: 930, saude: 840, resistencia: 890, recuperacao: 930},
        imagem: "assets/cards/sonya-blade.webp"
    },
    {
        nome: "Scorpion", 
        habilidades : {ataque: 1550, saude: 1450, resistencia: 1475, recuperacao: 1450},
        imagem: "assets/cards/scorpion.webp"
    },
    {
        nome: "Sub-Zero", 
        habilidades : {ataque: 1550, saude: 1400, resistencia: 1500, recuperacao: 1550},
        imagem: "assets/cards/sub-zero.webp"
    },
    {
        nome: "Sindel", 
        habilidades : {ataque: 1620, saude: 1160, resistencia: 1420, recuperacao: 1450},
        imagem: "assets/cards/sindel.webp"
    },
    {
        nome: "Smoke", 
        habilidades : {ataque: 1150, saude: 1250, resistencia: 1100, recuperacao: 1000},
        imagem: "assets/cards/smoke.webp"
    },
    {
        nome: "Kintaro", 
        habilidades : {ataque: 1200, saude: 1140, resistencia: 1090, recuperacao: 1100},
        imagem: "assets/cards/kintaro.webp"
    },
    {
        nome: "Jade", 
        habilidades : {ataque: 1250, saude: 1200, resistencia: 975, recuperacao: 1200},
        imagem: "assets/cards/jade.webp"
    },
    {
        nome: "Noob Saibot", 
        habilidades : {ataque: 1600, saude: 1180, resistencia: 1450, recuperacao: 1400},
        imagem: "assets/cards/noob-saibot.webp"
    },
    {
        nome: "Skarlet", 
        habilidades : {ataque: 1450, saude: 1600, resistencia: 1400, recuperacao: 1600},
        imagem: "assets/cards/skarlet.webp"
    },
]

var cartasJogador = []; // Conjunto de cartas do jogador
var cartasMaquina = []; // Conjunto de cartas da máquina
var habilidadeSelecionadaValue; // Habilidade escolhida pelo jogador
var habilidadeSelecionadaName;
var habilidadeMaquinaValue; // Valor da habilidade da máquina
var cartaJogador; // Carta da rodada (jogador)
var cartaMaquina; // Carta da rodada (maquina)

// Sortear cartas do jogador e da máquina
(function () {
    // Sorteando cartas do jogador
    for (let i = 0; i < 10; i++) {
        var indice = parseInt(Math.random()*cartas.length);
        cartasJogador[i] = cartas[indice];
        cartas.splice(indice, 1);
    }
    
    // Máquina recebe as cartas restantes
    cartasMaquina = cartas;
}) ();

function verCartas() {
    var modal = document.getElementById("myModal-cards");
    var span = document.getElementsByClassName("close")[1];
    
    // Tornando o modal visível
    modal.style.display = "block";
    
    // Fechar o modal ao clicar no x
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Exibindo as cartas
    var divCartas = document.getElementById('modal-body-cards');
    divCartas.innerHTML = "";
    for (let indice = 0; indice < cartasJogador.length; indice++) {
        divCartas.innerHTML += `<img src=${cartasJogador[indice].imagem} class='exibirCard'>`
    }
}

function exibirMenu() {
    // Reajustando cabeçalho e retirando botão de menu
    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.height = "150px";
    cabecalho.innerHTML = `<img src="https://www.pngmart.com/files/17/Mortal-Kombat-Logo-PNG-Free-Download.png" alt="Logo Mortal Kombat" id="logo"> <button class="btn-cabecalho" onclick="abrirModalRules()"><img src="assets/logo-regras.png" alt="">Regras</button>
    
    <!-- Modal Rules -->
    <div id="myModal-rules" class="modal-rules">
        <!-- Modal content -->
        <div class="modal-content-rules">
            <div class="modal-header-rules">
                <span class="close">&times;</span>
                <span class="modal-title-rules">
                    <img src="assets/logo-regras.png" alt="">
                    <h2>Regras</h2>
                </span>
            </div>
            <div class="modal-body-rules" id="modal-text-rules">- O jogo baseia-se na comparação dos valores de sua carta com a do outro jogador. Para sua carta vencer, a característica escolhida precisa ter valor maior do que a carta do seu adversário. <br>
            - Se você vencer a carta do outro jogador irá para o seu monte de cartas. <br>
            - Se o outro jogador vencer sua carta irá para o monte de cartas do adversário. <br>
            - Em caso de empate ambos permanecem com suas respectivas cartas.</div>
        </div>
    </div>`;

    // Incluir botões iniciais da tela
    var main = document.getElementById('main');
    main.innerHTML = `<nav>
    <button id="btn-jogar" onclick="jogar()">Jogar</button>
    <button id="btn-cartas" onclick="verCartas()">Minhas Cartas</button>
    </nav>

    <!-- Modal Cards -->
    <div id="myModal-cards" class="modal-cards">
        <!-- Modal content -->
        <div class="modal-content-cards">
            <div class="modal-header-cards">
                <span class="close">&times;</span>
                <span class="modal-title-cards">
                    <h2>Minhas Cartas</h2>
                </span>
            </div>
            <div class="modal-body-cards" id="modal-body-cards"></div>
        </div>
    </div>`;
}

function jogar() {
    // Reajustando cabeçalho e incluindo botão de menu para voltar a tela inicial
    document.getElementById('logo').style.width = "80px";
    var cabecalho = document.getElementById('cabecalho');
    cabecalho.style.height = "85px";
    cabecalho.innerHTML += "<button class='btn-cabecalho' onclick='exibirMenu()'>Menu</button>"

    // Retirar botões iniciais da tela
    var btnJogar = document.getElementById('btn-jogar');
    var btnCartas = document.getElementById('btn-cartas');
    btnJogar.disabled = true;
    btnCartas.disabled = true;
    btnJogar.style.display = "none";
    btnCartas.style.display = "none";

    // Sorteando carta do jogador
    var indiceCartaMaquina = parseInt(Math.random()*cartasMaquina.length);
    cartaMaquina = cartasMaquina[indiceCartaMaquina];

    // Sorteando carta do jogador
    var indiceCartaJogador = parseInt(Math.random()*cartasJogador.length);
    cartaJogador = cartasJogador[indiceCartaJogador];

    // Escolhendo habilidade
    var main = document.getElementById('main');
    main.innerHTML = `<p class="text">Escolha uma característica:</p>
    <div id="game">
        <section id="cartaJogador">
            <p>Você</p>
            <img src=${cartaJogador.imagem} style="height:350px;">
        </section>
        <section id="habilidades">
            <button class="btn-habilidades" value="${cartaJogador.habilidades.ataque}">Ataque</button>
            <p>${cartaJogador.habilidades.ataque}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.saude}">Saúde</button>
            <p>${cartaJogador.habilidades.saude}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.resistencia}">Resistência</button>
            <p>${cartaJogador.habilidades.resistencia}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.recuperacao}">Recuperação</button>
            <p>${cartaJogador.habilidades.recuperacao}</p>
            <button id="combater" onclick="combater()" disabled>COMBATER</button>
        </section>
        <section id="cartaMaquina">
            <p>Computador</p>
            <img src="assets/card-home.png" style="height:350px;">
        </section>
    </div>
    <div id="placar">
        <fieldset>
            <legend class="text" style="margin:0;text-align:center;">CARTAS</legend>
            <p style="padding-left:5px; padding-right:5px; background-color:#06448C; border-radius:5px; color:white;" id="placar-jogador">${cartasJogador.length}</p>
            <p style="font-size:15px;">VS</p>
            <p style="padding-left:5px; padding-right:5px; background-color:#D92414; border-radius:5px; color:white;" id="placar-maquina">${cartasMaquina.length}</p>
        </fieldset>
    </div>`;

    // Ativando botões de habilidades
    var btnSelecionado = document.getElementsByClassName('btn-habilidades');
    for (var i = 0; i < btnSelecionado.length; i++) {
        btnSelecionado[i].addEventListener("click", function (e) {
            document.getElementById('combater').disabled = false;

            // Habilidade do jogador
            habilidadeSelecionadaValue = this.value;

            // Habilidade da máquina
            switch (this.innerHTML) {
                case 'Ataque':
                    habilidadeSelecionadaName = "Ataque";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.ataque;
                    break
                case 'Saúde':
                    habilidadeSelecionadaName = "Saúde";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.saude;
                    break
                case 'Resistência':
                    habilidadeSelecionadaName = "Resistência";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.resistencia;
                    break
                case 'Recuperação':
                    habilidadeSelecionadaName = "Recuperação";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.recuperacao;
                    break
            }
        })
    }
}

function combater() {
    document.getElementsByClassName('text')[0].innerHTML = "";

    // Mostrando carta da máquina
    document.getElementById('cartaMaquina').innerHTML = `<p>Computador</p>
    <img src=${cartaMaquina.imagem} style="height:350px;">`

    // Exibindo resultado
    var divResultado = document.getElementById('habilidades');
    var resultadoText = "";
    if (habilidadeSelecionadaValue > habilidadeMaquinaValue) {
        resultadoText = "Você ganhou!";
        cartasJogador.push(cartaMaquina);
        var indice = cartasMaquina.indexOf(cartaMaquina);
        cartasMaquina.splice(indice, 1);
        document.getElementById('placar-jogador').innerHTML = cartasJogador.length;
        document.getElementById('placar-maquina').innerHTML = cartasMaquina.length;
    } else if (habilidadeSelecionadaValue < habilidadeMaquinaValue) {
        resultadoText = "Você perdeu!"
        cartasMaquina.push(cartaJogador);
        var indice = cartasJogador.indexOf(cartaJogador);
        cartasJogador.splice(indice, 1);
        document.getElementById('placar-jogador').innerHTML = cartasJogador.length;
        document.getElementById('placar-maquina').innerHTML = cartasMaquina.length;
    } else {
        resultadoText = "Empate!";
    }

    divResultado.innerHTML = `<div id="resultado">
        <p style="font-size: 20px;">${resultadoText}</p>
        <button disabled="disabled">${habilidadeSelecionadaName}</button>
        <div id="valores">
            <p style="font-size: 20px; color: #06448C;">${habilidadeSelecionadaValue}</p>
            vs
            <p style="font-size: 20px; color: #D92414;">${habilidadeMaquinaValue}</p>
        </div>
    </div>
    <button id="proxima-rodada" onclick="jogarNovamente()">JOGAR NOVAMENTE</button>`;
}

function jogarNovamente() {
    // Sorteando nova carta do jogador
    var indiceCartaMaquina = parseInt(Math.random()*cartasMaquina.length);
    cartaMaquina = cartasMaquina[indiceCartaMaquina];

    // Sorteando nova carta do jogador
    var indiceCartaJogador = parseInt(Math.random()*cartasJogador.length);
    cartaJogador = cartasJogador[indiceCartaJogador];

    // Escolhendo habilidade
    var main = document.getElementById('main');
    main.innerHTML = `<p class="text">Escolha uma característica:</p>
    <div id="game">
        <section id="cartaJogador">
            <p>Você</p>
            <img src=${cartaJogador.imagem} style="height:350px;">
        </section>
        <section id="habilidades">
            <button class="btn-habilidades" value="${cartaJogador.habilidades.ataque}">Ataque</button>
            <p>${cartaJogador.habilidades.ataque}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.saude}">Saúde</button>
            <p>${cartaJogador.habilidades.saude}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.resistencia}">Resistência</button>
            <p>${cartaJogador.habilidades.resistencia}</p>
            <button class="btn-habilidades" value="${cartaJogador.habilidades.recuperacao}">Recuperação</button>
            <p>${cartaJogador.habilidades.recuperacao}</p>
            <button id="combater" onclick="combater()" disabled>COMBATER</button>
        </section>
        <section id="cartaMaquina">
            <p>Computador</p>
            <img src="assets/card-home.png" style="height:350px;">
        </section>
    </div>
    <div id="placar">
        <fieldset>
            <legend class="text" style="margin:0;text-align:center;">CARTAS</legend>
            <p style="padding-left:5px; padding-right:5px; background-color:#06448C; border-radius:5px; color:white;" id="placar-jogador">${cartasJogador.length}</p>
            <p style="font-size:15px;">VS</p>
            <p style="padding-left:5px; padding-right:5px; background-color:#D92414; border-radius:5px; color:white;" id="placar-maquina">${cartasMaquina.length}</p>
        </fieldset>
    </div>`;

    // Ativando botões de habilidades
    var btnSelecionado = document.getElementsByClassName('btn-habilidades');
    for (var i = 0; i < btnSelecionado.length; i++) {
        btnSelecionado[i].addEventListener("click", function (e) {
            document.getElementById('combater').disabled = false;

            // Habilidade do jogador
            habilidadeSelecionadaValue = this.value;

            // Habilidade da máquina
            switch (this.innerHTML) {
                case 'Ataque':
                    habilidadeSelecionadaName = "Ataque";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.ataque;
                    break
                case 'Saúde':
                    habilidadeSelecionadaName = "Saúde";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.saude;
                    break
                case 'Resistência':
                    habilidadeSelecionadaName = "Resistência";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.resistencia;
                    break
                case 'Recuperação':
                    habilidadeSelecionadaName = "Recuperação";
                    habilidadeMaquinaValue = cartaMaquina.habilidades.recuperacao;
                    break
            }
        })
    }
}