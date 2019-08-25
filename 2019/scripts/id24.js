// IE11 polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// formatting utility
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

(function flux() {
    // Expand/collapse session details
    var sessions = document.querySelectorAll(".session");
    sessions.forEach(function(session, index) {
        sessionDetails = session.querySelector('.session_details');
        sessionHeading = session.querySelector('h1, h2, h3, h4, h5, h6');
        sessionId = sessionHeading.getAttribute('id');
        sessionDetails.setAttribute("style", "display:none;");
        var sessionDetailsId = "session_details_" + sessionId;
        sessionDetails.setAttribute("id", sessionDetailsId);
        var b = document.createElement("button");
        b.setAttribute("aria-controls", sessionDetailsId);
        b.setAttribute("aria-expanded", "false");
        b.setAttribute("aria-describedby", sessionId);
        b.innerHTML = '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><use xlink:href="#icon-arrow-right"></use></svg> <span>Show details</span>';
        b.addEventListener("click", function() {
            if (this.getAttribute("aria-expanded") === "false") {
                document.getElementById(this.getAttribute("aria-controls")).setAttribute("style", "");
                this.setAttribute("aria-expanded", "true");
                this.querySelector("use").setAttribute("xlink:href", "#icon-arrow-down");
                this.querySelector("span").innerHTML = "Hide details";
            } else {
                document.getElementById(this.getAttribute("aria-controls")).setAttribute("style", "display:none");
                this.setAttribute("aria-expanded", "false");
                this.querySelector("use").setAttribute("xlink:href", "#icon-arrow-right");
                this.querySelector("span").innerHTML = "Show details";
            }
        }, true);
        sessionDetails.parentNode.insertBefore(b, sessionDetails);

    });

    // Adjust sessions times to be local
    var now = new Date();
    var local = new Date(parseInt(document.querySelector(".session").getAttribute("data-time-utc")));
    var offset = local.getTimezoneOffset() / -60;
    var lastdateshown = null;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (offset !== 0) {
        if (offset > 0) {
            offset = '+' + offset;
        }
        var time_offsets = document.querySelectorAll(".time_offset");
        time_offsets.forEach(function(time_offset) {
            time_offset.innerHTML = offset;
        });
    }

    sessions = document.querySelectorAll(".session");
    sessions.forEach(function (session) {
        var local = new Date(parseInt(session.getAttribute("data-time-utc")));
        session.querySelector("span.session_time_local").innerHTML = (local.getHours() == 0 ? "12" : local.getHours() > 12 ? local.getHours() - 12 : local.getHours()) + ':' + pad(local.getMinutes(), 2);
        session.querySelector("span.session_time_local_ampm").innerHTML = local.getHours() < 12 ? "AM" : "PM";
        session.querySelector("span.session_time_utc").innerHTML = local.getUTCHours() + ':' + pad(local.getUTCMinutes(), 2);
        session.querySelector("span.session_day_local").innerHTML = local.getDate() + ' ' + months[local.getMonth()];
        if ( (lastdateshown === null) || (local.getDate() !== lastdateshown) ) {
            session.querySelector("span.session_day_local").classList.add("datechange");
            lastdateshown = local.getDate();
        }

        // For debugging, remove the year/month/date check part
        if ((local.getHours() === now.getHours()) && (local.getFullYear() === now.getFullYear()) && (local.getMonth() === now.getMonth()) && (local.getDate() === now.getDate())) {
            session.classList.add("now");
            var span_now = document.createElement("span");
            span_now.classList.add("now");
            span_now.innerHTML = "Now playing:"
            session.querySelector("h2").insertBefore(span_now, session.querySelector("span.session_time"));
        }

    });

})();