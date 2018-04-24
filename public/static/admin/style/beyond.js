/*Sets Themed Colors Based on Themes*/

var themeprimary = getThemeColorFromCss('themeprimary');
var themesecondary = getThemeColorFromCss('themesecondary');
var themethirdcolor = getThemeColorFromCss('themethirdcolor');
var themefourthcolor = getThemeColorFromCss('themefourthcolor');
var themefifthcolor = getThemeColorFromCss('themefifthcolor');

//Gets Theme Colors From Selected Skin To Use For Drawing Charts
function getThemeColorFromCss(style) {
    var $span = $("<span></span>").hide().appendTo("body");
    $span.addClass(style);
    var color = $span.css("color");
    $span.remove();
    return color;
}


/*Loading*/
$(window)
    .load(function () {
        setTimeout(function () {
            $('.loading-container')
                .addClass('loading-inactive');
        }, 1000);
    });


/*Account Area --> Setting Button*/
$('#btn-setting')
    .on('click', function (e) {
        $('.navbar-account')
            .toggleClass('setting-open');
    });

/*Toggle FullScreen*/
$('#fullscreen-toggler')
    .on('click', function (e) {
        var element = document.documentElement;
        if (!$('body')
            .hasClass("full-screen")) {

            $('body')
                .addClass("full-screen");
            $('#fullscreen-toggler')
                .addClass("active");
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }

        } else {

            $('body')
                .removeClass("full-screen");
            $('#fullscreen-toggler')
                .removeClass("active");

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }

        }
    });

/*Handles Popovers*/
var popovers = $('[data-toggle=popover]');
$.each(popovers, function () {
    $(this)
        .popover({
            html: true,
            template: '<div class="popover ' + $(this)
                .data("class") +
                '"><div class="arrow"></div><h3 class="popover-title ' +
                $(this)
                .data("titleclass") + '">Popover right</h3><div class="popover-content"></div></div>'
        });
});

var hoverpopovers = $('[data-toggle=popover-hover]');
$.each(hoverpopovers, function () {
    $(this)
        .popover({
            html: true,
            template: '<div class="popover ' + $(this)
                .data("class") +
                '"><div class="arrow"></div><h3 class="popover-title ' +
                $(this)
                .data("titleclass") + '">Popover right</h3><div class="popover-content"></div></div>',
            trigger: "hover"
        });
});


/*Handles ToolTips*/
$("[data-toggle=tooltip]")
    .tooltip({
        html: true
    });

InitiateSideMenu();
InitiateWidgets();

function InitiateSideMenu() {

    //Sidebar Toggler
    $(".sidebar-toggler").on('click', function () {
        $("#sidebar").toggleClass("hide");
        $(".sidebar-toggler").toggleClass("active");
        return false;
    });
    //End Sidebar Toggler

    //Sidebar Collapse
    var b = $("#sidebar").hasClass("menu-compact");
    $("#sidebar-collapse").on('click', function () {
        if (!$('#sidebar').is(':visible'))
            $("#sidebar").toggleClass("hide");
        $("#sidebar").toggleClass("menu-compact");
        $(".sidebar-collapse").toggleClass("active");
        b = $("#sidebar").hasClass("menu-compact");

        if ($(".sidebar-menu").closest("div").hasClass("slimScrollDiv")) {
            $(".sidebar-menu").slimScroll({ destroy: true });
            $(".sidebar-menu").attr('style', '');
        }
        if (b) {
            $(".open > .submenu")
                .removeClass("open");
        } else {
            if ($('.page-sidebar').hasClass('sidebar-fixed')) {
                var position = (readCookie("rtl-support") || location.pathname == "/index-rtl-fa.html" || location.pathname == "/index-rtl-ar.html") ? 'right' : 'left';
                $('.sidebar-menu').slimscroll({
                    height: 'auto',
                    position: position,
                    size: '3px',
                    color: themeprimary
                });
            }
        }
        //Slim Scroll Handle



    });
    //End Sidebar Collapse


    //Sidebar Menu Handle
    $(".sidebar-menu").on('click', function (e) {
        var menuLink = $(e.target).closest("a");
        if (!menuLink || menuLink.length == 0)
            return;
        if (!menuLink.hasClass("menu-dropdown")) {
            if (b && menuLink.get(0).parentNode.parentNode == this) {
                var menuText = menuLink.find(".menu-text").get(0);
                if (e.target != menuText && !$.contains(menuText, e.target)) {
                    return false;
                }
            }
            return;
        }
        var submenu = menuLink.next().get(0);
        if (!$(submenu).is(":visible")) {
            var c = $(submenu.parentNode).closest("ul");
            if (b && c.hasClass("sidebar-menu"))
                return;
            c.find("> .open > .submenu")
                .each(function () {
                    if (this != submenu && !$(this.parentNode).hasClass("active"))
                        $(this).slideUp(200).parent().removeClass("open");
                });
        }
        if (b && $(submenu.parentNode.parentNode).hasClass("sidebar-menu"))
            return false;
        $(submenu).slideToggle(200).parent().toggleClass("open");
        return false;
    });
    //End Sidebar Menu Handle
}

