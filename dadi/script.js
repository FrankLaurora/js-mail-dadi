//chiedo all'utente se vuole giocare
var gameStart = prompt("What about a dice game?").toLowerCase();

var challengeAccepted = ["si", "yes", "ok", "y", "s", "k"];

for (var i = 0; i < challengeAccepted.length; i++) {
    if (gameStart == challengeAccepted[i]) {
        //genero un risultato casuale per l'utente e un risultato casuale per il computer
        var userDice = Math.floor(Math.random() * 6) + 1;
        
        var cpuDice =  Math.floor(Math.random() * 6) + 1;
        
        //comparo i due risultati
        //stampo i risultati e proclamo un vincitore
        if (userDice > cpuDice) {
            document.getElementById("result").innerHTML = "You Win!";
        } else if (userDice < cpuDice) {
            document.getElementById("result").innerHTML = "You Lose!";
        } else {
            document.getElementById("result").innerHTML = "It's a Draw.";
        }
        
        document.getElementById("scores").innerHTML = "You scored a " + userDice + ", Computer scored a " + cpuDice + ".";
        
    }
}
