
// chiedo il nome 
var nome = prompt('dammi il tuo nome');
// chiedo il cognome 
var cognome = prompt('dammi il tuo cognome');
// chiedo il colore 
var colore = prompt('dammi il tuo colore preferito');
// genero password
var password = nome + cognome + colore + '21';
password = password.toLowerCase();
// output 
// alert('ecco la tua Password: ' + password);
document.getElementById('pass').innerHTML = 'ecco la tua Password: ' + password;
  
