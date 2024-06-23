const display = document.getElementById(`display`);
// display.value = 0;
function btn(input) {
    // if (display.value === "0" && input !== ".") {
    //   display.value = input;
    // } else {
      display.value += input;
    // }
  }
function cler() {
    display.value = "0";
} function ans() {

    try {
        display.value = eval(display.value);

    }
    catch (error) {
        display.value=`error`;
    }
}