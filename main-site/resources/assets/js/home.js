! function(e, t) {
    "use strict";

    function o(o, a, r, s, l) {
        function p() {
            var t, n, p, m;
            w = e.devicePixelRatio > 1, r = u(r), a.delay >= 0 && setTimeout(function() {
                d(!0)
            }, a.delay), (a.delay < 0 || a.combined) && (s.e = (t = a.throttle, n = function(e) {
                "resize" === e.type && (v = b = -1), d(e.all)
            }, m = 0, function(e, i) {
                function r() {
                    m = +new Date, n.call(o, e)
                }
                var s = +new Date - m;
                p && clearTimeout(p), s > t || !a.enableThrottle || i ? r() : p = setTimeout(r, t - s)
            }), s.a = function(e) {
                e = u(e), r.push.apply(r, e)
            }, s.g = function() {
                return r = i(r).filter(function() {
                    return !i(this).data(a.loadedName)
                })
            }, s.f = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var o = r.filter(function() {
                        return this === e[t]
                    });
                    o.length && d(!1, o)
                }
            }, d(), i(a.appendScroll).on("scroll." + l + " resize." + l, s.e))
        }

        function u(e) {
            for (var r = a.defaultImage, n = a.placeholder, s = a.imageBase, l = a.srcsetAttribute, p = a.loaderAttribute, u = a._f || {}, d = 0, m = (e = i(e).filter(function() {
                    var e = i(this),
                        o = c(this);
                    return !e.data(a.handledName) && (e.attr(a.attribute) || e.attr(l) || e.attr(p) || u[o] !== t)
                }).data("plugin_" + a.name, o)).length; d < m; d++) {
                var g = i(e[d]),
                    f = c(e[d]),
                    $ = g.attr(a.imageBaseAttribute) || s;
                f === S && $ && g.attr(l) && g.attr(l, h(g.attr(l), $)), u[f] === t || g.attr(p) || g.attr(p, u[f]), f === S && r && !g.attr(k) ? g.attr(k, r) : f === S || !n || g.css(x) && "none" !== g.css(x) || g.css(x, "url('" + n + "')")
            }
            return e
        }

        function d(t, n) {
            if (r.length) {
                for (var s = n || r, l = !1, p = a.imageBase || "", u = a.srcsetAttribute, d = a.handledName, h = 0; h < s.length; h++)
                    if (t || n || (A = s[h], void 0, void 0, void 0, void 0, void 0, j = A.getBoundingClientRect(), N = a.scrollDirection, E = a.threshold, O = (b >= 0 ? b : b = i(e).height()) + E > j.top && -E < j.bottom, T = (v >= 0 ? v : v = i(e).width()) + E > j.left && -E < j.right, "vertical" === N ? O : "horizontal" === N ? T : O && T)) {
                        var g = i(s[h]),
                            f = c(s[h]),
                            $ = g.attr(a.attribute),
                            w = g.attr(a.imageBaseAttribute) || p,
                            y = g.attr(a.loaderAttribute);
                        g.data(d) || a.visibleOnly && !g.is(":visible") || !(($ || g.attr(u)) && (f === S && (w + $ !== g.attr(k) || g.attr(u) !== g.attr(D)) || f !== S && w + $ !== g.css(x)) || y) || (l = !0, g.data(d, !0), m(g, f, w, y))
                    }
                var A, j, N, E, O, T;
                l && (r = i(r).filter(function() {
                    return !i(this).data(d)
                }))
            } else a.autoDestroy && o.destroy()
        }

        function m(e, t, o, r) {
            ++$;
            var n = function() {
                f("onError", e), g(), n = i.noop
            };
            f("beforeLoad", e);
            var s = a.attribute,
                l = a.srcsetAttribute,
                p = a.sizesAttribute,
                u = a.retinaAttribute,
                d = a.removeAttribute,
                m = a.loadedName,
                c = e.attr(u);
            if (r) {
                var h = function() {
                    d && e.removeAttr(a.loaderAttribute), e.data(m, !0), f(y, e), setTimeout(g, 1), h = i.noop
                };
                e.off(j).one(j, n).one(A, h), f(r, e, function(t) {
                    t ? (e.off(A), h()) : (e.off(j), n())
                }) || e.trigger(j)
            } else {
                var v = i(new Image);
                v.one(j, n).one(A, function() {
                    e.hide(), t === S ? e.attr(N, v.attr(N)).attr(D, v.attr(D)).attr(k, v.attr(k)) : e.css(x, "url('" + v.attr(k) + "')"), e[a.effect](a.effectTime), d && (e.removeAttr(s + " " + l + " " + u + " " + a.imageBaseAttribute), p !== N && e.removeAttr(p)), e.data(m, !0), f(y, e), v.remove(), g()
                });
                var b = (w && c ? c : e.attr(s)) || "";
                v.attr(N, e.attr(p)).attr(D, e.attr(l)).attr(k, b ? o + b : null), v.complete && v.trigger(A)
            }
        }

        function c(e) {
            return e.tagName.toLowerCase()
        }

        function h(e, t) {
            if (t) {
                var o = e.split(",");
                e = "";
                for (var a = 0, i = o.length; a < i; a++) e += t + o[a].trim() + (a !== i - 1 ? "," : "")
            }
            return e
        }

        function g() {
            --$, r.length || $ || f("onFinishedAll")
        }

        function f(e, t, i) {
            return !!(e = a[e]) && (e.apply(o, [].slice.call(arguments, 1)), !0)
        }
        var $ = 0,
            v = -1,
            b = -1,
            w = !1,
            y = "afterLoad",
            A = "load",
            j = "error",
            S = "img",
            k = "src",
            D = "srcset",
            N = "sizes",
            x = "background-image";
        "event" === a.bind || n ? p() : i(e).on(A + "." + l, p)
    }

    function a(a, n) {
        var s = this,
            l = i.extend({}, s.config, n),
            p = {},
            u = l.name + "-" + ++r;
        return s.config = function(e, o) {
            return o === t ? l[e] : (l[e] = o, s)
        }, s.addItems = function(e) {
            return p.a && p.a("string" === i.type(e) ? i(e) : e), s
        }, s.getItems = function() {
            return p.g ? p.g() : {}
        }, s.update = function(e) {
            return p.e && p.e({}, !e), s
        }, s.force = function(e) {
            return p.f && p.f("string" === i.type(e) ? i(e) : e), s
        }, s.loadAll = function() {
            return p.e && p.e({
                all: !0
            }, !0), s
        }, s.destroy = function() {
            return i(l.appendScroll).off("." + u, p.e), i(e).off("." + u), p = {}, t
        }, o(s, l, a, p, u), l.chainable ? a : s
    }
    var i = e.jQuery || e.Zepto,
        r = 0,
        n = !1;
    i.fn.Lazy = i.fn.lazy = function(e) {
        return new a(this, e)
    }, i.Lazy = i.lazy = function(e, o, r) {
        if (i.isFunction(o) && (r = o, o = []), i.isFunction(r)) {
            e = i.isArray(e) ? e : [e], o = i.isArray(o) ? o : [o];
            for (var n = a.prototype.config, s = n._f || (n._f = {}), l = 0, p = e.length; l < p; l++)(n[e[l]] === t || i.isFunction(n[e[l]])) && (n[e[l]] = r);
            for (var u = 0, d = o.length; u < d; u++) s[o[u]] = e[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: e,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: t,
        afterLoad: t,
        onError: t,
        onFinishedAll: t
    }, i(e).on("load", function() {
        n = !0
    })
}(window),
function(e) {
    function t(t, o, a, i) {
        e.ajax({
            url: o.attr("data-src"),
            type: i || "get",
            dataType: o.attr("data-type") || "html",
            success: function(e) {
                o.html(e), a(!0), t.config("removeAttribute") && o.removeAttr("data-src data-method data-type")
            },
            error: function() {
                a(!1)
            }
        })
    }
    e.lazy("ajax", function(e, o) {
        t(this, e, o, e.attr("data-method"))
    }), e.lazy("get", function(e, o) {
        t(this, e, o, "get")
    }), e.lazy("post", function(e, o) {
        t(this, e, o, "post")
    })
}(window.jQuery || window.Zepto),
function(e) {
    e.lazy(["av", "audio", "video"], ["audio", "video"], function(t, o) {
        var a = t[0].tagName.toLowerCase();
        if ("audio" === a || "video" === a) {
            var i = t.find("data-src"),
                r = t.find("data-track"),
                n = 0,
                s = function() {
                    ++n === i.length && o(!1)
                },
                l = function() {
                    var t = e(this),
                        o = t[0].tagName.toLowerCase(),
                        a = t.prop("attributes"),
                        i = e("data-src" === o ? "<source>" : "<track>");
                    "data-src" === o && i.one("error", s), e.each(a, function(e, t) {
                        i.attr(t.name, t.value)
                    }), t.replaceWith(i)
                };
            t.one("loadedmetadata", function() {
                o(!0)
            }).off("load error").attr("poster", t.attr("data-poster")), i.length ? i.each(l) : t.attr("data-src") ? (e.each(t.attr("data-src").split(","), function(o, a) {
                var i = a.split("|");
                t.append(e("<source>").one("error", s).attr({
                    src: i[0].trim(),
                    type: i[1].trim()
                }))
            }), this.config("removeAttribute") && t.removeAttr("data-src")) : o(!1), r.length && r.each(l)
        } else o(!1)
    })
}(window.jQuery || window.Zepto),
function(e) {
    e.lazy(["frame", "iframe"], "iframe", function(t, o) {
        var a = this;
        if ("iframe" === t[0].tagName.toLowerCase()) {
            var i = t.attr("data-error-detect");
            "true" !== i && "1" !== i ? (t.attr("src", t.attr("data-src")), a.config("removeAttribute") && t.removeAttr("data-src data-error-detect")) : e.ajax({
                url: t.attr("data-src"),
                dataType: "html",
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !0
                },
                success: function(e) {
                    t.html(e).attr("src", t.attr("data-src")), a.config("removeAttribute") && t.removeAttr("data-src data-error-detect")
                },
                error: function() {
                    o(!1)
                }
            })
        } else o(!1)
    })
}(window.jQuery || window.Zepto),
function(e) {
    e.lazy("noop", function() {}), e.lazy("noop-success", function(e, t) {
        t(!0)
    }), e.lazy("noop-error", function(e, t) {
        t(!1)
    })
}(window.jQuery || window.Zepto),
function(e) {
    function t(t, o, r) {
        var n = t.prop("attributes"),
            s = e("<" + o + ">");
        return e.each(n, function(e, t) {
            "srcset" !== t.name && t.name !== i || (t.value = a(t.value, r)), s.attr(t.name, t.value)
        }), t.replaceWith(s), s
    }

    function o(t, o, a) {
        var i = e("<img>").one("load", function() {
            a(!0)
        }).one("error", function() {
            a(!1)
        }).appendTo(t).attr("src", o);
        i.complete && i.load()
    }

    function a(e, t) {
        if (t) {
            var o = e.split(",");
            e = "";
            for (var a = 0, i = o.length; a < i; a++) e += t + o[a].trim() + (a !== i - 1 ? "," : "")
        }
        return e
    }
    var i = "data-src";
    e.lazy(["pic", "picture"], ["picture"], function(r, n) {
        if ("picture" === r[0].tagName.toLowerCase()) {
            var s = r.find(i),
                l = r.find("data-img"),
                p = this.config("imageBase");
            s.length ? (s.each(function() {
                t(e(this), "source", p)
            }), 1 === l.length ? ((l = t(l, "img", p)).on("load", function() {
                n(!0)
            }).on("error", function() {
                n(!1)
            }), l.attr("src", l.attr(i)), this.config("removeAttribute") && l.removeAttr(i)) : r.attr(i) ? (o(r, p + r.attr(i), n), this.config("removeAttribute") && r.removeAttr(i)) : n(!1)) : r.attr("data-srcset") ? (e("<source>").attr({
                media: r.attr("data-media"),
                sizes: r.attr("data-sizes"),
                type: r.attr("data-type"),
                srcset: a(r.attr("data-srcset"), p)
            }).appendTo(r), o(r, p + r.attr(i), n), this.config("removeAttribute") && r.removeAttr(i + " data-srcset data-media data-sizes data-type")) : n(!1)
        } else n(!1)
    })
}(window.jQuery || window.Zepto), (window.jQuery || window.Zepto).lazy(["js", "javascript", "script"], "script", function(e, t) {
    "script" == e[0].tagName.toLowerCase() ? (e.attr("src", e.attr("data-src")), this.config("removeAttribute") && e.removeAttr("data-src")) : t(!1)
}), (window.jQuery || window.Zepto).lazy("vimeo", function(e, t) {
    "iframe" === e[0].tagName.toLowerCase() ? (e.attr("src", "https://player.vimeo.com/video/" + e.attr("data-src")), this.config("removeAttribute") && e.removeAttr("data-src")) : t(!1)
}), (window.jQuery || window.Zepto).lazy(["yt", "youtube"], function(e, t) {
    "iframe" === e[0].tagName.toLowerCase() ? (e.attr("src", "https://www.youtube.com/embed/" + e.attr("data-src") + "?rel=0&amp;showinfo=0"), this.config("removeAttribute") && e.removeAttr("data-src")) : t(!1)
}), $("#loginpassword, #password").bind("cut copy paste", function(e) {
    e.preventDefault()
});
var SpaceFlag = 0,
    isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

