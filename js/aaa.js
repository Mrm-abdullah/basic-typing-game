function addClass(elementId, className) {
    document.getElementById(elementId).classList.add(className);
}
function removeClass(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
}

function play() {
    addClass('start', 'hidden');
    removeClass('play-now', 'hidden');
    addClass('score', 'hidden');
    continueGame()
}
document.getElementById('play-now-button').addEventListener('click', function () {
    play()
})

function genarateAlfabet() {
    const randomaAlfabet = 'abcdefghijklmnopqrstuvwxyz';
    const alfabet = randomaAlfabet.split('')
    const roundRandomNumber  = Math.round(Math.random()*25);
    return alfabet[roundRandomNumber];
}
function continueGame() {
    const alfabet = genarateAlfabet();
    const alfabetBoard = document.getElementById('alfabetBoard')
    alfabetBoard.innerText = alfabet;
    addClass(alfabet, 'bg-orange-400')
}
function keyBoardTypingCatch(event) {
    const alfabetBoard = document.getElementById('alfabetBoard');
    const alfa = alfabetBoard.innerText.toLowerCase();
    const keyType = event.key;

    if (alfa === keyType) {
        removeClass(alfa, 'bg-orange-400')
        continueGame()
    }else{
        console.log(alfa);
        console.log(keyType);

    }
}
document.addEventListener('keyup',keyBoardTypingCatch)












// document.getElementById('play-now-button').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'goldenrod';
// })