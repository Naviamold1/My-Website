function swap_color_and_font() {
    const Text = document.querySelector("#Text")
    Text.style.color = "red";
    Text.style.fontFamily = "courier ";
    Text.innerText = "Hello World";
    let newText = document.createTextNode("Bye World");
    Text.appendChild(newText)
  } 
