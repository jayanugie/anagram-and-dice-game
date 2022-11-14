function diceGame(players, dice) {
    const rollDice = 1 + Math.floor(Math.random() * 6)
    let obj = {};
    let playerDice = [];
  
    for (let i = 1; i < players + 1; i++) {
        obj[`pemain ${i}`] = playerDice
    }
  
    console.log(obj) 
}
  
diceGame(3, 4)