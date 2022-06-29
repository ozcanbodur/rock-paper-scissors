const optionsImage = ["Assets/scissors.png", "Assets/rock.png", "Assets/paper.png"]

let a, b;

const buttons = document.getElementById("options");
const newGameButton = document.getElementById("newGameBtn");

function random() {
    return Math.round(Math.random() * 2);
}

function getScore(){
    const x = Number(document.getElementById("score1").innerHTML);
    const y = Number(document.getElementById("score2").innerHTML);
    return { x, y }
}


function selectedRock() {
    const { x, y } = getScore();
    document.getElementById("result").innerHTML = "";
    document.getElementById("player-hand").src = "Assets/player-rock.png";
    b = document.getElementById("computer-hand").src = optionsImage[random()];
    if (b == "Assets/scissors.png") document.getElementById("score1").innerHTML = x + 1;
    else if (b == "Assets/paper.png") document.getElementById("score2").innerHTML = y + 1;

}

function selectedPaper() {
    const { x, y } = getScore();
    document.getElementById("result").innerHTML = "";
    document.getElementById("player-hand").src = "Assets/player-paper.png";
    b = document.getElementById("computer-hand").src = optionsImage[random()];
    if (b == "Assets/rock.png") document.getElementById("score1").innerHTML = x + 1; 
    else if (b == "Assets/scissors.png") document.getElementById("score2").innerHTML = y + 1;

}

function selectedScissors() {
    const { x, y } = getScore();
    document.getElementById("result").innerHTML = "";
    document.getElementById("player-hand").src = "Assets/player-scissors.png";
    b = document.getElementById("computer-hand").src = optionsImage[random()];
    if (b == "Assets/paper.png")document.getElementById("score1").innerHTML = x + 1;
    else if (b == "Assets/rock.png") document.getElementById("score2").innerHTML = y + 1;
    
}

function check() {
    const { x, y } = getScore();

    if (x == 3) {
        document.getElementById("result").innerHTML = "🎉 Player Winner 🎉";
        buttons.hidden = true;
        newGameButton.style.visibility = "visible";
    }
    else if (y == 3) {
        document.getElementById("result").innerHTML = "🎉 Computer Winner 🎉";
        buttons.hidden = true;
        newGameButton.style.visibility = "visible";
    }
}

function newgame() {
    const x = document.getElementById("score1").innerText = "0";
    const y = document.getElementById("score2").innerText = "0";
    document.getElementById("result").innerHTML = "";
    buttons.hidden = false;
    newGameButton.style.visibility = "hidden";
}

function process(type){
    document.getElementById("player-hand").classList.add('bounce');
    document.getElementById("computer-hand").classList.add('bounce');
    switch (type) {
        case 'rock':
            selectedRock();
            break;
        case 'paper':
            selectedPaper();
            
            break;
        case 'scissorrs':
            selectedScissors();
            break;
    }
    check();
    setTimeout(function(){
        document.getElementById("player-hand").classList.remove('bounce');
        document.getElementById("computer-hand").classList.remove('bounce');

    }, 1000);
}