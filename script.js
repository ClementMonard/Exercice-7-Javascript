//Déclaration de la fonction
function calculationShoes(){
  //Récupération de la valeur des id shoeSize et yearOfBirth
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regex = /^[0-9]+.?[0-9]+$/;
  //regex pour empêcher l'utilisation des caractères autre que les chiffres
  if((regex.test(shoeSize) == true) && (regex.test(yearOfBirth) == true)){
    var result = shoeSize * 2;
    result = result + 5;
    result = result * 50;
    result = result - yearOfBirth;
    result = result + 1766;
    alert(result);
  }
  else {
    alert('Ceci n\'est un pas un nombre valide.');
  }
}
