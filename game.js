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

document.querySelectorAll(".btn").forEach(button){
    button.addEventListener('click', (event){
        const userChosenColor = event.target.id
        userClickedPattern.push(userChosenColor)

        playSound(userChosenColor)

    }
}


function nextSequence() {
    userClickedPattern = [];
    level++
    document.querySelector("#level-title").textContent = `Level ${level}`

    const RandomButtonIndex = Math.floor(Math.random()*4);
    const RandomChosenColor = buttonColors[RandomButtonIndex]

    gamePattern.push(RandomChosenColor);
    document.getElementById(RandomChosenColor).classList.add(".pressed")
    setTimeout(() => {
        document.getElementById(randomChosenColor).classList.remove(".pressed");
    }, 100);
    playSound(randomChosenColor);

}

function playSound() {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play()

}

