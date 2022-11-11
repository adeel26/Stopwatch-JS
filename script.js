window.onload = function (){

    var seconds = 0;
    var tens = 00;

    var tensResult = document.getElementById("tens");
    var secondsResult = document.getElementById("seconds");

    var start = document.getElementById("btn-start");
    var stop = document.getElementById("btn-stop");
    var reset = document.getElementById("btn-reset");

    var interval;

    start.onclick = function ()
    {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stop.onclick = function()
    {
        clearInterval(interval);
    }

    reset.onclick = function()
    {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        tensResult.innerHTML = tens;
        secondsResult.innerHTML = seconds;
    }

    function startTimer()
    {
        tens++;

        if(tens <= 9)
        {
            tensResult.innerHTML = "0" + tens;
        }

        if(tens >9)
        {
            tensResult.innerHTML = tens;
        }

        if(tens > 99)
        {
            seconds++
            secondsResult.innerHTML = "0" + seconds;
            tens = 0;
            tensResult.innerHTML = "0" + 0;
        }

        if(seconds > 9)
        {
            secondsResult.innerHTML = seconds;
        }
    }
}