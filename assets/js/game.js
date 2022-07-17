// this creates a function named "fight".

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log muiltiple values at once like this
console.log(playerName, playerAttack, playerHealth);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 121;

var fight = function() {
  //alert players that they are starting the round
  window.alert("Welcom to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

  //if player chooses to fight, then fight.
  if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variaible
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attack " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");
  }

  //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has lost!");
  } else {
    window.alert(enemyName + "still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack varible
  playerHealth = playerHealth - enemyAttack;
  console.llog(
    enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."); 

    //check players health
    if (playerHealth <= 0) {
      
    }
  

  
};

// execute function
fight();