function onlyNumbersandSpecialChar(e) {
    var t = (e = e || window.event).which ? e.which : e.keyCode;
    return (!(65 > t || t > 90) || !(97 > t || t > 123) || 32 == t || 8 == t || 37 == t || 39 == t) && (32 == t ? SpaceFlag += 1 : SpaceFlag = 0, !(SpaceFlag > 1) || (SpaceFlag = 1, !1))
}

function namevalidation() {
    var e = document.getElementById("username");
    return null == e.value || "" == e.value ? ($("#user").hide(), $("#firstletter").hide(), $("#space").hide(), $("#notnull").show(), $("#spaceError").hide(), !1) : " " == e.value.charAt(0) || "." == e.value.charAt(0) ? ($("#user").hide(), $("#notnull").hide(), $("#space").hide(), $("#firstletter").show(), $("#spaceError").hide(), !1) : e.value.indexOf(".") > -1 ? ($("#user").show(), $("#spaceError").hide(), !1) : /^[a-zA-Z ]*$/g.test(e.value) ? e.value.indexOf("  ") >= 0 ? ($("#notnull").hide(), $("#firstletter").hide(), $("#space").hide(), $("#user").hide(), $("#spaceError").show(), !1) : ($("#notnull").hide(), $("#spaceError").hide(), $("#firstletter").hide(), $("#space").hide(), $("#user").hide(), !0) : ($("#spaceError").hide(), $("#user").show(), $("#firstletter").hide(), $("#notnull").hide(), $("#space").hide(), !1)
}

