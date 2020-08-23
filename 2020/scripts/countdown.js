function countdown(deadline, countdown_element) { 
    let count = 1; 
              
    var x = setInterval(function countdown_do() { 
        console.log('Function Executed! ' + count); 
        count = count + 1; 
        var now = new Date().getTime(); 
        var t = deadline - now; 
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        countdown_element.innerHTML = days + " days "  
        + hours + " hours " + minutes + " minutes "; 
        if (t < 0) { 
            clearInterval(x); 
        }
        return countdown_do;
    }(), 60000); 
} /* note that the function inside is an IIFE so it executes once, before the setting the interval */