function buttonClick(e) {
    yourChoice = e.id;
    document.getElementById(e.id).style.border = '1px solid blue';
    comChoice = Math.floor(Math.random() * 3)
    const gameArray = ['rock', 'paper', 'scissor'];
    document.getElementById('comp-choice').style.display = 'block';
    document.getElementById(`${gameArray[comChoice]}`).style.border = '1px solid red';
    document.getElementById('choice').innerHTML = `<span style="color: blue">Your Choice: ${e.id}</span>`;
    document.getElementById('comp-choice').innerHTML = `<span style="color: red">Computer Choice: ${gameArray[comChoice]}</span>`;
    const res = decisionMaker(yourChoice, gameArray[comChoice]);
    document.getElementById('result').innerHTML = `<span>${res}</span>`;
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissor').disabled = true;
    document.getElementById('game').style.display = 'block';

}

function restart() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;
    document.getElementById('rock').style.border = 'none';
    document.getElementById('paper').style.border = 'none';
    document.getElementById('scissor').style.border = 'none';
    document.getElementById('comp-choice').style.display = 'none';
    document.getElementById('choice').innerHTML = `<span style="color: blue">Take your choice</span>`;
    document.getElementById('result').innerHTML = `<span style="color: red">Start Game</span>`;
}

function decisionMaker(yourChoice, comChoice) {
    let result = '';
    decisionArray = [{ 'rock': 'scissor' },
    { 'paper': 'rock' },
    { 'scissor': 'paper' }]

    const decision = decisionArray.find(item => Object.keys(item)[0] === yourChoice);
    const compWin = decisionArray.find(item => Object.keys(item)[0] === comChoice);
    if (yourChoice === comChoice) {
        result = 'Draw';
    } else if (comChoice === decision.yourChoice || (comChoice === Object.keys(compWin)[0] && compWin[comChoice] === yourChoice)) {
        if (comChoice === decision.yourChoice) {
            result = 'Computer Win';
        } else {
            result = 'Computer Win';
        }
    } else {
        result = 'You win'
    }
    return result;
}
