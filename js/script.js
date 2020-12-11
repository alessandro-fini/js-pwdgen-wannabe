var name,
surname,
favCol,
password;

// Chiedi all’utente il suo nome
name = prompt('Inserisci il tuo nome');
// /
// poi chiedi il suo cognome
surname = prompt('Inserisci il tuo cognome');
// /
// poi chiedi il suo colore preferito
favCol = prompt('Inserisci il tuo colore preferito');
// /
// password generata
password = name + surname + favCol + '20';
// /
document.getElementById('gen_pass').innerHTML += password;
