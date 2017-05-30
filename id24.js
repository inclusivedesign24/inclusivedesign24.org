// formatting utility
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

(function flux() {
    // Expand/collapse session details
    $('.session_details').hide();
    $('.session_details').each(function (index) {
        var id = 'session_details_' + (index+1);
        $(this).attr('id', id);
        var b = $('<button><i class="fa fa-chevron-right" aria-hidden="true"></i> <span>Show details</span></button>');
        b.attr('aria-controls', id).attr('aria-expanded', 'false');
        b.attr('aria-describedby', 'talk' + (index+1));
        b.bind('click', function () {
            if ($(this).attr('aria-expanded') === 'false') {
                $("#" + $(this).attr('aria-controls')).show();
                $(this).attr('aria-expanded', 'true');
                 $(this).find('i').attr('class','fa fa-chevron-down');
                $(this).find('span').text('Hide details');
            } else {
                $("#" + $(this).attr('aria-controls')).hide();
                $(this).attr('aria-expanded', 'false');
                $(this).find('i').attr('class','fa fa-chevron-right');
                $(this).find('span').text('Show details');
            }
        });
        b.insertBefore($(this));
    });

    // Adjust sessions times to be local
    var now = new Date();
    var offset = now.getTimezoneOffset() / -60;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (offset !== 0) {
        if (offset > 0) {
            offset = '+' + offset;
        }
        $('.time_offset').text(offset);
        $('#time_machine').removeClass('hidden');
    }

    $('.session').each(function () {
        var local = new Date(parseInt($(this).attr('data-time-gmt')));
        $(this).find('span.session_time_local').text((local.getHours() == 0 ? "12" : local.getHours() > 12 ? local.getHours() - 12 : local.getHours()) + ':' + pad(local.getMinutes(), 2));
        $(this).find('span.session_time_local_ampm').text(local.getHours() < 12 ? "AM" : "PM");
        $(this).find('span.session_time_utc').text(local.getUTCHours() + ':' + pad(local.getUTCMinutes(), 2));
        if (local.getUTCDate() !== local.getDate()) {
            $(this).find('span.session_day_local').text(local.getDate() + ' ' + months[local.getMonth()]).removeClass('hidden');
        }

        // FOR PRODUCTION, ALSO ADD A CHECK FOR THE ACTUAL DAY &&(local.getDate() == now.getDate())
        if ((local.getHours() === now.getHours()) && (local.getFullYear() === now.getFullYear()) && (local.getMonth() === now.getMonth()) && (local.getDate() === now.getDate())) {
            $(this).addClass('now');
            $(this).find('span.session_time').prepend('<span class="now">Now playing:</span>');
        }

    });

})();
