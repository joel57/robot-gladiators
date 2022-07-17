// this creates a function named "fight".

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// you can also log muiltiple values at once like this
console.log(playerName, playerAttack, playerHealth);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  //alert players that they are starting the round
  window.alert("Welcom to Robot Gladiators!");

  //subtract the value of 'playerAttack' from he value of 'enemyHealth and use that result to update the value in the 'enemyHealth' varible.
 enemyHealth = enemyHealth - playerAttack;


  //log resalting message to the console so we know that it worked.
console.log ( playerName + " attacked " + enemyName + "." + " now has " + enemyHealth + " health remaining.")

// check enemy's health.
if(enemyHealth <= 0) {
  window.alert(enemyName + " has lost! ");
}
else {
  window.alert(enemyName + " still has " + enemyHealth + "health left.");
}

  //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' varible.
playerHealth = playerHealth - enemyAttack;


  //log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName +   "." + playerName + " now has " + playerHealth + " health remaining.");

  // check player's health.
  if (playerHealth <= 0) {
    window.alert(playerName + " has lost! ");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + "health left.");
  }
  
};

// execute function
fight();
