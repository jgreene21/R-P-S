// $('document').ready(function(){
// console.log('yo')
// console.log($)

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introduction = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introduction.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

const playMatch = () => {
  const choices = document.querySelectorAll(".choices button");
  const computerOptions = ["Rock", "Paper", "Scissors"];

  choices.forEach(choice => {
    choice.addEventListener("click", function() {
      const computerSelect = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerSelect];
      compare(this.innerHTML, computerChoice);
      });
   });

const updateScore = () => {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.innerHTML = pScore;
  computerScore.innerHTML = cScore;
};
   
const compare = (playerChoice, computerChoice) => {
  const winner =document.querySelector(".winner");
  if (playerChoice === computerChoice) {
    winner.innerHTML = "It's a Tie";
    return;
    }


  if (playerChoice === "rock") {
    if(computerChoice === "paper"){
      winner.innerHTML = "You Lose! Paper covers rock.";
      cScore++;
      updateScore();
      return;
      } else {
      winner.innerHTML = "You Win! Rock crushes scissors.";
      pScore++;
      updateScore();
      return;
      }
  } 

  if (playerChoice === "paper") {
    if(computerChoice === "scissors"){
      winner.innerHTML = "You lose. Scissors cut paper.";
      cScore++;
      updateScore();
      return;
      } else {
      winner.innerHTML = "You Win! Paper covers rock.";
      pScore++; 
      updateScore();
      return;
      } 
  } 

  if (playerChoice === "scissors") {
    if(computerChoice === "paper"){
      winner.innerHTML = "You Win! Scissors cut paper.";
      pScore++;
      updateScore();
      return;
      } else {
      winner.innerHTML = "You Lose! Rock crushes scissors.";
      cScore++;
      updateScore();
      return;
      }
   }
}
}; 
  startGame();
  playMatch();
  
};

  game();