function InitiateWidgets() {
    $('.widget-buttons *[data-toggle="maximize"]').on("click", function (event) {
        event.preventDefault();
        var widget = $(this).parents(".widget").eq(0);
        var button = $(this).find("i").eq(0);
        var compress = "fa-compress";
        var expand = "fa-expand";
        if (widget.hasClass("maximized")) {
            if (button) {
                button.addClass(expand).removeClass(compress);
            }
            widget.removeClass("maximized");
            widget.find(".widget-body").css("height", "auto");
        } else {
            if (button) {
                button.addClass(compress).removeClass(expand);
            }
            widget.addClass("maximized");
            maximize(widget);
        }
    });

    $('.widget-buttons *[data-toggle="collapse"]').on("click", function (event) {
        event.preventDefault();
        var widget = $(this).parents(".widget").eq(0);
        var body = widget.find(".widget-body");
        var button = $(this).find("i");
        var down = "fa-plus";
        var up = "fa-minus";
        var slidedowninterval = 300;
        var slideupinterval = 200;
        if (widget.hasClass("collapsed")) {
            if (button) {
                button.addClass(up).removeClass(down);
            }
            widget.removeClass("collapsed");
            body.slideUp(0, function () {
                body.slideDown(slidedowninterval);
            });
        } else {
            if (button) {
                button.addClass(down)
                    .removeClass(up);
            }
            body.slideUp(slideupinterval, function () {
                widget.addClass("collapsed");
            });
        }
    });

    $('.widget-buttons *[data-toggle="dispose"]').on("click", function (event) {
        event.preventDefault();
        var toolbarLink = $(this);
        var widget = toolbarLink.parents(".widget").eq(0);
        var disposeinterval = 300;
        widget.hide(disposeinterval, function () {
            widget.remove();
        });
    });
}

// Fullscreen Widget
function maximize(widgetbox) {
    if (widgetbox) {
        var windowHeight = $(window).height();
        var headerHeight = widgetbox.find(".widget-header").height();
        widgetbox.find(".widget-body").height(windowHeight - headerHeight);
    }
}

/* Scroll To */
function scrollTo(el, offeset) {
    var pos = (el && el.size() > 0) ? el.offset().top : 0;
    jQuery('html,body').animate({ scrollTop: pos + (offeset ? offeset : 0) }, 'slow');
}

/*Show Notification*/
function Notify(message, position, timeout, theme, icon, closable) {
    toastr.options.positionClass = 'toast-' + position;
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = timeout;
    toastr.options.closeButton = closable;
    toastr.options.iconClass = icon + ' toast-' + theme;
    toastr['custom'](message);
}



//Switch Classes Function
function switchClasses(firstClass, secondClass) {

    var firstclasses = document.getElementsByClassName(firstClass);

    for (i = firstclasses.length - 1; i >= 0; i--) {
        if (!hasClass(firstclasses[i], 'dropdown-menu')) {
            addClass(firstclasses[i], firstClass + '-temp');
            removeClass(firstclasses[i], firstClass);
        }
    }

    var secondclasses = document.getElementsByClassName(secondClass);

    for (i = secondclasses.length - 1; i >= 0; i--) {
        if (!hasClass(secondclasses[i], 'dropdown-menu')) {
            addClass(secondclasses[i], firstClass);
            removeClass(secondclasses[i], secondClass);
        }
    }

    tempClasses = document.getElementsByClassName(firstClass + '-temp');

    for (i = tempClasses.length - 1; i >= 0; i--) {
        if (!hasClass(tempClasses[i], 'dropdown-menu')) {
            addClass(tempClasses[i], secondClass);
            removeClass(tempClasses[i], firstClass + '-temp');
        }
    }
}


//Add Classes Function
function addClass(elem, cls) {
    var oldCls = elem.className;
    if (oldCls) {
        oldCls += " ";
    }
    elem.className = oldCls + cls;
}

//Remove Classes Function
function removeClass(elem, cls) {
    var str = " " + elem.className + " ";
    elem.className = str.replace(" " + cls, "").replace(/^\s+/g, "").replace(/\s+$/g, "");
}

//Has Classes Function
function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return (str.indexOf(testCls) != -1);
}

function warning(info, url){
    if(window.confirm(info)){
        window.location.href = url;
    }
}
