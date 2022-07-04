// const MAX = 100;
// const MIN = 0;
// const ATTEMPTS_NUMBER = 10;

const settings = {
    max: 100,
    min: 0,
    attemptsNumber: 10
}
const RANDOM_NUMBER = getRandomNumber();
const PLAYER_NAME = getPlayerName();

console.log(settings.attemptsNumber);
console.log(settings['max']);

// const getRandomNumber = () => {}

function getRandomNumber(params) {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}

function getPlayerName() {
    const playerName = prompt('Как тебя зовут?', '');
    return playerName;
}

function game(min, max, attemptsNumber, randomNumber, playerName) {
    alert(`Привет! ${playerName}
    Я загадал число от ${min} до ${max}! 
    У тебя есть ${attemptsNumber} попыток.
    Погнали? `);
    let  answersNumber = [];
    for (let index = 1; index <= attemptsNumber; index++) {
        const playerAnswer =  prompt('Какое число я загадал?', '');
        if (playerAnswer > randomNumber){
            alert(`Мое число меньше! У тебя осталось ${attemptsNumber - index} попыток`)
            answersNumber.push(playerAnswer)
        } else if (playerAnswer < randomNumber) {
            alert(`Мое число больше! У тебя осталось ${attemptsNumber - index} попыток`)
            answersNumber.push(playerAnswer)
        } else {
            alert('Поздравляю! Ты разгадал мою тайну')
            return

        }
        
    }
    alert(`Упс! Ты не угадал! 
    Числа которые ты ввёл: ${answersNumber}
    А я загадал - ${randomNumber}`)
}

game(settings.min, settings.max, settings.attemptsNumber, RANDOM_NUMBER, PLAYER_NAME);