/*** Profile Created Validation For Popup ***/
function profilecreatedforvalidation(){
	if($("#profilecreatedforpopup").val() == ""){
		$("#notnullprofilecreated").show();
		return false;
	} else {
		$("#notnullprofilecreated").hide();
		return true;
	}
}
$("#profilecreatedforpopup").change(function(e) {
	$("#notnullprofilecreated").hide();
	if($(this).val() == 2 || $(this).val() == 4){
    	$('#genderpopup').val('M');
    	$('#genderpopup').addClass('isdisabled');
    	$("#notnullgender").hide();
    } else if($(this).val() == 3 || $(this).val() == 5) {
    	$('#genderpopup').val('F');
    	$('#genderpopup').addClass('isdisabled');
    	$("#notnullgender").hide();
    }
    else
    {
    	$('#genderpopup').removeClass('isdisabled');
    }
});
/*** Mother Tougue Validation For Popup***/
function mothertonguevalidation(){
	if($("#mothertonguepopup").val() == ""){
		$("#notnullmothertongue").show();
		return false;
	} else {
		$("#notnullmothertongue").hide();
		return true;
	}
}

function religionvalidation(){
	if($("#religionpopup").val() == ""){
		$("#notnullreligion").show();
		return false;
	} else {
		$("#notnullreligion").hide();
		return true;
	}
}
$("#religionpopup").change(function(e) {
	$("#notnullreligion").hide();
});
function castevalidation(){
	if($("#castepopup").val() == ""){
		$("#notnullcaste").show();
		return false;
	} else {
		$("#notnullcaste").hide();
		return true;
	}
}
$("#castepopup").change(function(e) {
	$("#notnullcaste").hide();
});


