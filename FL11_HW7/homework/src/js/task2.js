// Your code goes here
var runGame = true;
var firstRun = true;
var step = 0;
var prize = 0;
var resume = false;
while(runGame){
	var text = firstRun ? 'Do you want to play a game?' : 'Do you want to play again?';
	if(resume || confirm(text)){
   firstRun = false;
   resume = true;
   var range = 8 + step * 4;
   var number = Math.round(Math.random() * range);
   var guessed = false;
   var attempt = 0;
   while(!guessed && attempt < 3){
     var maxPrize = (step + 1) * 100 / Math.pow(2, attempt);
     var input = parseInt(prompt('Choose a roulette pocker number from 0 to ' 
      + range + '\nAttempts left: ' + (3 - attempt) + '\nTotal prize: ' + prize + 
      '$\nPossible prize on current attempt: ' + maxPrize + '$', input));
     if(number === input){
       guessed = true;
       prize += maxPrize;
       if(!confirm('Congratulation, you won!   Your prize is: ' + prize + '$. Do you want to continue?')){
         alert('Thank you for your participation. Your prize is: ' + prize + '$.');
         prize = 0;
         step = -1;
         resume = false;
       }
     }
     ++attempt;
   }
   if(!guessed){
     alert('Thank you for your participation. Your prize is: ' + prize + '$');
     prize = 0;
     step = -1;
     resume = false;
   }
   ++step;
 } else if(firstRun) {
   alert('You did not become a billionaire, but can.');
   runGame = false;
 } else {
   runGame = false;
 }
}
