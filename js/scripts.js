let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Matriz das condiçõs de vitória
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
    [0, 4, 8], [2, 4, 6]             // Diagonais
];


//contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o Evento de Click aos boxes

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (this.childNodes.length == 0) {
            let el = checkEl(player1, player2);
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if (player1 == player2) {
                player1++; 
                if (secondPlayer == 'ai-player') {
                    computerPlay(); 
                    player2++; 
                }
            } else {
                player2++;
            }
            checkWinCondition(); 
        }
    });
}

// evento de escolha de modo de jogo (IA ou Multiplayer)
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function () {

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);

    });
}



// vê quem vai jogar
function checkEl(player1, player2) {
    if (player1 == player2) {
        //x
        el = x;
    }
    else {
        //o
        el = o;
    }
    return el;
}


// Determina quem venceu
function checkWinCondition() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");


    //horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x
            console.log("Jogador 1 venceu");

            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x
            console.log("Jogador 1 venceu");

            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    //Vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    //Diagonal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o')
        }

    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x
            console.log("Jogador 1 venceu");
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            console.log("Jogador 2 venceu");
            declareWinner('o');
        }
    }
    // Deu velha

    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].children[0] != undefined) {
            counter++;
        }

        if (counter == 9) {
            console.log("Deu velha");
            declareWinner('Deu velha');
        }
    }
}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "Jogador 1 venceu";
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "Jogador 2 venceu";
    } else {
        msg = "Deu velha!";
    }

    //exibe mensagem

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //esconde mensagem
    setTimeout(function () {
        messageContainer.classList.add("hide");

    }, 3000);

    //zera as jogadas
    player1 = 0;
    player2 = 0;

    // remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}
// lógica da  jogada da AI
function computerPlay() {
    let cloneO = o.cloneNode(true);
    let move = null;

    // Math.random() gera um número entre 0 e 1.
    // 0.1 = Impossível e 0.9 = Muito Fácil
    
    if (Math.random() > 0.1) { 
        // Aqui ele tenta GANHAR ou BLOQUEAR (Lógica Inteligente)
        move = findBestMove('o') || findBestMove('x');
        
        // Se não tem nada urgente, ele tenta o CENTRO
        if (move === null && boxes[4].childNodes.length === 0) {
            move = 4;
        }
    }

    // Se o move ainda for NULL 
    if (move !== null && boxes[move].childNodes.length === 0) {
        boxes[move].appendChild(cloneO);
    } else {
        // JOGADA ALEATÓRIA 
        let done = false;
        let filled = [...boxes].filter(b => b.childNodes.length > 0).length;
        
        if (filled < 9) {
            while (!done) {
                let rand = Math.floor(Math.random() * boxes.length);
                if (boxes[rand].childNodes.length === 0) {
                    boxes[rand].appendChild(cloneO);
                    done = true;
                }
            }
        }
    }
}

// Analisa espaços para melhor jogada
function findBestMove(symbol) {
    for (let condition of winConditions) {
        let [a, b, c] = condition;
        let b1 = boxes[a].childNodes[0]?.className;
        let b2 = boxes[b].childNodes[0]?.className;
        let b3 = boxes[c].childNodes[0]?.className;

        if (b1 === symbol && b2 === symbol && b3 === undefined) return c;
        if (b1 === symbol && b3 === symbol && b2 === undefined) return b;
        if (b2 === symbol && b3 === symbol && b1 === undefined) return a;
    }
    return null;
}
