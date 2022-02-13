import React from 'react'
import '../../stylesheet/Login.css'
export default function Admindashboard() {
    var floatSubMenuTimeout, targetFloatMenu, handleSlimScroll = function() {
        "use strict";
        $.when($("[data-scrollbar=true]").each(function() {
            generateSlimScroll($(this))
        })).done(function() {
            $('[data-scrollbar="true"]').mouseover()
        })
    },
    handleSidebarMenu = function() {
        "use strict";
        var t = $(".sidebar").attr("data-disable-slide-animation") ? 0 : 250;
        $(".sidebar .nav > .has-sub > a").click(function() {
            var a = $(this).next(".sub-menu"),
            e = $(".sidebar .nav > li.has-sub > .sub-menu").not(a);
            0 === $(".page-sidebar-minified").length && ($(e).closest("li").addClass("closing"), $(e).slideUp(t, function() {
                $(e).closest("li").addClass("closed").removeClass("expand closing")
            }), $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"), $(a).slideToggle(t, function() {
                var e = $(this).closest("li");
                $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing")
            }))
        }), $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function() {
            if (0 === $(".page-sidebar-minified").length) {
                var a = $(this).next(".sub-menu");
                $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"), $(a).slideToggle(t, function() {
                    var e = $(this).closest("li");
                    $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing")
                })
            }
        })
    },
    handleMobileSidebarToggle = function() {
        var n = !1;
        $(".sidebar").bind("click touchstart", function(e) {
            0 !== $(e.target).closest(".sidebar").length ? n = !0 : (n = !1, e.stopPropagation())
        }), $(document).bind("click touchstart", function(e) {
            0 === $(e.target).closest(".sidebar").length && (n = !1), 0 !== $(e.target).closest("#float-sub-menu").length && (n = !0), e.isPropagationStopped() || !0 === n || ($("#page-container").hasClass("page-sidebar-toggled") && (n = !0, $("#page-container").removeClass("page-sidebar-toggled")), $(window).width() <= 767 && $("#page-container").hasClass("page-right-sidebar-toggled") && (n = !0, $("#page-container").removeClass("page-right-sidebar-toggled")))
        }), $("[data-click=right-sidebar-toggled]").click(function(e) {
            e.stopPropagation();
            var a = "#page-container",
            t = "page-right-sidebar-collapsed";
            t = $(window).width() < 979 ? "page-right-sidebar-toggled" : t, $(a).hasClass(t) ? $(a).removeClass(t) : !0 !== n ? $(a).addClass(t) : n = !1, $(window).width() < 480 && $("#page-container").removeClass("page-sidebar-toggled"), $(window).trigger("resize")
        }), $("[data-click=sidebar-toggled]").click(function(e) {
            e.stopPropagation();
            var a = "page-sidebar-toggled",
            t = "#page-container";
            $(t).hasClass(a) ? $(t).removeClass(a) : !0 !== n ? $(t).addClass(a) : n = !1, $(window).width() < 480 && $("#page-container").removeClass("page-right-sidebar-toggled")
        })
    },
    handleSidebarMinify = function() {
        $(document).on("click", "[data-click=sidebar-minify]", function(e) {
            e.preventDefault();
            var a = "page-sidebar-minified",
            t = "#page-container";
            $(t).hasClass(a) ? $(t).removeClass(a) : ($(t).addClass(a), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ($('#sidebar [data-scrollbar="true"]').css("margin-top", "0"), $('#sidebar [data-scrollbar="true"]').css("overflow-x", "scroll"))), $(window).trigger("resize")
        })
    },
    handleLocalStorage = function() {
        "use strict";
        try {
            if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
                var e = window.location.href;
                e = (e = e.split("?"))[0];
                var a = localStorage.getItem(e);
                if (a) {
                    a = JSON.parse(a);
                    var t = 0;
                    $.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function() {
                        var e = a[t],
                        o = $(this);
                        e && $.each(e, function(e, a) {
                            var t = $('[data-sortable-id="' + a.id + '"]').not('[data-init="true"]');
                            if (0 !== $(t).length) {
                                var n = $(t).clone();
                                $(t).remove(), $(o).append(n), $('[data-sortable-id="' + a.id + '"]').attr("data-init", "true")
                            }
                        }), t++
                    })).done(function() {
                        window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))
                    })
                }
            } else alert("Your browser is not supported with the local storage")
        } catch (e) {
            console.log(e)
        }
    },
    handleClearSidebarSelection = function() {
        $(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")
    },
    handlePageScrollClass = function() {
        $(window).on("scroll", function() {
            handleCheckScrollClass()
        }), handleCheckScrollClass()
    },
    handleMouseoverFloatSubMenu = function(e) {
        clearTimeout(floatSubMenuTimeout)
    },
    handleMouseoutFloatSubMenu = function(e) {
        floatSubMenuTimeout = setTimeout(function() {
            $("#float-sub-menu").remove()
        }, 150)
    },
    handleSidebarMinifyFloatMenu = function() {
        $(document).on("click", "#float-sub-menu li.has-sub > a", function(e) {
            var a = $(this).next(".sub-menu"),
            t = $(a).closest("li"),
            r = !1,
            d = !1;
            $(a).is(":visible") ? ($(t).addClass("closing"), r = !0) : ($(t).addClass("expanding"), d = !0), $(a).slideToggle({
                duration: 250,
                progress: function() {
                    var e = $("#float-sub-menu"),
                    a = $(e).height(),
                    t = $(e).offset(),
                    n = $(e).attr("data-offset-top"),
                    o = $(e).attr("data-menu-offset-top"),
                    i = t.top - $(window).scrollTop(),
                    s = $(window).height();
                    if (r && n < i && (i = n < i ? n : i, $("#float-sub-menu").css({
                        top: i + "px",
                        bottom: "auto"
                    }), $("#float-sub-menu-arrow").css({
                        top: "20px",
                        bottom: "auto"
                    }), $("#float-sub-menu-line").css({
                        top: "20px",
                        bottom: "auto"
                    })), d && s - i < a) {
                        var l = s - o - 22;
                        $("#float-sub-menu").css({
                            top: "auto",
                            bottom: 0
                        }), $("#float-sub-menu-arrow").css({
                            top: "auto",
                            bottom: l + "px"
                        }), $("#float-sub-menu-line").css({
                            top: "20px",
                            bottom: l + "px"
                        })
                    }
                },
                complete: function() {
                    $(a).is(":visible") ? $(t).addClass("expand") : $(t).addClass("closed"), $(t).removeClass("closing expanding")
                }
            })
        }), $(".sidebar .nav > li.has-sub > a").hover(function() {
            if ($("#page-container").hasClass("page-sidebar-minified")) {
                clearTimeout(floatSubMenuTimeout);
                var e = $(this).closest("li").find(".sub-menu").first();
                if (targetFloatMenu == this && 0 !== $("#float-sub-menu").length) return;
                targetFloatMenu = this;
                var a = $(e).html();
                if (a) {
                    var t = $("#sidebar").offset(),
                    n = $("#page-container").hasClass("page-with-right-sidebar") ? $(window).width() - t.left : t.left + 60,
                    o = $(e).height(),
                    i = $(this).offset().top - $(window).scrollTop(),
                    s = $("#page-container").hasClass("page-with-right-sidebar") ? "auto" : n,
                    l = $("#page-container").hasClass("page-with-right-sidebar") ? n : "auto",
                    r = $(window).height();
                    if (0 === $("#float-sub-menu").length ? (a = '<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="' + i + '" data-menu-offset-top="' + i + '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">\t<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>\t<div class="float-sub-menu-line" id="float-sub-menu-line"></div>\t<ul class="float-sub-menu">' + a + "</ul></div>", $("#page-container").append(a)) : ($("#float-sub-menu").attr("data-offset-top", i), $("#float-sub-menu").attr("data-menu-offset-top", i), $(".float-sub-menu").html(a)), o < r - i) $("#float-sub-menu").css({
                        top: i,
                        left: s,
                        bottom: "auto",
                        right: l
                    }), $("#float-sub-menu-arrow").css({
                        top: "20px",
                        bottom: "auto"
                    }), $("#float-sub-menu-line").css({
                        top: "20px",
                        bottom: "auto"
                    });
                    else {
                        $("#float-sub-menu").css({
                            bottom: 0,
                            top: "auto",
                            left: s,
                            right: l
                        });
                        var d = r - i - 21;
                        $("#float-sub-menu-arrow").css({
                            top: "auto",
                            bottom: d + "px"
                        }), $("#float-sub-menu-line").css({
                            top: "20px",
                            bottom: d + "px"
                        })
                    }
                } else $("#float-sub-menu").remove(), targetFloatMenu = ""
            }
        }, function() {
            $("#page-container").hasClass("page-sidebar-minified") && (floatSubMenuTimeout = setTimeout(function() {
                $("#float-sub-menu").remove(), targetFloatMenu = ""
            }, 250))
        })
    },
    CLEAR_OPTION = "",
    handleSetPageOption = function(e) {
        e.pageContentFullHeight && $("#page-container").addClass("page-content-full-height"), e.pageSidebarLight && $("#page-container").addClass("page-with-light-sidebar"), e.pageSidebarRight && $("#page-container").addClass("page-with-right-sidebar"), e.pageSidebarWide && $("#page-container").addClass("page-with-wide-sidebar"), e.pageSidebarMinified && $("#page-container").addClass("page-sidebar-minified"), e.pageSidebarTransparent && $("#sidebar").addClass("sidebar-transparent"), e.pageContentFullWidth && $("#content").addClass("content-full-width"), e.pageContentInverseMode && $("#content").addClass("content-inverse-mode"), e.pageBoxedLayout && $("body").addClass("boxed-layout"), e.clearOptionOnLeave && (CLEAR_OPTION = e)
    },
    handleClearPageOption = function(e) {
        e.pageContentFullHeight && $("#page-container").removeClass("page-content-full-height"), e.pageSidebarLight && $("#page-container").removeClass("page-with-light-sidebar"), e.pageSidebarRight && $("#page-container").removeClass("page-with-right-sidebar"), e.pageSidebarWide && $("#page-container").removeClass("page-with-wide-sidebar"), e.pageSidebarMinified && $("#page-container").removeClass("page-sidebar-minified"), e.pageSidebarTransparent && $("#sidebar").removeClass("sidebar-transparent"), e.pageContentFullWidth && $("#content").removeClass("content-full-width"), e.pageContentInverseMode && $("#content").removeClass("content-inverse-mode"), e.pageBoxedLayout && $("body").removeClass("boxed-layout")
    },
    App = function() {
        "use strict";
        var a;
        return {
            init: function(e) {
                e && (a = e), this.initLocalStorage(), this.initSidebar(), this.initTopMenu(), this.initComponent(), this.initThemePanel(), this.initPageLoad(), $(window).trigger("load"), a && a.ajaxMode && this.initAjax()
            },
            initSidebar: function() {
                handleSidebarMenu(), handleMobileSidebarToggle(), handleSidebarMinify(), handleSidebarMinifyFloatMenu(), handleToggleNavProfile(), handleToggleNavbarSearch(), (!a || a && !a.disableSidebarScrollMemory) && handleSidebarScrollMemory()
            },
            initSidebarSelection: function() {
                handleClearSidebarSelection()
            },
            initComponent: function() {
                (!a || a && !a.disableDraggablePanel) && handleSlimScroll(), handleUnlimitedTabsRender(), handlePanelAction(), handleScrollToTopButton(), handleAfterPageLoadAddClass(), handlePageScrollClass(), 767 < $(window).width() && handelTooltipPopoverActivation()
            },
            initLocalStorage: function() {
                (!a || a && !a.disableLocalStorage) && handleLocalStorage()
            },
            initAjax: function() {
                handleAjaxMode(a), $.ajaxSetup({
                    cache: !0
                })
            },
            scrollTop: function() {
                $("html, body").animate({
                    scrollTop: $("body").offset().top
                }, 0)
            }
        }
    }();
    $(document).ready(function() {
        App.init();
        Highlight.init();
    });
  return (
    <div>
     
<div id="page-container" class="page-header-fixed page-sidebar-fixed">
		<div id="sidebar" class="sidebar">
			
			<div data-scrollbar="true" data-height="100%">
			
				<ul class="nav">
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-th-large"></i>
							<span>User</span>
						</a>
						<ul class="sub-menu active">
							<li><a href="index.html">Add User</a></li>
							<li><a href="index_v2.html">Edit User</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-gem"></i>
							<span>Faculty </span> 
						</a>
						<ul class="sub-menu">
							<li><a href="ui_general.html">Add Faculty <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="ui_typography.html">Edit Faculty</a></li>
							<li><a href="ui_tabs_accordions.html">Delete Faculty</a></li>
							<li><a href="ui_unlimited_tabs.html">Unlimited Nav Tabs</a></li>
							<li><a href="ui_modal_notification.html">Modal & Notification <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="ui_widget_boxes.html">Widget Boxes</a></li>
							<li><a href="ui_media_object.html">Media Object</a></li>
							<li class="active"><a href="ui_buttons.html">Buttons  <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="ui_icons.html">Icons</a></li>
							<li><a href="ui_simple_line_icons.html">Simple Line Icons</a></li>
							<li><a href="ui_ionicons.html">Ionicons</a></li>
							<li><a href="ui_tree.html">Tree View</a></li>
							<li><a href="ui_language_bar_icon.html">Language Bar & Icon</a></li>
							<li><a href="ui_social_buttons.html">Social Buttons</a></li>
							<li><a href="ui_tour.html">Intro JS</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-list-ol"></i>
							<span>Course </span> 
						</a>
						<ul class="sub-menu">
							<li><a href="form_elements.html">Add Course <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="form_plugins.html">Edit Course <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="form_slider_switcher.html">Grades</a></li>
							<li><a href="form_validation.html">Topics/CLO</a></li>
							<li><a href="form_wizards.html">Sections</a></li>
							<li><a href="form_wizards_validation.html">Delete Course</a></li>
							<li><a href="form_wysiwyg.html">WYSIWYG</a></li>
							<li><a href="form_editable.html">X-Editable</a></li>
							<li><a href="form_multiple_upload.html">Multiple File Upload</a></li>
							<li><a href="form_summernote.html">Summernote</a></li>
							<li><a href="form_dropzone.html">Dropzone</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-table"></i>
							<span>Print Report</span>
						</a>
						<ul class="sub-menu">
							<li><a href="table_basic.html">Basic Tables</a></li>
							<li class="has-sub">
							  <a href="javascript:;"><b class="caret pull-right"></b> Managed Tables</a>
								<ul class="sub-menu">
									<li><a href="table_manage.html">Default</a></li>
									<li><a href="table_manage_autofill.html">Autofill</a></li>
									<li><a href="table_manage_buttons.html">Buttons</a></li>
									<li><a href="table_manage_colreorder.html">ColReorder</a></li>
									<li><a href="table_manage_fixed_columns.html">Fixed Column</a></li>
									<li><a href="table_manage_fixed_header.html">Fixed Header</a></li>
									<li><a href="table_manage_keytable.html">KeyTable</a></li>
									<li><a href="table_manage_responsive.html">Responsive</a></li>
									<li><a href="table_manage_rowreorder.html">RowReorder</a></li>
									<li><a href="table_manage_scroller.html">Scroller</a></li>
									<li><a href="table_manage_select.html">Select</a></li>
									<li><a href="table_manage_combine.html">Extension Combination</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-star"></i> 
							<span>Front End</span>
						</a>
						<ul class="sub-menu">
							<li><a href="../../frontend/one-page-parallax/index.html" target="_blank">One Page Parallax</a></li>
							<li><a href="../../frontend/blog/index.html" target="_blank">Blog</a></li>
							<li><a href="../../frontend/forum/index.html" target="_blank">Forum</a></li>
							<li><a href="../../frontend/e-commerce/index.html" target="_blank">E-Commerce</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-envelope"></i>
							<span>Email Template</span>
						</a>
						<ul class="sub-menu">
							<li><a href="email_system.html">System Template</a></li>
							<li><a href="email_newsletter.html">Newsletter Template</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-chart-pie"></i>
							<span>Chart</span>
						</a>
						<ul class="sub-menu">
							<li><a href="chart-flot.html">Flot Chart</a></li>
							<li><a href="chart-morris.html">Morris Chart</a></li>
							<li><a href="chart-js.html">Chart JS</a></li>
							<li><a href="chart-d3.html">d3 Chart</a></li>
						</ul>
					</li>
					<li><a href="calendar.html"><i class="fa fa-calendar"></i> <span>Calendar</span></a></li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-map"></i>
							<span>Map</span>
						</a>
						<ul class="sub-menu">
							<li><a href="map_vector.html">Vector Map</a></li>
							<li><a href="map_google.html">Google Map</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-image"></i>
							<span>Gallery</span>
						</a>
						<ul class="sub-menu">
							<li><a href="gallery.html">Gallery v1</a></li>
							<li><a href="gallery_v2.html">Gallery v2</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-cogs"></i>
							<span>Page Options</span>
						</a>
						<ul class="sub-menu">
							<li><a href="page_blank.html">Blank Page</a></li>
							<li><a href="page_with_footer.html">Page with Footer</a></li>
							<li><a href="page_without_sidebar.html">Page without Sidebar</a></li>
							<li><a href="page_with_right_sidebar.html">Page with Right Sidebar</a></li>
							<li><a href="page_with_minified_sidebar.html">Page with Minified Sidebar</a></li>
							<li><a href="page_with_two_sidebar.html">Page with Two Sidebar</a></li>
							<li><a href="page_with_line_icons.html">Page with Line Icons</a></li>
							<li><a href="page_with_ionicons.html">Page with Ionicons</a></li>
							<li><a href="page_full_height.html">Full Height Content</a></li>
							<li><a href="page_with_wide_sidebar.html">Page with Wide Sidebar</a></li>
							<li><a href="page_with_light_sidebar.html">Page with Light Sidebar</a></li>
							<li><a href="page_with_mega_menu.html">Page with Mega Menu</a></li>
							<li><a href="page_with_top_menu.html">Page with Top Menu</a></li>
							<li><a href="page_with_boxed_layout.html">Page with Boxed Layout</a></li>
							<li><a href="page_with_mixed_menu.html">Page with Mixed Menu</a></li>
							<li><a href="page_boxed_layout_with_mixed_menu.html">Boxed Layout with Mixed Menu</a></li>
							<li><a href="page_with_transparent_sidebar.html">Page with Transparent Sidebar</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-gift"></i>
							<span>Extra</span>
						</a>
						<ul class="sub-menu">
							<li><a href="extra_timeline.html">Timeline</a></li>
							<li><a href="extra_coming_soon.html">Coming Soon Page</a></li>
							<li><a href="extra_search_results.html">Search Results</a></li>
							<li><a href="extra_invoice.html">Invoice</a></li>
							<li><a href="extra_404_error.html">404 Error Page</a></li>
							<li><a href="extra_profile.html">Profile Page</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-key"></i>
							<span>Login & Register</span>
						</a>
						<ul class="sub-menu">
							<li><a href="login.html">Login</a></li>
							<li><a href="login_v2.html">Login v2</a></li>
							<li><a href="login_v3.html">Login v3</a></li>
							<li><a href="register_v3.html">Register v3</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-cubes"></i>
							<span>Version <span class="label label-theme m-l-5">NEW</span></span>
						</a>
						<ul class="sub-menu">
							<li><a href="javascript:;">HTML</a></li>
							<li><a href="../ajax/index.html">AJAX</a></li>
							<li><a href="../angularjs/index.html">ANGULAR JS</a></li>
							<li><a href="../angularjs6/index.html">ANGULAR JS 6 <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="javascript:alert('Laravel Preview is not available on our demo site.')">LARAVEL <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="../vuejs/index.html">VUE JS <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="../reactjs/index.html">REACT JS <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="../material/index.html">MATERIAL DESIGN</a></li>
							<li><a href="../apple/index.html">APPLE DESIGN</a></li>
							<li><a href="../transparent/index.html">TRANSPARENT DESIGN <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
							<li><a href="../facebook/index.html">FACEBOOK DESIGN <i class="fa fa-paper-plane text-theme m-l-5"></i></a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-medkit"></i>
							<span>Helper</span>
						</a>
						<ul class="sub-menu">
							<li><a href="helper_css.html">Predefined CSS Classes</a></li>
						</ul>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-align-left"></i> 
							<span>Menu Level</span>
						</a>
						<ul class="sub-menu">
							<li class="has-sub">
								<a href="javascript:;">
									<b class="caret"></b>
									Menu 1.1
								</a>
								<ul class="sub-menu">
									<li class="has-sub">
										<a href="javascript:;">
											<b class="caret"></b>
											Menu 2.1
										</a>
										<ul class="sub-menu">
											<li><a href="javascript:;">Menu 3.1</a></li>
											<li><a href="javascript:;">Menu 3.2</a></li>
										</ul>
									</li>
									<li><a href="javascript:;">Menu 2.2</a></li>
									<li><a href="javascript:;">Menu 2.3</a></li>
								</ul>
							</li>
							<li><a href="javascript:;">Menu 1.2</a></li>
							<li><a href="javascript:;">Menu 1.3</a></li>
						</ul>
					</li>
			
					<li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
					
				</ul>
				
			</div>
			
		</div>
		<div class="sidebar-bg"></div>
		
  
  <div id="content" class="content">
    <h1>Hello</h1>
  </div>
</div>




    </div>
  )
}
