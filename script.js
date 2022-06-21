const rock = "камень";
const paper = "ножницы";
const scissors = "бумага";
let pointsPlayer = 0; 
let pointsComputer = 0;

function computerPlay(){ //комп
    let arr = [rock, paper, scissors];
    let result = arr[Math.floor(Math.random()* arr.length)];
    return result;

}
function singleRound(){ // один раунд
   let playerSelection = prompt("Камень, ножницы, бумага?").toLowerCase();
   let computerSelection = computerPlay();
   if(playerSelection==='камень' || playerSelection === 'бумага' || playerSelection === 'ножницы'){

        if(playerSelection === 'камень' && computerSelection==='камень'|| playerSelection === 'ножницы' && computerSelection==='ножницы' || playerSelection === 'бумага' && computerSelection==='бумага')
        {alert('Ничья!'); }
        else if(playerSelection === 'камень' && computerSelection==='ножницы' || playerSelection === 'ножницы' && computerSelection==='бумага' || playerSelection === 'бумага' && computerSelection==='камень' )
        {alert('Поздравляю, вы выиграли!'); pointsPlayer ++;}
        else{alert('Извините, вы проиграли!'); pointsComputer ++;}
   }else{
    alert('Вы ввели что-то не то, попробуйте еще раз'); singleRound();
   }
}
 function game(){ //Игра в 5 раундов началась
    for(let i = 0; i<5; i++){
        singleRound();
    }
    if(pointsComputer===pointsPlayer){
        alert('У вас с компьютером ничья!')
    }else if(pointsComputer>pointsPlayer){
        alert('Вы проиграли!!!!!')
    }else{alert("Вы выиграли!!! УРА!")}
 }
 game();