$("#mothertonguepopup").change(function(e) {
	$("#notnullmothertongue").hide();
});
/*** Gender Validation For Popup ***/
function gendervalidation(){
	if($("#genderpopup").val() == ""){
		$("#notnullgender").show();
		return false;
	} else {
		$("#notnullgender").hide();
		return true;
	}
}
$("#genderpopup").change(function(e) {
	$("#notnullgender").hide();
});

function emailloginvalid() {
    return document.loginform.username.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? ($("#validemail").hide(), !0) : ($("#validemail").show(), !1)
}

function emailvalidation() {
    var e = document.getElementById("email");
    return e.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? ($("#emailid").hide(), $("#emptyemail").hide(), $("#emailidexist").hide(), !0) : "" == e.value ? ($("#emailid").hide(), $("#emptyemail").show(), $("#emailidexist").hide(), !1) : ($("#emptyemail").hide(), $("#emailid").show(), !1)
}

function passwordvalidation() {
    var e = document.getElementById("password").value.toString().length;
    return document.getElementById("password"), document.getElementById("exampleInputConfirmPassword"), !(8 > e || e > 15) || ($("#lengths").show(), !1)
}

function emailloginvalid1() {
    return document.loginform1.username1.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? ($("#verification1").hide(), !0) : ($("#verification1").show(), !1)
}

function passwordvalidation1() {
    var e = document.getElementById("password1").value.toString().length;
    return document.getElementById("password1"), document.getElementById("exampleInputConfirmPassword"), !(8 > e || e > 15) || ($("#lengths1").show(), !1)
}

function passwordloginvalid1() {
    $("#verification1").hide(), $("#delete1").hide()
}

function changecasteOptions() {}

function getcasteOptions(e, t) {}

function passwordloginvalid() {
    $("#verification").hide(), $("#delete").hide()
}

function myLoginTab() {
    if ($('#myHomeTabs a[href="#profile"]').tab("show"), !isMobile) {
        $("header").addClass("header-modal"), $(".bx-wrapper li").addClass("image-top");
        var e = $(".bx-viewport").outerHeight();
        $(".bx-viewport").css("height", e - 70)
    }
}

function myregisterTab() {
    if ($("#alreadyloggedin").hide(), $("#anotherUserLogged").hide(), $('#myHomeTabs a[href="#home"]').tab("show"), !isMobile) {
        $("header").addClass("header-modal"), $(".bx-wrapper li").addClass("image-top");
        var e = $(".bx-viewport").outerHeight();
        $(".bx-viewport").css("height", e - 70)
    }
}

function clickhowitworks() {
    $(".carousel").carousel(0)
}

