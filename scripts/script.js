const playButton = document.getElementById("playButton");
const videoContainer = document.querySelector(".video-container");

playButton.addEventListener("click", () => {
    playButton.style.display = "none"; 
    videoContainer.style.display = "block"; 
});


