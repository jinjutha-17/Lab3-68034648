const input = document.querySelector("input");
const count = document.querySelector(".count");

input.addEventListener("input", function() {
    count.textContent = input.value.length;
});
