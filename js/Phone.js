//step 1: Select and add Eventlistner in Plus Button

function updateQuantity(isDecrese) {
  let getAvalue = document.getElementById("input-value");
  let ValueInputField = parseInt(getAvalue.value);
  if (isDecrese === true) {
    ValueInputField++;
  } else {
    ValueInputField--;
  }
  getAvalue.value = ValueInputField;
  return ValueInputField;
}

function updatePhonePrice(newPhoneNumber) {
  let prePhoneNumber = newPhoneNumber * 1219;
  let getPhoneTotal = document.getElementById("phone-total");
  getPhoneTotal.innerText = prePhoneNumber;
}

document.getElementById("plus-btn").addEventListener("click", function () {
  let newPhoneNumber = updateQuantity(true);
  updatePhonePrice(newPhoneNumber);
  //calculate Total
  calculateSubTotal();
});

document.getElementById("minus-btn").addEventListener("click", function () {
  let newPhoneNumber = updateQuantity(false);
  updatePhonePrice(newPhoneNumber);
  calculateSubTotal();
});
