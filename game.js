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

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener('click', (event) => {
        const userChosenColor = event.target.id
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor)
        checkAnswer(userClickedPattern.length)

    });
});


function nextSequence() {

    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;

    const RandomButtonIndex = Math.floor(Math.random()*4);
    const RandomChosenColor = buttonColors[RandomButtonIndex]

    gamePattern.push(RandomChosenColor);
    document.getElementById(RandomChosenColor).classList.add("pressed")
    setTimeout(() => {
        document.getElementById(RandomChosenColor).classList.remove("pressed");
    }, 100);
    playSound(RandomChosenColor);

}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function checkAnswer(level){
    if (gamePattern[level] == userClickedPattern[level]){
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            },1000);
        }

    } else {

        playSound('wrong');
        document.querySelector('body').classList.add('game-over')
        document.querySelector("#level-title").textContent = "Game Over, Click Any Button to Restart";

        setTimeout(() => {
            document.querySelector('body').classList.remove(game-over);
        },100);

        startOver()

    }
}

function startOver(){
    level = 0
    gamePattern = []
    userClickedPattern = []
    started = false
}