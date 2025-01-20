! function(a) {
    "use strict";
    a.fn.menumaker = function(s) {
        var n = a(this),
            e = a.extend({
                format: "dropdown",
                sticky: !1
            }, s);
        return this.each(function() {
            a(this).find(".navbar-toggler").on("click", function() {
                a(this).toggleClass("menu-opened");
                var s = a(this).next("ul");
                s.hasClass("open") ? s.slideToggle().removeClass("open") : (s.slideToggle().addClass("open"), "dropdown" === e.format && s.find("ul").show())
            }), n.find(".navbar-nav li ul").parent().addClass("has-sub"), n.find(".navbar-nav li ul li").parent().addClass("sub-menu");
            "multitoggle" === e.format ? (n.find(".has-sub").prepend('<span class="submenu-button"></span>'), n.find(".navbar-nav > li.has-sub > .submenu-button").on("click", function() {
                a(this).next(".sub-menu").slideToggle(), a(this).siblings("ul").addClass("open").slideToggle(), a(this).parents(".navbar-nav > li.has-sub").toggleClass("active").siblings(".has-sub").children(".sub-menu").slideUp().removeClass("open").parents("li").removeClass("active")
            }), n.find(".sub-menu > li.has-sub > .submenu-button").on("click", function() {
                a(this).next(".sub-menu").slideToggle(), a(this).siblings("ul").addClass("open").slideToggle(), a(this).parents(".sub-menu > li").toggleClass("active").siblings(".has-sub").children(".sub-menu").slideUp().removeClass("open").parents("li").removeClass("active"), a(this).siblings("ul").hasClass("open") && a(this).parents("li").eq(1).addClass("active")
            })) : n.addClass("dropdown"), !0 === e.sticky && n.css("position", "fixed");

            function s() {
                991 < a(window).width() && n.find("ul").show()
            }
            return s(), a(window).on("resize", s)
        })
    }, a(document).ready(function() {
        a(".navbar-default nav").menumaker({
            format: "multitoggle"
        });
        var s = window.location.pathname.split("/"),
            n = window.location.pathname,
            n = 0 < s[s.length - 1].length ? s[s.length - 1] : s[s.length - 2];
        a(".navbar-nav li").find('a[href="' + n + '"]').closest("li").addClass("active").parents().eq(1).addClass("current"), a(".navbar-nav li.has-sub ul li").find('a[href="' + n + '"]').parents().eq(4).addClass("current")
    }), a(".navbar-default .attr-nav").each(function() {
        a("li.search > a", this).on("click", function(s) {
            s.preventDefault(), a(".top-search").slideToggle()
        })
    }), a(".input-group-addon.close-search").on("click", function() {
        a(".top-search").slideUp()
    })
}(jQuery);