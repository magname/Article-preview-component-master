const shareButton = document.querySelector(".share");
const hiddenIcon = document.querySelector(".hidden-icon");
shareButton.addEventListener("click", () => {
    hiddenIcon.classList.toggle("hidden");
})