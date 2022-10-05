const userName = prompt("Come ti chiami?")
console.log(userName); 
const userSurname = prompt("Qual è il tuo cognome?")
console.log(userSurname); 
const userColor = prompt("Qual è il tuo colore preferito?")
console.log(userColor); 
const currentYear = '22'
console.log(currentYear);
const newPassword = ('Ecco la tua nuova Password: ' + userName + userSurname + userColor + currentYear)
document.getElementById('password').innerHTML = newPassword