function OpenForgetPassword() {
    document.getElementById("btnclose").click()
}
$("#loginform").submit(function(e) {
    e.preventDefault()
}), $("#forgetform").submit(function(e) {
    var t = this;
    e.preventDefault();
    var o = new FormData,
        a = $("#forgetusername").val();
    o.append("emailId", a), jQuery.ajax({
        url: "/loginAuth/email",
        data: o,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(o) {
            return marker = JSON.stringify(o), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" != json.status ? (e.preventDefault(), $("#forgetspan").show(), !1) : void t.submit()
        }
    })
}), $("#loginform").submit(function(e) {
    var t = this;
    if (0 != (emailvalidation(), emailloginvalid())) {
        passwordloginvalid(), e.preventDefault(), $("#spinner").show(), $("#overlay").show();
        var o = new FormData,
            a = $("#loginusername").val(),
            i = $("#loginpassword").val(),
            r = $(".rememberme").prop("checked");
        return o.append("email", a), o.append("password", i), o.append("rememberme", r), jQuery.ajax({
            url: "/loginAuth/user",
            data: o,
            dataType: "text",
            processData: !1,
            contentType: !1,
            type: "POST",
            success: function(o) {
                return "" == o ? (e.preventDefault(), $("#verification").show(), $("#spinner").hide(), $("#overlay").hide(), !1) : (marker = JSON.stringify(o), json = jQuery.parseJSON(marker), json = JSON.parse(json), void("delete" == json.status ? (e.preventDefault(), $("#delete").show(), $("#spinner").hide(), $("#overlay").hide()) : "anotheruserloggedin" == json.status ? (e.preventDefault(), $("#anotherUserLogged").show(), $("#spinner").hide(), $("#overlay").hide()) : "suspension" == json.status ? ($("#overlay").hide(), suspensionreason = json.suspensionreasonspan, $("#suspensionreasontd").text(suspensionreason), $("#btnclose").click(), $("#suspensionmodal").modal("show")) : t.submit()))
            }
        }), "FALIURE" != typeof auth && void($("#validemail").is(":visible") ? e.preventDefault() : $("#verification").is(":visible") && e.preventDefault())
    }
    e.preventDefault()
}), $("#loginform1").submit(function(e) {
    var t = this;
    if (0 != emailloginvalid1()) {
        passwordloginvalid1(), e.preventDefault(), $("#spinner").show(), $("#overlay").show();
        var o = new FormData,
            a = $("#loginusername1").val(),
            i = $("#loginpassword1").val(),
            r = $("#rememberme1").prop("checked");
        return o.append("email", a), o.append("password", i), o.append("rememberme", r), jQuery.ajax({
            url: "/loginAuth/user",
            data: o,
            dataType: "text",
            processData: !1,
            contentType: !1,
            type: "POST",
            success: function(o) {
                return "" == o ? (e.preventDefault(), $("#verification1").show(), $("#spinner").hide(), $("#overlay").hide(), !1) : (marker = JSON.stringify(o), json = jQuery.parseJSON(marker), json = JSON.parse(json), void("delete" == json.status ? (e.preventDefault(), $("#delete1").show(), $("#spinner").hide(), $("#overlay").hide()) : "anotheruserloggedin" == json.status ? (e.preventDefault(), $("#anotherUser").show(), $("#spinner").hide(), $("#overlay").hide()) : "suspension" == json.status ? ($("#overlay").hide(), suspensionreason = json.suspensionreasonspan, $("#suspensionreasontd").text(suspensionreason), $("#btnclose").click(), $("#suspensionmodal").modal("show")) : t.submit()))
            }
        }), "FALIURE" != typeof auth && void($("#verification1").is(":visible") ? e.preventDefault() : $("#verification1").is(":visible") && e.preventDefault())
    }
    e.preventDefault()
}), jQuery("input#username").bind("input propertychange", function() {}), jQuery("input#email").bind("input propertychange", function() {
    $("#emptyemail").hide(), $("#emailid").hide(), $("#emailidexist").hide()
}), $("#term").on("click", function() {
    document.getElementById("password"), document.getElementById("exampleInputConfirmPassword"), check = $("#term").prop("checked"), check && $("#agreeError").hide()
}), jQuery("input#password").bind("input propertychange", function() {
    document.getElementById("password");
    return $("#lengths").hide()
}), jQuery("input#exampleInputConfirmPassword").bind("input propertychange", function() {
    document.getElementById("password");
    return $("#lengths").hide()
}), changecasteOptions(), $(".trigger").click(function() {
    $("#emailid").hide(), $("#emptyemail").hide(), $("#emailidexist").hide(), $("#validemail").hide(), $("#firstletter").hide(), $("#verification").hide(), $("#passwordempty").hide(), $("agreeError").hide(), $("#lengths").hide(), $("#notnull").hide(), $("#spaceError").hide(), $("#space").hide(), $("#loginusername").val(""), $("#email").val(""), $("#password").val(""), $("#user").hide(), $("#username").val(""), $("#loginpassword").val(""), $("#forgetusername").val(""), $("#term").prop("checked", !1)
}), $("#myModal").on("shown.bs.modal", function() {
    $("#username").focus(), $("#loginusername").focus()
}), $("#myForgotPassword").on("shown.bs.modal", function() {
    $("#forgetusername").focus()
});
var flag = 0;

function myforget() {
    var e = $("#forgetform").serialize();
    att = $("#forgetform").attr("action"), $.get(att, e).done(function() {
        $("#buttonhideforget").click(), $("#btnCloseForgotPass").click()
    })
}
$("#mobileNumberpopup,#mobileNumber").on("keydown",function(e) {
   var t = e.which;
    if(t == 9){
    	e.preventDefault();
    	$('input[name="email"]').focus();
    	
}
    
    
 }),	
