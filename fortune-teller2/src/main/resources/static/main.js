function getFortune() {
    var firstNameField = document.getElementById('firstNameField').value;
    var lastNameField = document.getElementById('lastNameField').value;
    var ageField = document.getElementById('ageField').value;
    var retirementYears;
      if(ageField % 2 === 0) {
        retirementYears = "5";
      } else {
        retirementYears = "30";
      }
    var result = document.getElementById('result');
    var birthMonthField = document.getElementById('birthMonthField').value;
    var bankBalance = "$0";
      switch (birthMonthField) {
        case "1":
        case "2":
        case "3":  
          bankBalance = "$20,000";
          break;
        case "4":
        case "5":
        case "6": 
          bankBalance = "$1,500,000";
          break;
        case "7":
        case "8":
        case "9": 
          bankBalance = "$7,500,000";
          break; 
        case "10":
        case "11":
        case "12": 
          bankBalance = "$50,000";
          break;   
              }
   var favColorField = document.getElementById('favColorField').value;
    var modeOfTransportation = "";
    switch (favColorField){
      case "red":
        modeOfTransportation = "Lambourghini";
        break;
      case "orange":
        modeOfTransportation = "private jet";
        break;
      case "yellow":
        modeOfTransportation = "Honda Civic";
        break;
      case "green":
        modeOfTransportation = "Uber";
        break;
      case "blue":
        modeOfTransportation = "VW bus";
        break;
      case "indigo":
        modeOfTransportation = "segway";
        break;
      case "violet":
        modeOfTransportation = "skateboard";
        break;
    }
  var siblingNumberField = document.getElementById('siblingNumberField').value;
  var vacationHome = "";
   switch (siblingNumberField) {
        case "0":
        case "1":
          vacationHome = "Ozarks";
          break;
        case "2":
        case "3":
          vacationHome = "Laguna";
          break;
        case "4":
        case "5":
          vacationHome = "Fiji";          
       break; 
     default: vacationHome="Buckeye Lake";
   }
  
  result.textContent = firstNameField + " " + lastNameField + ", you will retire in " + retirementYears + " years with " + bankBalance + " in the bank. You will get around by " + modeOfTransportation + "." + " You will vacation in " + vacationHome + "."
}
//button
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getFortune, false);



function generateFortune(){
	var fortune= document.getElementById('fortune');
	fortune = firstName + " " + lastName;
}