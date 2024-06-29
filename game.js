const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})

function nextSequence() {
    userClickedPattern = [];
    level++
    document.querySelector("#level-title").textContent = `Level ${level}`

    const RandomButtonIndex = Math.floor(Math.random()*4);
    const RandomChosenColor = buttonColors[RandomButtonIndex]

    gamePattern.push(RandomChosenColor);
    document.getElementById(RandomChosenColor).classList.add("pressed")
    setTimeout(() => {
        document.getElementById(randomChosenColor).classList.remove("pressed");
    }, 100);
    playSound(randomChosenColor);

}





