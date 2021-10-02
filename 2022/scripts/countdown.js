function countdown(deadline, countdown_element) { 
    var x = setInterval(function countdown_do() {
        var now = new Date().getTime();
        var t = deadline - now;
        if (t > 0) {
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            countdown_element.innerHTML = days;
            if (days == "1") { countdown_element.innerHTML += " day "; } else { countdown_element.innerHTML += " days "; }
            countdown_element.innerHTML += hours;
            if (hours == "1") { countdown_element.innerHTML += " hour "; } else { countdown_element.innerHTML += " hours "; }
            countdown_element.innerHTML += minutes;
            if (minutes == "1") { countdown_element.innerHTML += " minute "; } else { countdown_element.innerHTML += " minutes "; }
            countdown_element.parentElement.classList.remove("hidden");
        } else {
            countdown_element.parentElement.remove();
            clearInterval(x);
        }
        return countdown_do;
    }(), 60000);
} /* note that the function inside is an IIFE so it executes once, before then setting the interval */