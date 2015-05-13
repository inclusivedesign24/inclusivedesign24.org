(function flux() {
    // Expand/collapse session details
    $('.session_details').hide();
    $('.session_details').each(function (index) {
        var id = 'session_details_' + index;
        $(this).attr('id', id);
        var b = $('<button>Show details</button>');
        b.attr('aria-controls', id).attr('aria-expanded', 'false');
        b.bind('click', function () {
            if ($(this).attr('aria-expanded') == 'false') {
                $("#" + $(this).attr('aria-controls')).show();
                $(this).attr('aria-expanded', 'true');
                $(this).text('Hide details');
            } else {
                $("#" + $(this).attr('aria-controls')).hide();
                $(this).attr('aria-expanded', 'false');
                $(this).text('Show details');
            }
        });
        b.insertBefore($(this));
    });

    // Adjust sessions times to be local
    var now = new Date();
    var offset = now.getTimezoneOffset() / -60;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (offset != 0) {
        if (offset > 0) {
            offset = '+' + offset;
        }
        $('.time_offset').text(offset);
        $('#time_machine').removeClass('hidden');
    }

    $('.session').each(function () {
        var local = new Date(parseInt($(this).attr('data-time-gmt')));
        $(this).find('span.session_time_local').text(local.getHours() + ':' + pad(local.getMinutes(), 2));
        $(this).find('span.session_time_utc').text(local.getUTCHours() + ':' + pad(local.getUTCMinutes(), 2));
        if (local.getUTCDate() != local.getDate()) {
            $(this).find('span.session_day_local').text(local.getDate() + ' ' + months[local.getMonth()]).removeClass('hidden');
        }

        // FOR PRODUCTION, ALSO ADD A CHECK FOR THE ACTUAL DAY &&(local.getDate() == now.getDate())
        if ((local.getHours() == now.getHours()) && (local.getFullYear() == now.getFullYear()) && (local.getMonth() == now.getMonth()) && (local.getDate() == now.getDate())) {
            $(this).addClass('now');
            $(this).find('span.session_time').prepend('<span class="now">Now playing:</span>');
        }

    });

})();

// formatting utility
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}