$("#username").keypress(function(e) {
    var t = e.which;
    return (t > 64 && t < 91 || t > 96 && t < 123 || 8 == t || 46 == t || 32 == t) && (32 == t ? 0 != $(this).val().length && (0 == flag && (flag = 1, !0)) : (flag = 0, !0))
}), $("#username").keyup(function(e) {
    var t = e.which;
   $("#notnull").hide(), 9 == t && $('select[name="profileForId"]').focus()
   
   
}), $("#btnCloseForgotPass").click(function() {
    $("#forgetspan").hide()
}), $("#btncontinue").click(function() {
    var e = new FormData,
        t = $("#forgetusername").val();
    t ? (e.append("emailId", t), jQuery.ajax({
        url: "/loginAuth/email",
        data: e,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(e) {
            return marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" != json.deletestatus ? "SUCCESS" != json.status ? $("#forgetspan").show() : myforget() : $("#forgetdelete").show()
        }
    })) : $("#forgetspan").show()
}), $("#mobileNumberpopup").keyup(function(e) {
	var t = e.which;
	"0" == $("#mobileNumberpopup").val().charAt("0") ? ($("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobile10digit").hide(), $("#popupmobilezero").show(), evt.preventDefault()) : ($("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobile10digit").hide(), $("#popupmobilezero").hide())
	
}), $("#mobileNumberpopup").keypress(function(e) {
    var t = e.which;
    if (!(t > 46 && t < 58 || 8 == t)) return !1;
    $("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobile10digit").hide(), $("#popupmobilezero").hide()
}), (width1 = $(window).width()) < 768 ? $("#registerfrom").val("Mobile Site") : $("#registerfrom").val("Desktop"), $("#registerbutton").click(function(e) {
    $(window).width() < 768 ? $("#registerfrom").val("Mobile Site") : $("#registerfrom").val("Desktop");
    document.getElementById("password");
    $("#passwordempty").hide(), $("#lengths").hide(), $("#agreeError").hide();
    var t = namevalidation(),
    	profilecreatedfor = profilecreatedforvalidation(),
    	mothertongue = mothertonguevalidation(),
    	religion=religionvalidation(),
    	caste=castevalidation(),
    	gender = gendervalidation(),
        o = emailvalidation(),
        a = passwordvalidation(),
        i = $("#countryIdpopup").val(),
        r = 0,
        n = $("#mobileNumberpopup").val().toString().length;
    if (0 == n) return $("#popupmobileempty").show(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobile10digit").hide(), $("#popupmobilezero").hide(), void e.preventDefault();
    if (0 != t && 0 != profilecreatedfor && 0 != mothertongue && 0 != gender && 0!=caste && 0!=religion)
        if (0 != o)
            if (0 != a)
                if (0 != a) {
                    if ("0" == $("#mobileNumberpopup").val().charAt("0")) return $("#popupmobilezero").show(), $("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobile10digit").hide(), void e.preventDefault();
                    if ("499" == i) {
                        if (10 != n) return $("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobileexists").hide(), $("#popupmobilezero").hide(), $("#popupmobile10digit").show(), void e.preventDefault();
                        10 == n && (r = 1)
                    } else {
                        if (n > 20) return $("#popupmobileempty").hide(), $("#popupmobileerror").show(), $("#popupmobileexists").hide(), $("#popupmobilezero").hide(), $("#popupmobile10digit").hide(), void e.preventDefault();
                        n <= 20 && n > 0 && (r = 1)
                    }
                    if (0 == $("#term").prop("checked")) return $("#agreeError").show(), void e.preventDefault();
                    if (1 == r) {
                        var s = new FormData;
                        s.append("mobilenumber", $("#mobileNumberpopup").val()), jQuery.ajax({
                            url: "getPhoneNumberStatusUser",
                            data: s,
                            dataType: "text",
                            processData: !1,
                            async: "false",
                            contentType: !1,
                            type: "POST",
                            success: function(e) {
                                if (marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "having" == json.mobilestatus) $("#popupmobileempty").hide(), $("#popupmobileerror").hide(), $("#popupmobilezero").hide(), $("#popupmobileexists").show(), $("#popupmobile10digit").hide(), $("#spinner").hide(), $("#overlay").hide();
                                else if ("no" == json.mobilestatus) {
                                    var t = new FormData,
                                        o = jQuery("input#email.emailclass").val();
                                    t.append("emailId", o), jQuery.ajax({
                                        url: "/loginAuth/email",
                                        data: t,
                                        dataType: "text",
                                        processData: !1,
                                        contentType: !1,
                                        type: "POST",
                                        success: function(e) {
                                            if ("900" != e) return marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" == json.status ? ($("#spinner").hide(), $("#overlay").hide(), $("#alreadyloggedin").hide(), $("#emailidexist").show(), window.emailidexist = !1, !1) : "anotheruserloggedin" == json.status ? ($("#spinner").hide(), $("#overlay").hide(), $("#emailidexist").hide(), $("#alreadyloggedin").show(), window.emailidexist = !1, !1) : ($("#emailidexist").hide(), $("#alreadyloggedin").hide(), window.emailidexist = !0, $("#spinner").show(), void $("#registerForm").submit());
                                            window.location.href = "/"
                                        }
                                    })
                                }
                            }
                        })
                    }
                    $("#spinner").show(), $("#overlay").show()
                } else e.preventDefault();
    else e.preventDefault();
    else e.preventDefault();
    else e.preventDefault()
}), $(window).load(function() {
    $(".se-pre-con").fadeOut("slow")
}), $("#password").on("cut copy paste", function(e) {
    return e.preventDefault(), !1
});

var width1, taborMob = 0;
$("#lbl-ser-err-del").hide(), $("#lbl-ser-err").hide(), $("#lbl-ser-err-other").hide(), $("#campaignotherprofile").hide(), (width1 = $(window).width()) < 768 ? $("#registerfrom1").val("Mobile Site") : $("#registerfrom1").val("Desktop"), $("#submitbutton").click(function() {
    $(window).width() < 768 ? $("#registerfrom1").val("Mobile Site") : $("#registerfrom1").val("Desktop");
	
	var e = $("#countryId").val(),
	    t = 0;
	"" == $("#usernamecampaign").val() && (1 == taborMob ? $("#usernamecampaign").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#usernamecampaign").closest('.form-group')
	}).tooltip("show") : $("#usernamecampaign").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#usernamecampaign").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var mothertongue = $("#mothertongue").val();
	"" == $("#mothertongue").val() && (1 == taborMob ? $("#mothertongue").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#mothertongue").closest('.form-group')
	}).tooltip("show") : $("#mothertongue").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#mothertongue").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var religion = $("#religion").val();
	"" == $("#religion").val() && (1 == taborMob ? $("#religion").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#religion").closest('.form-group')
	}).tooltip("show") : $("#religion").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#religion").closest('.form-group')
	}).tooltip("show"), t = 1);

