function updatePhoneCase(isIncrese) {
  let inputValue = document.getElementById("input-values");
  let getTheValue = parseInt(inputValue.value);

  if (isIncrese === true) {
    getTheValue++;
  } else {
    getTheValue--;
  }
  inputValue.value = getTheValue;
  return getTheValue;
}

function updatePhoneCasePrice(getTheValue) {
  let prePhoneCasePrice = getTheValue * 59;
  let phoneCase = document.getElementById("case-price");
  phoneCase.innerText = prePhoneCasePrice;
}

document.getElementById("plus-case-btn").addEventListener("click", () => {
  let getTheValue = updatePhoneCase(true);
  updatePhoneCasePrice(getTheValue);
  calculateSubTotal();
});

document.getElementById("minus-case-btn").addEventListener("click", () => {
  let getTheValue = updatePhoneCase(false);
  updatePhoneCasePrice(getTheValue);
  calculateSubTotal();
});
