window.addEventListener('load', init);
    var times = document.getElementById("time");
    var gameover = document.getElementById("gameover");
    var worddisplay = document.getElementById("words");
    var userdisplay = document.getElementById("userinput");
    var corr = document.getElementById("correct");
    var scores = document.getElementById("score");
    var score = 0;
    var time = 6;
    var isplay = true;
    var words = [
        'Literally',
        'ironic',
        'irregardless',
        'Dinterested',
        'enormity',
        'Lieutenant',
        'Unbashed',
        'thats what',
        'we say'
    ];
    function init() {
        showword(words);
        userdisplay.addEventListener('input', startgame);
        setInterval(countdown, 1000);
        setInterval(over, 50);
    }
    function startgame() {
        //console.log('ehl');
        if (startwords()) {
            isplay = true;
            time = 7;
            showword(words);
            userdisplay.value = '';
            score++;
        }
        if(score=== -1)
        {
            scores.innerHTML=0;
        }else{
            scores.innerHTML = score;
        }
        
    }
    function startwords() {
        if (userdisplay.value === worddisplay.innerHTML) {
            corr.innerHTML = "Correct";
            //console.log("startwords");
            return true;

        } else {
            userdisplay.innerHTML = '';
            return false;

        }
    }
    function showword(words) {
        var letter = Math.floor(Math.random() * words.length);
        worddisplay.innerHTML = words[letter];
    }
    function countdown() {
        if (time > 0) {

            time--;
        }
        else if (time === 0) {
            isplay = false;
        }
        times.innerHTML = time;
    }
    function over() {
        if (!isplay && time === 0) {
            gameover.innerHTML = "GAME OVER !!";
            score = -1;

        }

    }

