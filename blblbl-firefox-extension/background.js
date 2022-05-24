//Warning, complicated code ahead 

function playSound() {
    const audio = new Audio('./sounds/eggy.mp3');
    audio.play();
}

browser.tabs.onRemoved.addListener(() => {
    console.log("Does this even happen?");
    playSound();
});