const input = document.querySelector("input");
const count = document.querySelector(".count");

input.addEventListener("keyup", function() {
    count.textContent = input.value.length;
});
