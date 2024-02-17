function addClass(elementId, className) {
    document.getElementById(elementId).classList.add(className);
}
function removeClass(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
}
function genarateAlfabet() {
    const randomaAlfabet = 'abcdefghijklmnopqrstuvwxyz';
    const alfabet = randomaAlfabet.split('')
    const roundRandomNumber  = Math.round(Math.random()*25);
    return alfabet[roundRandomNumber];
}

function addInnerText(elementId, text) {
    const alfabetBoar = document.getElementById(elementId)
    alfabetBoar.innerText = text;
}
function continueGame() {
    const alfabet = genarateAlfabet();
    addInnerText('alfabetBoard', alfabet)
    addClass(alfabet, 'bg-orange-400')
    
}
function play() {
    addClass('start', 'hidden');
    removeClass('play-now', 'hidden');
    continueGame()
    // addClass('score', 'hidden');
}
document.getElementById('play-now-button').addEventListener('click', function () {
    play();

})

function stringToInteger(elementId) {
    const getStringId = document.getElementById(elementId);
    const getStringText = getStringId.innerText;
    return parseInt(getStringText);
}
function keyBoardTypingCatch(event) {
    const alfabetBoar = document.getElementById('alfabetBoard');
    const alfa = alfabetBoar.innerText.toLowerCase();
    const keyType = event.key;
    if (alfa === keyType) { 
        const lifeUpdate = stringToInteger('lifeScore') + 1 ;
        addInnerText('lifeScore', lifeUpdate)
        removeClass(alfa, 'bg-orange-400')
        continueGame()
    }else{
        const lifeUpdate = stringToInteger('life') - 1 ;
        addInnerText('life', lifeUpdate)
        console.log(alfa);
        console.log(keyType);

    }
}
document.addEventListener('keyup',keyBoardTypingCatch)












// // document.getElementById('play-now-button').addEventListener('click', function(){
// //     document.body.style.backgroundColor = 'goldenrod';
// // })