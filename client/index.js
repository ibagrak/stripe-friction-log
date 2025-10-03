// The max and min number of photos a customer can purchase
var MIN_PHOTOS = 0;
var MAX_PHOTOS = 10;

document.getElementsByClassName('quantity-input').disabled;

// var inputQuantity = function(e) {
//   console.log(e);
//    // Ensure customers only buy between 1 and 10 photos
//   if (e.target.value < MIN_PHOTOS) {
//     e.target.value = MIN_PHOTOS;
//   }
//   if (e.target.value > MAX_PHOTOS) {
//     e.target.value = MAX_PHOTOS;
//   }
// }

// for (const input of quantityInput) {
//   input.addEventListener('change', inputQuantity);
// }


/* Method for changing the product quantity when a customer clicks the increment / decrement buttons */
var btns = document.getElementsByClassName("increment-btn");
var updateQuantity = function (evt) {
  if (evt && evt.type === 'keypress' && evt.keyCode !== 13) {
    return;
  }

  cls = evt.target.className.split(" ")[1];

  var delta = evt && evt.target.id === ('add_' + cls) && 1 || -1;

  document.getElementById("subtract_" + cls).disabled = false; 
  document.getElementById("add_" + cls).disabled = false; 

  // Update number input with new value.
  document.getElementById("input_" + cls).value = parseInt(document.getElementById("input_" + cls).value) + delta;
  
  // Disable the button if the customers hits the max or min
  if (parseInt(document.getElementById("input_" + cls).value) <= MIN_PHOTOS) {
    document.getElementById("subtract_" + cls).disabled = true; 
    document.getElementById("input_" + cls).value = MIN_PHOTOS;
  }
  if (parseInt(document.getElementById("input_" + cls).value) >= MAX_PHOTOS) {
    document.getElementById("add_" + cls).disabled = true; 
    document.getElementById("input_" + cls).value = MAX_PHOTOS;
  }
};

for (const btn of btns) {
  btn.addEventListener('click', updateQuantity);
}