var caste = $("#caste").val();
	"" == $("#caste").val() && (1 == taborMob ? $("#caste").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#caste").closest('.form-group')
	}).tooltip("show") : $("#caste").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#caste").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var gender = $("#gender").val();
	"" == $("#gender").val() && (1 == taborMob ? $("#gender").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#gender").closest('.form-group')
	}).tooltip("show") : $("#gender").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#gender").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var profilecreatedfor = $("#profilecreatedfor").val();
	"" == $("#profilecreatedfor").val() && (1 == taborMob ? $("#profilecreatedfor").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#profilecreatedfor").closest('.form-group')
	}).tooltip("show") : $("#profilecreatedfor").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#profilecreatedfor").closest('.form-group')
	}).tooltip("show"), t = 1);

    var o = passwordvalidation1();
    console.log("For Password : " + o), 1 == o && (1 == taborMob ? $("#passwordcampaign").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#passwordcampaign").closest('.form-group')
    }).tooltip("show") : $("#passwordcampaign").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#passwordcampaign").closest('.form-group')
    }).tooltip("show"), t = 1);
    var a = emailvalidation1();
    console.log("For Email : " + a), 1 == a && (1 == taborMob ? $("#emailcampaign").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#emailcampaign").closest('.form-group')
    }).tooltip("show") : $("#emailcampaign").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#emailcampaign").closest('.form-group')
    }).tooltip("show"), t = 1);
    var i = document.getElementById("mobileNumber").value.toString().length;
    console.log("For Mobile : " + i), "0" == $("#mobileNumber").val().charAt("0") && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), t = 1), "499" == e ? 10 != i && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), t = 1) : (0 == i || i > 20) && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), t = 1), 0 == $("#termcampaign").prop("checked") && (1 == taborMob ? $("#termcampaign").attr("title", "Please Agree to the Terms and Conditions").tooltip({
        placement: "right",
        trigger: "manual",
	    container: $("#termcampaign").closest('.checkbox')
    }).tooltip("show") : $("#termcampaign").attr("title", "Please Agree to the Terms and Conditions").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#termcampaign").closest('.checkbox')
    }).tooltip("show"), t = 1), 1 != t && checkingreplymessage()
}), $("#termcampaign").click(function() {
    0 != $("#termcampaign").prop("checked") && $("#termcampaign").tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
}), $("#emailcampaign").keyup(function(e) {
    mobiletabflag = 0, 1 == emailvalidation1() ? 1 == taborMob ? $(this).tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#emailcampaign").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#emailcampaign").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
});
var mobiletabflag = 0;
$("#mobileNumber").keypress(function(e) {
    console.log("Tab is clicked"), mobiletabflag = 1, $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
    var t = e.which;
    return t > 46 && t < 58 || 8 == t
}), $("#passwordcampaign").keypress(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
});

$("#profilecreatedfor").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
    if($(this).val() == 2 || $(this).val() == 4){
    	$('#gender').val('M');
    	$('#gender').addClass('isdisabled');
    	$('#gender').tooltip({
            placement: "bottom",
            trigger: "manual"
        }).tooltip("hide");
    } else if($(this).val() == 3 || $(this).val() == 5) {
    	$('#gender').val('F');
    	$('#gender').addClass('isdisabled');
    	$('#gender').tooltip({
            placement: "bottom",
            trigger: "manual"
        }).tooltip("hide");
    }
    else
    {
    	$('#gender').removeClass('isdisabled');
    }
});

$("#mothertongue").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});
$("#gender").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});

$("#religion").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});

$("#caste").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});

var usernameflag = 0;

function emailvalidation1() {
    var e = document.getElementById("emailcampaign").value;
    console.log("ev :" + e);
    var t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log("Subasri : " + t.test(document.getElementById("emailcampaign").value));
    var o = 1;
    return 1 == t.test(document.getElementById("emailcampaign").value) && (o = 0), o
}

function passwordvalidation1() {
    var e = document.getElementById("passwordcampaign").value.toString().length;
    return e < 8 || e > 15 ? 1 : 0
}

function checkingreplymessage() {
    var e = new FormData;
    e.append("mobilenumber", $("#mobileNumber").val()), jQuery.ajax({
        url: "getPhoneNumberStatusUser",
        data: e,
        dataType: "text",
        processData: !1,
        async: "false",
        contentType: !1,
        type: "POST",
        success: function(e) {
            if (marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "having" == json.mobilestatus) {
                console.log("Anto");
                $("#mobileNumber").attr("data-original-title", "Mobile Number Already Exists").tooltip("show")
            } else if ("no" == json.mobilestatus) {
                var t = $("#emailcampaign").val(),
                    o = new FormData;
                o.append("emailId", t), checkreply(o, "/loginAuth/email")
            }
        }
    })
}
$("#usernamecampaign").keypress(function(e) {
    mobiletabflag = 0, usernameflag = 1;
    var t = e.which;
    return $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide"), console.log(t), (t > 64 && t < 91 || t > 96 && t < 123 || 8 == t || 46 == t || 32 == t) && (32 == t ? 0 != $(this).val().length && (0 == flag && (flag = 1, !0)) : (flag = 0, !0))
}), $(document).on("keyup", "#usernamecampaign", function(e) {
    var t = e.which;
    console.log("Key Up : " + t), 9 == t && 1 == usernameflag && $('select[name="profileForId"]').focus()
});
var submitform = 0;

function checkreply(e, t) {
    jQuery.ajax({
        url: t,
        data: e,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(e) {
            if (marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" == json.status) {
                console.log("Anto");
                $("#emailcampaign").attr("data-original-title", "e-mail ID Already Exists").tooltip("show")
            } else "anotheruserloggedin" == json.status ? $("#campaignotherprofile").show() : 0 == submitform && (submitform += 1, $("#submitbuttondummy").click())
        }
    })
}

