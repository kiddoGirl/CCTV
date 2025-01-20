! function(o) {
    "use strict";
    o.fn.countdown = function(t, f) {
        var r = o(this),
            s = {
                date: null,
                format: null
            };

        function e() {
            var t = Date.parse(s.date) / 1e3,
                e = Math.floor(o.now() / 1e3);
            t <= e && (f.call(this), clearInterval(d));
            var n = t - e,
                i = Math.floor(n / 86400);
            n -= 60 * i * 60 * 24;
            var a = Math.floor(n / 3600);
            n -= 60 * a * 60;
            e = Math.floor(n / 60);
            n -= 60 * e, 1 == i ? r.find(".timeRefDays").text("day") : r.find(".timeRefDays").text("days"), 1 == a ? r.find(".timeRefHours").text("hour") : r.find(".timeRefHours").text("hours"), 1 == e ? r.find(".timeRefMinutes").text("minute") : r.find(".timeRefMinutes").text("minutes"), 1 == n ? r.find(".timeRefSeconds").text("second") : r.find(".timeRefSeconds").text("seconds"), "on" == s.format && (i = 2 <= String(i).length ? i : "0" + i, a = 2 <= String(a).length ? a : "0" + a, e = 2 <= String(e).length ? e : "0" + e, n = 2 <= String(n).length ? n : "0" + n), isNaN(t) ? (alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00"), clearInterval(d)) : (r.find(".days").text(i), r.find(".hours").text(a), r.find(".minutes").text(e), r.find(".seconds").text(n))
        }
        t && o.extend(s, t), e();
        var d = setInterval(e, 1e3)
    }
}(jQuery);