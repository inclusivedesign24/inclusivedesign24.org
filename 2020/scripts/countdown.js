function countdown(deadline, countdown_element) { 
    var x = setInterval(function() { 
        var now = new Date().getTime(); 
        var t = deadline - now; 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        countdown_element.innerHTML = days + "days "  
        + hours + "hours " + minutes + "minutes "; 
        if (t < 0) { 
            clearInterval(x); 
        } 
    }, 1000); 
}