function emailvalidation2() {
    var e = document.getElementById("email1").value;
    console.log("ev : " + e);
    var t = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log("Subasri : " + t.test(document.getElementById("email1").value));
    var o = 1;
    return 1 == t.test(document.getElementById("email1").value) && (o = 0), console.log("emailflag " + o), o
}
$("#submitlogin").click(function() {
    console.log("suba");
    var e = 0,
        t = emailvalidation2();
    console.log("For Email login : " + t), 1 == t && (1 == taborMob ? $("#email1").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $("#email1").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show"), e = 1), "" == $("#loginpwd").val() && (console.log("loginpwd"), 1 == taborMob ? $("#loginpwd").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#loginpwd").closest('.form-group')
    }).tooltip("show") : $("#loginpwd").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#loginpwd").closest('.form-group')
    }).tooltip("show"), e = 1), 1 != e && $("#submitlogindummy").click()
}), $("#email1").keyup(function(e) {
    console.log("hai"), mobiletabflag = 0, 1 == emailvalidation2() ? 1 == taborMob ? $(this).tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("hide")
});
var suspensionreason = "";
$("#loginformcampaign").submit(function(e) {
    e.preventDefault()
}), $("#loginformcampaign").submit(function(e) {
    var t = this,
        o = new FormData;
    o.append("email", $("#email1").val()), o.append("password", $("#loginpwd").val()), jQuery.ajax({
        url: "/loginAuth/campaignuser",
        data: o,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(o) {
            marker = JSON.stringify(o), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" == json.status ? t.submit() : "delete" == json.status ? (e.preventDefault(), $("#lbl-ser-err-del").show(), $("#lbl-ser-err").hide(), $("#lbl-ser-err-other").hide()) : "suspension" == json.status ? (suspensionreason = json.suspensionreasonspan, $("#suspensionreasontd").text(suspensionreason), $("#suspensionmodal").modal("show")) : "failure" == json.status ? (e.preventDefault(), $("#lbl-ser-err-del").hide(), $("#lbl-ser-err").show(), $("#lbl-ser-err-other").hide()) : "anotheruserloggedin" == json.status && (e.preventDefault(), $("#lbl-ser-err-del").hide(), $("#lbl-ser-err").hide(), $("#lbl-ser-err-other").show())
        }
    })
}), $("#btnCloseForgotPass").click(function() {
    $("#forgetspan").hide()
});

jQuery("select#religion.profilereligion")
.change(
        function() {
        	var oMyForm = new FormData();
            oMyForm.append('profilemothertongueId', $('#mothertongue option:selected').val());
            oMyForm.append('profilereligionId', $('#religion option:selected').val());
         	 getcasteOptions('profilecaste', "#caste",
                  oMyForm, '/loginAuth/caste');
         	

        });
jQuery("select#mothertongue.profileMotherTongue").change(
function() {
	  	var oMyForm = new FormData();
        oMyForm.append('profilemothertongueId', $('#mothertongue option:selected').val());
        oMyForm.append('profilereligionId', $('#religion option:selected').val());
     	 getcasteOptions('profilecaste', "#caste",
              oMyForm, '/loginAuth/caste');
      
	
}); 

jQuery("select#religionpopup.profilereligion")
.change(
    function() {
    	var oMyForm = new FormData();
        oMyForm.append('profilemothertongueId', $('#mothertonguepopup option:selected').val());
        oMyForm.append('profilereligionId', $('#religionpopup option:selected').val());
     	 getcasteOptions('profilecaste', "#castepopup",
              oMyForm, '/loginAuth/caste');
     	

    });
jQuery("select#mothertonguepopup.profileMotherTongue").change(
function() {
  	var oMyForm = new FormData();
  	 oMyForm.append('profilemothertongueId', $('#mothertonguepopup option:selected').val());
     oMyForm.append('profilereligionId', $('#religionpopup option:selected').val());
  	 getcasteOptions('profilecaste', "#castepopup",
           oMyForm, '/loginAuth/caste');
  

}); 

function getcasteOptions(type, selector, oMyForm, controllerUrl)
{

oMyForm.append('type', type);
jQuery
        .ajax({
            url : controllerUrl,
            data : oMyForm,
            dataType : 'text',
            processData : false,
            contentType : false,
            type : 'POST',
            success : function(response) 
            {
            	if(response=="900")
            		{
            		 window.location.href="/";
            		}
            	else
            		{
                marker = JSON.stringify(response);
                json = jQuery.parseJSON(marker);
                json = JSON.parse(json);
                var options = json.options;
                var html = "";

                
                   var statoption = 0;
                   if(options!=null&&options.length>=1)
                	   {
                   /*  html += '<option style="color:white"></option>';  */
                	   html+= "<option value='' class='hide'>Select Caste</option>";
                	   }
                if (json.status=="SUCCESS") {                        
                    
                    

                        
                      
                
                    if(options.length>=1){
                    for ( var i in options) {
                    	
                   

                     html += "<option value="+ options[i].id+">"
                                + options[i].name + "</option>";
                  
                    		
                    }
                    
						/* jQuery(selector).html(html); */
						$(selector).empty().append(html);
						$(selector).trigger("chosen:updated");
                    
                  
                    }else{
                    	 for ( var i in options) {
                    		
 
                    	html += "<option value="+ options[i].id+">"
                        + options[i].name + "</option>";
                        
                        		}
                    	 
                    		$(selector).empty().append(html);
  							$(selector).trigger("chosen:updated");
                    }
        
                    
                    ////alert(html);
                  
                    //jQuery(selector).selectpicker("refresh");
                } else if(json.status=="FAILURE"){
                	  
                      	
                    	$(selector).empty().append("");
							$(selector).trigger("chosen:updated");
                      
                }
                
               
			        }
            	}
            });
        
        
    	
        }