// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// Node Debug Mode
// node inspect index.js 
// cont for iterate
// repl for examining variables at loop procedure
// for step by step examine you have to add debugger; in loop

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards(names, event){
    let collector = []
    for (let i=0; i<names.length; i++){
        collector.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return collector;
}

function countDown(n){
    while (n >= 0){
        console.log(n);
        n--;
    }
}
