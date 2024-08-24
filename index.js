
document.addEventListener("DOMContentLoaded", function() {
    var display = document.querySelector("input[name='display']");
    
    var buttons = document.querySelectorAll("input[type='button']");
    
    buttons.forEach(function(button) {
        
      button.addEventListener("click", function() {
        var value = button.value;
        
        switch (value) {
          case "AC":
            display.value = "";
            break;
          case "DE":
            display.value = display.value.slice(0, -1);
            break;
          case "=":
            try {
              display.value = eval(display.value);
            } catch (error) {
              display.value = "Error";
            }
            break;
          default:
            display.value += value;
            break;
        }
      });
    });
  });