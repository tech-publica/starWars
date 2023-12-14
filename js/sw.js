document.addEventListener('DOMContentLoaded', function () {
    // Get the audio element
    var starWarsThemeAudio = document.getElementById('starWarsTheme');

    // Get the crawl container
    var crawlContainer = document.querySelector('.crawl-container');
    var crawl = document.querySelector('.crawl');

    // Get the start button
    var startButton = document.getElementById('startButton');

    // Set a flag to ensure audio is played only once
    var audioPlayed = false;

    // Function to play the Star Wars theme
    function playStarWarsTheme() {
        if (!audioPlayed) {
            starWarsThemeAudio.play();
            audioPlayed = true;
        }
        
    }

    // Function to start the crawl animation
    function startCrawlAnimation() {
        crawl.classList.add('animate-crawl');
        crawl.style.visibility = 'visible';
    }


    document.body.addEventListener("click", function () {
        playStarWarsTheme();
        startCrawlAnimation();
    })

    // Pause the Star Wars theme when the crawl ends
    crawl.addEventListener('animationend', function (event) {
        crawl.style.visibility = 'hidden';
        if (event.animationName === 'crawl') {
            starWarsThemeAudio.pause();
            starWarsThemeAudio.currentTime = 0;
        }
    });
});
