//Warning, complicated code ahead 

function playSound() {
    const audio = new Audio('./sounds/eggy.mp3');
    audio.play();
}

chrome.tabs.onRemoved.addListener(() => {
    playSound();
});
   