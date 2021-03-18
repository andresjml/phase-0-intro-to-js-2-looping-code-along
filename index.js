// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0; i < gifts.length; i++){
        console.log(`wrapped ${gifts[i]} and added a bow!`);
            }
    return gifts;
}

wrapGifts(gifts);*/

const names = ['Lisa', 'Kaitlin', 'Jan'];
const surprise = ['surprise'];

function writeCards(names, surprise) {
    const message =[]
    for (let i = 0; i < names.length; i++) {
        
        message.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
    return message;
}

let counter = -1
function countDown(counter){
  while (counter >= 0){
    console.log(counter--)
  }
  
}