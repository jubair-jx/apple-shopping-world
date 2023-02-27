function getTheTotalAmountById(elementId) {
  let getPhoneTotal = document.getElementById(elementId);
  let getPhoneTotalStr = getPhoneTotal.innerText;
  let getPhoneTotalNumber = parseInt(getPhoneTotalStr);
  return getPhoneTotalNumber;
}

function getTextElementbyID(elementId, value) {
  let subTotalId = document.getElementById(elementId);
  subTotalId.innerText = value;
}

function calculateSubTotal() {
  let currentPhoneTotal = getTheTotalAmountById("phone-total");
  let currentPhoneCaseTotal = getTheTotalAmountById("case-price");

  let currentTotal = currentPhoneTotal + currentPhoneCaseTotal;
  getTextElementbyID("sub-total", currentTotal);
  //calculate tax
  let calculateTaxnumber = currentTotal * 0.1;
  let calculateTax = parseInt(calculateTaxnumber.toFixed(2));

  getTextElementbyID("tax-amount", calculateTax);

  //final amount
  let finalAmount = currentTotal + calculateTax;
  getTextElementbyID("final-amount", finalAmount);
}
