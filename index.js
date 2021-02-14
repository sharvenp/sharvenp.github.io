function loadPage() {

    // Load Sharven Prasad Dhanasekar
    var name = "Sharven Prasad Dhanasekar";
    var acc = "";
    var i = 0;
    setTimeout(function myLoop() {
        setTimeout(function () {
            acc += name.charAt(i)
            document.getElementById('sharvenTitle').innerHTML = "<span style='color:green'>~$ </span>" + acc + "<span id='cursor'>_</span>";
            i = i + 1;
            if (i < name.length) myLoop(i)
        }, 33);
    }, 2000);
    
    blinkCursor();
}

function blinkCursor() {
    var cursor = true;
    var speed = 500;
    setInterval(() => {
        if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
        } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
        }
    }, speed);
}