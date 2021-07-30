//creo un array di indirizzi email
var mailList = ["donald.duck@gmail.com", "mickey.mouse@hotmail.com", "goofy@yahoo.com", "scrooge.mcduck@aol.com"];

console.log(mailList);

//chiedo all'utente di inserire un indirizzo email
var userMail = prompt("Inserisci l'indirizzo e-mail");

userMail = userMail.toLowerCase();

console.log(userMail);

//controllo se l'indirizzo dell'utente è presente nella mia lista
var accessGranted = false;

for (var i = 0; i < mailList.length; i++) {
    if (userMail == mailList[i]) {
        accessGranted = true
    }
}

if (accessGranted == true) {
    document.getElementById("welcome").innerHTML = "Welcome back, " + userMail;
} else {
    alert("Access denied!");
}

//stampo un messaggio di benvenuto o produco un alert di accesso negato