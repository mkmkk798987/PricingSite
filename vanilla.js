var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

let divTag = document.getElementsByTagName("div");


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;

  if(output.innerHTML > 60) {
    divTag[15].classList.add("text-bg-primary");
    divTag[14].classList.add("border-primary");
  }
  else {
    divTag[15].classList.remove("text-bg-primary");
    divTag[14].classList.remove("border-primary");
  }

  if(output.innerHTML < 60 && output.innerHTML > 15) {
    divTag[11].classList.add("text-bg-primary");
    divTag[10].classList.add("border-primary");
  }
  else {
    divTag[11].classList.remove("text-bg-primary");
    divTag[10].classList.remove("border-primary");
  }

  if(output.innerHTML < 15 ) {
    divTag[7].classList.add("text-bg-primary");
    divTag[6].classList.add("border-primary");
  }
  else {
    divTag[7].classList.remove("text-bg-primary");
    divTag[6].classList.remove("border-primary");
  }
  
}









