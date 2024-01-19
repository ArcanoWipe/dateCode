document.addEventListener('DOMContentLoaded', function() {
    var buttonNo = document.getElementById('no')
    buttonNo.addEventListener('click', function() {

        var randomNumber = getRandomInt(-100, 100);
        var randomNumber2 = getRandomInt(-200, 400);

        buttonNo.style.left = randomNumber + 'px';
        buttonNo.style.top = randomNumber2 + 'px';
        
    });

    var buttonYes = document.getElementById('yes')
    var HeartClass = document.getElementsByClassName('heart')[0];

    buttonYes.addEventListener('click', function() {
        HeartClass.style.display = 'block'
        setTimeout(function() {
            window.location.href = 'https://youtu.be/2Vv-BfVoq4g?t=19';
        }, 2000);
    });
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }