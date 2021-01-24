// alert("chargemnet fichier js");
function getRadioValue(inputName) {
  // document.querySelector('input[name="genre"]:checked')
  var selector = 'input[name="' + inputName + '"]:checked';
  console.log("selecteur : ", selector);
  var checkedRadio = document.querySelector(selector);
  if (checkedRadio) {
    return checkedRadio.value;
  }
  return null;
}

function getCheckboxValues(inputName) {
  // document.querySelector('input[name="genre"]:checked')
  var values = []; // <=> new Array()
  var selector = 'input[name="' + inputName + '"]:checked';
  console.log("selecteur : ", selector);
  var inputs = document.querySelectorAll(selector);
  console.log("checked inputs : ", inputs);
  for (var i = 0; i < inputs.length; i++) {
    values.push(inputs[i].value);
  }
  return values;
}

function selectVilles() {
  var paysInput = document.getElementById("pays");
  var pays = paysInput.value;
  console.log("pays selectionné : ", pays);
  //   var selector = '[name="ville"] :not(option[parent="' + pays + '"])';
  var selector = '[name="ville"] option';
  console.log("selecteur : ", selector);
  var options = document.querySelectorAll(selector);
  for (var i = 0; i < options.length; i++) {
    console.log(
      "option ? ",
      options[i],
      options[i].getAttribute("data-pays"),
      options[i].dataset.pays
    );
    var displayValue = "none";
    if (options[i].dataset.pays == pays) {
      displayValue = "block";
    }
    options[i].style.display = displayValue;
  }
}
selectVilles();

function valider() {
  console.log("appele de fonction valider");
  var nomInput = document.getElementById("nom");
  console.log("nom : ", nomInput.value);
  var prenomInput = document.inscription.prenom;
  console.log("prenom : ", prenomInput.value);
  var naissanceInput = document.getElementById("naissance");
  console.log("Date de nasissance : ", naissanceInput.value);
  var paysInput = document.getElementById("pays");
  console.log("Pays : ", paysInput.value);
  var villeInput = document.getElementById("ville");
  console.log("Ville : ", villeInput.value);

  console.log("genre : ", getRadioValue("genre"));
  console.log("groupe : ", getRadioValue("groupe"));
  console.log("langues : ", getCheckboxValues("langues"));
  return false;
}
