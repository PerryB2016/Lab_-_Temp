var convertedTemp;

function convertTemp(temp, unit) {

if (unit === "C"){

  convertedTemp = (temp - 32) *5/9;
}

else
{
  convertedTemp = (temp * 9/5) + 32;
}

window.alert(convertedTemp);
}

convertTemp(212, "C"); // > 100
convertTemp(32, "C");  // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(-40, "F"); // > -40
