'use strict';

let num = Math.trunc(Math.random() * 20 + 1)
let score = 20;
let highScore = 0;

function updateMessage(message) {
    document.querySelector('.message').textContent = message;
}
function numberUpdate(number) {
    document.querySelector('.number').textContent = number;
}
function hightScoreUpdate(high_Score) {
    document.querySelector('.highscore').textContent = high_Score;
}
function changeBackgroundColour(colourValue) {
    document.querySelector('body').style.backgroundColor = colourValue;
}
function scoreUpdate(scoreValue) {
    document.querySelector('.score').textContent = scoreValue;
}
function guessUpdate(guessValue) {
    document.querySelector('.guess').value = guessValue;
}


document.querySelector('.check').addEventListener('click', function () {

    let gussNum = Number(document.querySelector('.guess').value);
    console.log(gussNum);

    if (!gussNum) {
        updateMessage("⚠️ Enter The Number !");
    } else if (num === gussNum) {
        if (highScore < score) {
            highScore = score;
            hightScoreUpdate(highScore);
        }
        updateMessage("🏆 Winner !!!");
        numberUpdate(num);
        changeBackgroundColour('#60b347');

    } else if (gussNum !== num) {
        if (score != 0) {
            updateMessage(gussNum > num ? "📈 Too high !" : "📉 Too low !");
            score = score - 1;
            scoreUpdate(score);
        } else {
            changeBackgroundColour('#FF0000');
            updateMessage("💥 You Loss The Game");
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {

    num = Math.trunc(Math.random() * 20 + 1);
    // console.log(num)
    score = 20;

    updateMessage("Start guessing...");
    numberUpdate('?');
    guessUpdate('');
    changeBackgroundColour('#000000');
    scoreUpdate(score);
    hightScoreUpdate(highScore);
})
