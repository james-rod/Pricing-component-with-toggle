const toggleButton = document.querySelector('input[type="checkbox"]');
const basicText = document.getElementById("basic");
const professionalText = document.getElementById("professional");
const masterText = document.getElementById("master");

toggleButton.addEventListener("change", () => {
  if (!toggleButton.checked) {
    basicText.innerHTML = "$199.99";
    professionalText.innerHTML = "$249.99";
    masterText.innerHTML = "$399.99";
    console.log("unchecked");
  } else {
    basicText.innerHTML = "$19.99";
    professionalText.innerHTML = "$24.99";
    masterText.innerHTML = "$39.99";
    console.log("checked");
  }
});
