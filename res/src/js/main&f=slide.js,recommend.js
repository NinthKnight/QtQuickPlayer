jQuery.fn.extend({
      table : function(sCheckBox) {
        var checkBoxFlag = true;
        if (typeof sCheckBox == "undefined")
            checkBoxFlag = false;
        var $rcBangdan_trMark = $(".main_table tr.on");
        var rcBangdan_shiftIndex = $rcBangdan_trMark.index($rcBangdan_trMark.eq(0));
        var btnHidden = true;
        $(".main_table").delegate('tr', {
            hover: function() {
                $(this).unbind('mousedown');
            },
            mousemove: function() {
                $(this).addClass('tr_hover');
                if ($(this).hasClass('offline')) {
                    return false;
                }
                $(".fct .fct_btn", this).css("display", "block");
            },
            mouseout: function() {
                $(this).removeClass('tr_hover');
                $(".fct .fct_btn", this).css("display", "none");
            },
            mousedown: function(event) {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                var $rcBangdan_trMark_not = $();
                var $rcBangdan_trMark_add = $();
                var index = $(".main_table tr").index(this);
                var thisFlag = $rcBangdan_trMark.index(this) > -1 ? true : false;
                if (event.which == 1) {
                    if (event.shiftKey == 1) {
                        if (rcBangdan_shiftIndex < 0) {
                            $rcBangdan_trMark_add = $(this);
                            rcBangdan_shiftIndex = index;
                        } else {
                            var begin = rcBangdan_shiftIndex < index ? rcBangdan_shiftIndex : index;
                            var end = (rcBangdan_shiftIndex > index ? rcBangdan_shiftIndex : index) + 1;
                            var $trMark = $(".main_table tr").slice(begin, end);
                            $rcBangdan_trMark_not = $rcBangdan_trMark.not($trMark);
                            $rcBangdan_trMark_add = $trMark.not($rcBangdan_trMark);
                        }
                    } else if (event.ctrlKey == 1) {
                        if (thisFlag) {
                            $rcBangdan_trMark_not = $(this);
                            btnHidden = false;
                        } else {
                            $rcBangdan_trMark_add = $(this);
                        }
                        rcBangdan_shiftIndex = index;
                    } else {
                        $rcBangdan_trMark_not = $rcBangdan_trMark;
                        if (thisFlag) {
                            $rcBangdan_trMark_not = $rcBangdan_trMark_not.not(this);
                        } else {
                            $rcBangdan_trMark_add = $(this);
                        }
                        rcBangdan_shiftIndex = index;
                    }
                } else if (event.which == 3) {
                    if ($(this).hasClass('offline')) {
                        return false;
                    }
                    if (thisFlag) {
                        tableMouseRightEvent(event);
                    } else {
                        $rcBangdan_trMark_not = $rcBangdan_trMark;
                        $rcBangdan_trMark_add = $(this);
                        rcBangdan_shiftIndex = index;
                        tableMouseRightEvent(event);
                    }
                    $.ClickMonkey({
                        type: "click",
                        act: "musicwindowmore",
                        pos: "musicwindowmore_right"
                    });
                }
                doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
            },
            dblclick: function() {
                var $tr = $(this);
                if ($(this).hasClass('offline') && $(this).data('copytype') != '0') {
                    Common_Layer.init_tip('addSuccess', "该歌曲已下线~", "icon2");
                    return false;
                }
                if ($(this).data('copytype') == '0') {
                    Common_Layer.init_tip('addSuccess', "应版权方要求，该歌曲暂时无法播放", "icon2");
                    return false;
                }
                if ($(this).data('copytype') == '2') {
                    Common_Layer.init_tip('addSuccess', "您好，应版权方要求，该歌曲下载后，即可播放哦~", "icon3");
                    return false;
                }
                var song = $tr.data("song");
                playSong(song);
                return false;
            }
        })
        if (checkBoxFlag) {
            $("#selectAll").unbind('click').click(function() {
                var $rcBangdan_trMark_not = $();
                var $rcBangdan_trMark_add = $();
                if ($(this).attr("checked")) {
                    $rcBangdan_trMark_add = $(".main_table tr").not($rcBangdan_trMark)
                } else {
                    $rcBangdan_trMark_not = $rcBangdan_trMark;
                }
                doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
            });
            $(sCheckBox, ".main_table tr").unbind('mousedown').mousedown(function(event) {
                if (event.which == 1) {
                    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                    var $rcBangdan_trMark_not = $();
                    var $rcBangdan_trMark_add = $();
                    var $thisTr = $(this).parents("tr").eq(0);
                    if ($(this).attr("checked")) {
                        $rcBangdan_trMark_not = $thisTr;
                        $(sCheckBox, $thisTr).removeClass("visited_hover");
                        btnHidden = false;
                    } else {
                        $rcBangdan_trMark_add = $thisTr;
                        $(sCheckBox, $thisTr).addClass("visited_hover");
                    }
                    doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden);
                }
            }).dblclick(function() {
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                return false;
            });
        }
        function doTrMark($rcBangdan_trMark_not, $rcBangdan_trMark_add, btnHidden) {
            if ($rcBangdan_trMark_not.length > 0) {
                $rcBangdan_trMark_not.removeClass("on");
                if (checkBoxFlag) {
                    $(sCheckBox, $rcBangdan_trMark_not).attr("checked", false).removeClass("visited");
                }
                $rcBangdan_trMark = $rcBangdan_trMark.not($rcBangdan_trMark_not);
            }
            if ($rcBangdan_trMark_add.length > 0) {
                $rcBangdan_trMark_add.addClass("on");
                if (checkBoxFlag) {
                    $(sCheckBox, $rcBangdan_trMark_add).attr("checked", true).addClass("visited");
                }
                $rcBangdan_trMark = $rcBangdan_trMark.add($rcBangdan_trMark_add);
            }
            if (checkBoxFlag) {
                var allFlag = ($rcBangdan_trMark.length == $(".main_table tr").length);
                if (allFlag)
                    $("#selectAll").addClass("visited").attr("checked", true);
                else
                    $("#selectAll").removeClass("visited").attr("checked", false);
            }
        }
        $(".main_table").delegate('.u_title a.artist', 'click', function() {
            $(this).unbind();
            var artist_id = $(this).data("artistid");
            var uid = $(this).data("uid");
            globalLinks.singerPerson(artist_id, uid);
            return false;
        });
        $(".main_table .u_title a.search").unbind().click(function() {
            var query = $(this).data("query");
            globalLinks.searchSongs(query);
            return false;
        });
        $(".main_table").delegate('.a_title a', 'click', function() {
            $(this).unbind();
            var album_id = $(this).data("albumid");
            globalLinks.album(album_id);
            return false;
        });
        $(".main_table").delegate('.fct_btn .play', 'click', function() {
            $(this).unbind();
            var $tr = $(this).parents("tr").eq(0);
            var copy_type = $tr.data('copytype');
            if (copy_type == 2) {
                Common_Layer.init_tip('addSuccess', "您好，应版权方要求，该歌曲下载后，即可播放哦~", "icon3");
                return false;
            }
            var song = $tr.data("song");
            playSong(song);
            if ($(this).data('page') == 'recommend_new') {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "xhot_list",
                    "sub": "play"
                });
            } else if ($(this).data('page') == 'recommend_hot') {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "rhot_list",
                    "sub": "play"
                });
            }
            return false;
        });
        $(".main_table").delegate('.fct_btn .phone', 'click', function() {
            $(this).unbind();
            if (!$(this).hasClass('disable')) {
                var $tr = $(this).parents("tr").eq(0);
                var song = $tr.data("song");
                if (client.sucess)
                    client.sendPhone(new Array(song));
            }
            $.ClickMonkey({
                type: "click",
                act: "mutil_toapp"
            });
            return false;
        });
        $(".main_table").delegate('.fct_btn .more', {
            mouseup: function(event) {
                $(this).unbind()
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            },
            click: function(event) {
                $(this).unbind()
                tableMouseRightEvent(event);
                if ($(this).data('page') == 'recommend_new') {
                    $.ClickMonkey({
                        "page": "recommend",
                        "pos": "xhot_list",
                        "sub": "moreinfo"
                    });
                } else if ($(this).data('page') == 'recommend_hot') {
                    $.ClickMonkey({
                        "page": "recommend",
                        "pos": "rhot_list",
                        "sub": "moreinfo"
                    });
                } else {
                    $.ClickMonkey({
                        type: "click",
                        act: "musicwindowmore",
                        pos: "musicwindowmore_left"
                    });
                }
                return false;
            }
        });
        $(".main_table").delegate('.lossless', 'click', function() {
            var $tr = $(this).parents("tr").eq(0);
            if ($tr.hasClass('offline')) {
                return false;
            }
            var song = $tr.data("song");
            downloadSong(song);
            return false;
        });
        $(".main_table").delegate('.mv_icon', 'click', function() {
            var $tr = $(this).parents("tr").eq(0);
            var song = $tr.data("song");
            playMV(song);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_play_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            playSongs(songs);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_add_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                if (!$(this).hasClass('offline')) {
                    songs.push(song);
                }
            });
            if (songs.length > 1) {
                addSongs(songs);
            } else if (songs.length == 1) {
                addSong(songs[0]);
            }
            return false;
        });
        function downTextByVersion() {
            var downName = "";
            if (checkVersionGt('10.2.2') && (checkVersionLt('11.0.3'))) {
                downNameTxt = '缓存';
            } else {
                downNameTxt = '下载';
            }
            $('.event_main_table_btn .event_download_all,.event_ugc_main_btn .event_download_all').attr('title', downNameTxt + '列表中全部歌曲');
            $('.event_main_table_btn .event_download_all i,.event_ugc_main_btn .event_download_all i').html(downNameTxt + '全部');
        }
        downTextByVersion();
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_download_all', 'click', function() {
            if ($(this).hasClass('isSingle')) {
                Common_Layer.init_tip('addSuccess', "应版权方要求，该歌曲暂时无法下载", "icon2");
            } else {
                var $trs = $(".main_table tr");
                var songs = [];
                var tencent_counter = 0;
                $.each($trs, function() {
                    if (!$(this).hasClass('offline')) {
                        song = $(this).data("song");
                        songs.push(song);
                    }
                });
                if (tencent_counter > 0 && songs.length < 1) {
                    Common_Layer.init_tip('addSuccess', "您好，应版权方要求，全部歌曲仅供播放，不能下载哦~", "icon3");
                    return false;
                }
                if (songs.length > 1) {
                    openDownloadPage(songs);
                } else {
                    downloadSong(songs[0]);
                }
            }
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_phone_all', 'click', function() {
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                if (!$(this).hasClass('offline')) {
                    song = $(this).data("song");
                    songs.push(song);
                }
            });
            if (client.sucess)
                client.sendPhone(songs);
            return false;
        });
        $('.event_main_table_btn,.event_ugc_main_btn').delegate('.event_save_list', 'click', function() {
            var _self = $(this);
            var $trs = $(".main_table tr");
            var songs = [];
            $.each($trs, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            songs = linkEmptyData(songs, "");
            var title = $(this).data("title");
            title = encodeURIComponent(title);
            if (client.sucess) {
                if (checkVersionGt('10.1.0')) {
                    var gedanObj = new DiyInterface()
                      , list_id = $(this).data('id')
                      , type = $(this).data('type');
                    var data = {
                        "list_id": list_id,
                        "source": type
                    };
                    var iscollect = $(this).data('iscollect');
                    var This = this;
                    if (iscollect == 0) {
                        gedanObj.addFavoriteDiy(data).done(function(jsondata) {
                            var error_code = jsondata.error_code;
                            if (error_code == 22000) {
                                client.ugcCollectSongs(list_id, title, type, 1);
                                $(This).addClass('collect_all').removeClass('no_collect_all');
                                Common_Layer.init_tip('addSuccess', "收藏成功");
                                $(This).data('iscollect', '1');
                                var current_nums = parseInt($(This).find('i').text());
                                if (!$.isNumeric(current_nums)) {
                                    current_nums = 0;
                                }
                                var nums = current_nums + 1;
                                $(This).find('i').text(nums);
                            } else if (error_code == 22713) {
                                Common_Layer.init_tip('addSuccess', "收藏成功");
                            } else {
                                Common_Layer.init_tip('addSuccess', "收藏失败", "icon2");
                            }
                        });
                    } else if (iscollect == 1) {
                        gedanObj.deleteFavoriteDiy(data).done(function(jsondata) {
                            var error_code = jsondata.error_code;
                            if (error_code == 22000) {
                                client.ugcCollectSongs(list_id, title, type, 0);
                                $(This).addClass('no_collect_all').removeClass('collect_all');
                                $(This).data('iscollect', '0');
                                Common_Layer.init_tip('addSuccess', "取消成功");
                                var current_nums = parseInt($(This).find('i').text());
                                if (!$.isNumeric(current_nums)) {
                                    current_nums = 0;
                                }
                                var nums = current_nums - 1;
                                nums = (nums == 0) ? '收藏' : nums;
                                $(This).find('i').text(nums);
                            } else {
                                Common_Layer.init_tip('addSuccess', "取消失败", "icon2");
                            }
                        });
                    }
                } else {
                    if (_self.hasClass('gedan_collect_btn')) {
                        client.newSongList(1, songs, 4, title, false);
                    } else {
                        client.newSongList(1, songs, 4, title);
                    }
                }
            }
            return false;
        });
    },








	
    slideFocus: function() {
        $This = $(this);
        var imgWidth = $(this).width(), len = $(this).find('ul li').length, index = 0, index2 = 0, timer;
        var btn_html = '<div class="banner_num">';
        for (var i = 0; i < len; i++) {
            btn_html += '<span></span>';
        }
        btn_html += '<a class="prev_btn prev_next png"></a><a class="next_btn prev_next png"></a></div>';
        $(this).append(btn_html);
        $(this).find('.banner_num span').eq(0).addClass('current');
        $(this).find('ul').css("width", imgWidth * len);
        $(this).find('.banner_num span').mouseenter(function() {
            index = $(this).index();
            index2 = index;
            slide(index, index2);
        });
        $(this).find('.prev_btn').click(function() {
            index2 = index;
            if (index == 0) {
                $This.find('ul li').eq(len - 1).css({
                    "position": "relative",
                    "left": -len * imgWidth
                });
                index = len - 1;
            } else {
                index--;
            }
            index2--;
            slide(index, index2, 'prev');
            // $.ClickMonkey({
                // "page": "recommend",
                // "pos": "focus",
                // "sub": "left"
            // });
        });
        $(this).find('.next_btn').click(function() {
            index2 = index;
            if (index == len - 1) {
                $This.find('ul li').eq(0).css({
                    "position": "relative",
                    "left": len * imgWidth
                });
                index = 0;
            } else {
                index++;
            }
            index2++;
            slide(index, index2);
            // $.ClickMonkey({
                // "page": "recommend",
                // "pos": "focus",
                // "sub": "right"
            // });
        });
        $(this).hover(function() {
            clearInterval(timer);
            $(this).find('.prev_next').stop(false, true).fadeIn().end();
        }, function() {
            $(this).find('.prev_next').stop(false, true).fadeOut().end();
            timer = setInterval(function() {
                index2 = index;
                if (index == len - 1) {
                    $This.find('ul li').eq(0).css({
                        "position": "relative",
                        "left": len * imgWidth
                    });
                    index = 0;
                } else {
                    index++;
                }
                index2++;
                slide(index, index2);
            }, 5000);
        }).trigger('mouseleave');
        function slide(index, index2, direction) {
            var direction = direction ? direction : 'next';
            var scroll_width = -index2 * imgWidth;
            $This.find('ul').stop(true, false).animate({
                left: scroll_width
            }, 500, function() {
                if (direction == 'next') {
                    if (index == 0) {
                        $This.find('ul').css({
                            'left': 0
                        });
                        $This.find('ul li').eq(0).css({
                            "position": "static"
                        });
                        index2 = 0;
                    }
                } else if (direction == 'prev') {
                    if (index == len - 1) {
                        $This.find('ul').css({
                            'left': -(len - 1) * imgWidth
                        });
                        $This.find('ul li').eq(len - 1).css({
                            "position": "static"
                        });
                        index2 = len - 1;
                    }
                }
            });
            $This.find('.banner_num span').stop(true, false).eq(index).addClass('current').siblings('span').removeClass('current');
        }
    },
    slideScroll: function(options) {
        var $This = $(this);
        var per_num = options.per_num ? options.per_num : '5'
          , total_num = $(this).find('ul.section_con').children('li').length
          , total_page = Math.ceil(total_num / per_num)
          , cur_page = 0
          , type = options.type ? options.type : '';
        var dot_html = '<div class="dot_icons">';
        for (var i = 0; i < total_page; i++) {
            dot_html += '<a></a>';
        }
        dot_html += '</div>';
        $(this).prepend(dot_html);
        $(this).find('.dot_icons a').eq(0).addClass('current');
        var slideWidth = $(this).find('.section_scroll_box').width() + 16;
        if ((type == "1_1") || (type == "1_2")) {
            slideWidth += 2;
        }
        $(this).find('.next_btn').click(function() {
            if (cur_page == total_page - 1) {
                cur_page = -1;
            }
            cur_page++;
            var scroll_width = -slideWidth * cur_page;
            $This.find('ul.section_con').stop(true, false).animate({
                left: scroll_width
            }, 500, function() {
                $("#useScroll").trigger("scroll", 2);
            });
            $This.find('.dot_icons a').eq(cur_page).addClass('current').siblings().removeClass('current');
            if (type == "1_1") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "newsong",
                    "sub": "right"
                });
            } else if (type == "1_2") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "hotalbum",
                    "sub": "right"
                });
            } else if (type == "2") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "recommend_mv",
                    "sub": "right"
                });
            } else if (type == "3") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "song_list",
                    "sub": "right"
                });
            } else if (type == "4") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "recommend_singer",
                    "sub": "right"
                });
            }
        });
        $(this).find('.prev_btn').click(function() {
            if (cur_page == 0) {
                cur_page = total_page;
            }
            cur_page--;
            var scroll_width = -slideWidth * cur_page;
            $This.find('ul.section_con').stop(true, false).animate({
                left: scroll_width
            }, 500, function() {
                $("#useScroll").trigger("scroll", 2);
            });
            $This.find('.dot_icons a').eq(cur_page).addClass('current').siblings().removeClass('current');
            if (type == "1_1") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "newsong",
                    "sub": "left"
                });
            } else if (type == "1_2") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "hotalbum",
                    "sub": "left"
                });
            } else if (type == "2") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "recommend_mv",
                    "sub": "left"
                });
            } else if (type == "3") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "song_list",
                    "sub": "left"
                });
            } else if (type == "4") {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "recommend_singer",
                    "sub": "left"
                });
            }
        });
        $(this).hover(function() {
            $This.find('.prev_next').css('display', 'block');
        }, function() {
            $This.find('.prev_next').css('display', 'none');
        });
        if ((type == "1_1") || (type == "1_2")) {
            $(this).siblings('.cateWrapper').hover(function() {
                $This.find('.prev_next').css('display', 'block');
            }, function() {
                $This.find('.prev_next').css('display', 'none');
            })
        }
    }
});
;$(function() {
	
	$('#focusImg').slideFocus();
    $('#section_scroll_wrap1').slideScroll({
        "type": "1_1"
    });
    $('#section_scroll_wrap2').slideScroll({
        "type": "2"
    });
    $('#section_scroll_wrap3').slideScroll({
        "type": "3"
    });
    $('#section_scroll_wrap4').slideScroll({
        "type": "4"
    });
    $('#section_scroll_wrap1_2').slideScroll({
        "type": "1_2",
        "per_num": "6"
    });
	
	$(".bangdan_list").table();
	
    var upgrade_cookie = getCookies("qianqian_guide_upgrade");
    if (upgrade_cookie == "") {
        var html = '<div id="upgrade_guide" class="upgrade_guide png"><div class="upgrade_guide_box"><a href="javascript:;" class="enter" id="do_upgrade_enter"></a></div></div>';
        $("body").append($(html));
        setCookie("qianqian_guide_upgrade", "2");
    }
    function setCookie(name, value, expire, path) {
        expire = expire || 10 * 12 * 30 * 24 * 60 * 60 * 1000;
        path = path || '/';
        var date = new Date();
        date.setTime(date.getTime() + expire);
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + date.toUTCString() + "; path=" + path;
    }
    function getCookies(name) {
        var re = "(?:; )?" + encodeURIComponent(name) + "=([^;]*);?";
        re = new RegExp(re);
        if (re.test(document.cookie)) {
            return decodeURIComponent(RegExp.$1);
        }
        return '';
    }
    $('#do_upgrade_enter').click(function() {
        $('#upgrade_guide').css('display', 'none');
    })

    // $("img.lazylod").lazyload({
        // container: $("#useScroll"),
        // failurelimit: 30
    // });
    //$("#useScroll").ttScroll();
    //$(".bangdan_list").table();
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var CN = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
    $(".cateWrapper .date_month_title").html(CN[month] + "   月");
    dateToPic(day);
    function dateToPic(num) {
        var str = num.toString();
        if (str.length == 1) {
            str = '0' + str;
        }
        $('.cateWrapper .date_day_first').css('background', 'url(/2018/resources/images/new_pic/' + str.charAt(0) + '.png)');
        $('.cateWrapper .date_day_second').css('background', 'url(/2018/resources/images/new_pic/' + str.charAt(1) + '.png)');
    }

    $('.newWrapper .tab').click(function() {
        var index = $(this).index();
        $(this).addClass('current-tab').siblings('.tab').removeClass('current-tab');
        if (index == 2) {
            $('#section_scroll_wrap1').hide();
            $('.cateWrapper').hide();
            $('#section_scroll_wrap1_2').show();
            $('.newWrapper .section_title_box').css('background', 'url(/2018/resources/images/new_pic/gray.png) no-repeat');
            $('.newWrapper .section_title_box .right_tab_select').css('background', 'url(/2018/resources/images/new_pic/icon1.png) no-repeat -127px 3px');
            $.ClickMonkey({
                "page": "recommend",
                "pos": "hotalbum",
                "sub": "titlename"
            });
        } else {
            $('#section_scroll_wrap1_2').hide();
            $('.cateWrapper').show();
            $('#section_scroll_wrap1').show();
            $('.newWrapper .section_title_box').css('background', 'url(/2018/resources/images/new_pic/icon1.png) no-repeat -127px 3px')
            $('.newWrapper .section_title_box .right_tab_select').css('background', 'url(/2018/resources/images/new_pic/gray.png) no-repeat');
            $.ClickMonkey({
                "page": "recommend",
                "pos": "newsong",
                "sub": "titlename"
            });
        }
    })
    $('.album_more').click(function() {
        var url = $(this).data('url');
        if ($('.newWrapper .current-tab').data('type') == "tab-hot") {
            url = "/2018/static/album/albumIndex_1_热销_1.html";
        }
        globalLinks.markNavigate(url);
        $.ClickMonkey({
            "page": "recommend",
            "pos": "newsong",
            "sub": "more"
        });
    });
    $('#focusImg li a').click(function() {
        var url = $(this).data('url');
        var type = $(this).closest('li').data('code');
        if (type == 1 || type == 2 || type == 7) {
            globalLinks.markNavigate(url);
        } else {
            client.jumpUrl(url);
        }
        $.ClickMonkey({
            "page": "recommend",
            "pos": "focus",
            "sub": "picture"
        });
    });
    $('.cateWrapper a,.cateWrapper .dailyWrapper').click(function() {
        globalLinks.dailyRcList();
        if ($(this).hasClass("dailyWrapper")) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "todaytuijian",
                "sub": "picture"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "todaytuijian",
                "sub": "firstline"
            });
        }
    })
    var playObj = {
        album: function(obj) {
            var album_id = obj.data("albumid");
            var url = "/2018/app/singer/albumSong.php?aid=" + album_id;
            $.getJSON(url, function(songs) {
                playSongs(songs);
            });
        },
        mv: function(obj) {
            var song = obj.data('song');
            if (song.song_id) {
                playMV(song);
            } else if (song.mv_id) {
                playMVByID(song.mv_id);
            }
        },
        gedan: function(obj) {
            var code = obj.data("code");
            var url = "/2018/app/gedan/gedanSong.php?gid=" + code;
            $.getJSON(url, function(songs) {
                playSongs(songs);
            });
            $.ClickMonkey({
                "page": "recommend",
                "pos": "song_list",
                "sub": "play"
            });
        },
        single: function() {
            var song = obj.data('song');
            playSong(song);
        },
        bangdan: function(obj) {
            var code = obj.data('code')
              , bangdanName = code === 1 ? 'newBangdan' : 'hotBangdan';
            var $lis = $('#' + bangdanName).children('li');
            var songs = [];
            $.each($lis, function() {
                song = $(this).data("song");
                songs.push(song);
            });
            playSongs(songs);
        }
    }
    var jumpUrlObj = {
        album: function(obj) {
            var album_id = obj.data("albumid");
            globalLinks.album(album_id);
        },
        gedan: function(obj) {
            var code = obj.data("code");
            globalLinks.gedanList(code);
            $.ClickMonkey({
                "page": "recommend",
                "pos": "recommend_song_list",
                "sub": "miaoshu"
            });
        },
        bangdan: function(obj) {
            var code = obj.data('code');
            globalLinks.bangdanList(code);
            $.ClickMonkey({
                "page": "recommend",
                "pos": "hot_list"
            });
        }
    }
    $('.sectionWrapper,.sideBox').delegate('.play_icon', 'click', function() {
        var $li = !!$(this).data('type') ? $(this) : $(this).parents('li').eq(0);
        var type = $li.data('type');
        playObj[type]($li);
        if (type == "album") {
            if ($(this).parents('#section_scroll_wrap1').length == 1) {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "newsong",
                    "sub": "picture"
                });
            } else {
                $.ClickMonkey({
                    "page": "recommend",
                    "pos": "hotalbum",
                    "sub": "picture"
                });
            }
        } else if (type == "mv") {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "recommend_mv",
                "sub": "play"
            });
        }
        return false;
    });
    $('.mvWrapper').delegate('a.s_title', 'click', function() {
        var $li = !!$(this).data('type') ? $(this) : $(this).parents('li').eq(0);
        var type = $li.data('type');
        playObj[type]($li);
        $.ClickMonkey({
            "page": "recommend",
            "pos": "recommend_mv",
            "sub": "name"
        });
        return false;
    });
    $(".bangdan_con .main_table td.s_title a.mv_icon").click(function() {
        if ($(this).parents('.bangdan_con').hasClass('new_con')) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "mv"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "mv"
            });
        }
    });
    $(".bangdan_con .main_table td.s_title a.first").click(function() {
        if ($(this).parents('.bangdan_con').hasClass('new_con')) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "first"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "first"
            });
        }
    });
    $(".bangdan_con .main_table td.s_title a.lossless").click(function() {
        if ($(this).parents('.bangdan_con').hasClass('new_con')) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "wusun"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "wusun"
            });
        }
    });
    $('.newWrapper .u_title').click(function() {
        var artistid = $(this).data('artistid');
        var u_id = 0;
        globalLinks.singerPerson(artistid, u_id);
        if ($(this).parents('#section_scroll_wrap1').length == 1) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "newsong",
                "sub": "singername"
            });
        }
        return false;
    });
    $('.mvWrapper .u_title').click(function() {
        var artistid = $(this).data('artistid');
        var u_id = 0;
        globalLinks.singerPerson(artistid, u_id);
        $.ClickMonkey({
            "page": "recommend",
            "pos": "recommend_mv",
            "sub": "singer"
        });
        return false;
    });
    $('.section_scroll_wrap li .img_border img,.section_scroll_wrap li a.a_title,.section_scroll_wrap li a.gd_title').click(function() {
        var $li = !!$(this).data('type') ? $(this) : $(this).parents('li').eq(0);
        var type = $li.data('type');
        if (jumpUrlObj[type])
            jumpUrlObj[type]($li);
        if ($(this).parents('#section_scroll_wrap1').length == 1) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "newsong",
                "sub": "songname"
            });
        }
        return false;
    });
    $('.bangdan_con a.linkB').click(function() {
        var bangdan_id = $(this).data('code');
        globalLinks.bangdanList(bangdan_id);
        if (bangdan_id == 1) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "more"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "more"
            });
        }
        return false;
    });
    $('.bangdanWrapper .u_title a').click(function(event) {
        var artistid = $(this).data('artistid');
        var u_id = 0;
        globalLinks.singerPerson(artistid, u_id);
        if ($(this).parents('.bangdan_con').hasClass('new_con')) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "artist"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "artist"
            });
        }
    })
    $("#section_scroll_wrap4 ul li i.mask,#section_scroll_wrap4 ul li a.txt1").click(function() {
        var artist_id = $(this).closest('li').attr("data-artistid");
        var u_id = 0;
        globalLinks.singerPerson(artist_id, u_id);
        $.ClickMonkey({
            "page": "recommend",
            "pos": "recommend_singer",
            "sub": "artist"
        });
        return false;
    });
    $(".rcSingerWrapper .section_title_box .singer_type li").click(function() {
        $(".rcSingerWrapper .section_title_box .singer_type li").removeClass("visited");
        $(this).addClass("visited");
        var index = $(this).data("index");
        if (index == 1) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "recommend_singer",
                "sub": "huayu"
            });
        } else if (index == 2) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "recommend_singer",
                "sub": "oumei"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "recommend_singer",
                "sub": "rihan"
            });
        }
        var url = "/2018/chtml/recommend/artist_" + index + ".html";
        $.getJSON(url, function(data) {
            var html = rcSinger_draw_table(data);
            $(".rcSingerWrapper .section_scroll_box").empty().html(html);
            $("#section_scroll_wrap4 ul li").delegate("i.mask,a.txt1", "click", function() {
                var artist_id = $(this).closest('li').attr("data-artistid");
                var u_id = 0;
                globalLinks.singerPerson(artist_id, u_id);
                return false;
            });
        });
        return false;
    });
    function rcSinger_draw_table(data) {
        var html = '<ul class="section_con normal_section_con clearfix">';
        $.each(data, function(i, data) {
            html += '<li data-artistid="' + data.artist_id + '" data-type="singer">' + '<span class="img_border">' + '<img class="lazylod" src="' + data.artist_image_url + '"  key="" />' + '<i class="mask"></i>' + '</span>' + '<a class="txt txt1 song_artist" style="text-align:center" href="javascript:void(0)">' + data.song_artist + '</a></p>' + '</li>';
        });
        html += '</ul>';
        return html;
    }
    ;$('#newPlayRadio').hover(function() {
        $(this).css('cursor', 'pointer');
    }, function() {
        $(this).css('cursor', 'default');
    })
    $('#newPlayRadio').click(function() {
        var client = new Client();
        if (client.sucess) {
            var radioInfo = client.getRadioInfo();
            var isLogin = checkLoginStatus();
            if (radioInfo == null) {
                if (isLogin) {
                    if (client.sucess)
                        client.privateRadioPlay();
                } else {
                    getRandomSceneSong();
                }
            } else {
                globalLinks.radio();
            }
        }
        $.ClickMonkey({
            "page": "recommend",
            "pos": "fm",
            "sub": "play"
        });
    });
    function getRandomSceneSong() {
        var host_url = "http://" + window.location.host;
        $.getJSON(host_url + '/2018/app/radio/getRandomSceneSong.php', function(songdata) {
            if (client.sucess)
                client.radioPlay(new Array(songdata));
        })
    }
    ;var userAgent = navigator.userAgent;
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion != 6) {
        $('#radioPic').css('display', 'block');
    }
    $('#jumptoRadio').hover(function() {
        $('#radioPic').attr('src', './src/images/more_dt_hover.png');
    }, function() {
        $('#radioPic').attr('src', './src/images/more_dt.png');
    })
    $('#jumptoRadio').click(function(event) {
        globalLinks.radio();
        event.stopPropagation();
        $.ClickMonkey({
            "page": "recommend",
            "pos": "fm",
            "sub": "more"
        });
    });
    $('.dailyWrapper').delegate('.play_icon', 'click', function(event) {
        var $trs = $(".dailyRC");
        var songs = [];
        $.each($trs, function() {
            song = $(this).data("song");
            songs.push(song);
        });
        var songonline = [];
        for (var i = 0; i < songs.length; i++) {
            if (songs[i].del_status == 0) {
                songonline.push(songs[i]);
            }
        }
        ;playSongs(songonline);
        event.stopPropagation();
        $.ClickMonkey({
            "page": "recommend",
            "pos": "todaytuijian",
            "song_list": "play"
        });
    });
    $('.section_scroll_wrap li').hover(function() {
        $(this).find('.play_icon').show();
    }, function() {
        $(this).find('.play_icon').hide();
    });
    $('.dailyWrapper').hover(function() {
        $(this).children('.dr_select').css('display', 'block');
        $(this).children('.play_icon').css('display', 'inline-block');
    }, function() {
        $(this).children('.dr_select').css('display', 'none');
        $(this).children('.play_icon').css('display', 'none');
    });
    $('.event_main_table_btn .event_play_all_bd').unbind().click(function() {
        var $trs = $(this).parents(".bangdan_con").find(".main_table tr");
        var songs = [];
        $.each($trs, function() {
            song = $(this).data("song");
            songs.push(song);
        });
        playSongs(songs);
        if ($(this).parents('.bangdan_con').hasClass('new_con')) {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "xhot_list",
                "sub": "play_total"
            });
        } else {
            $.ClickMonkey({
                "page": "recommend",
                "pos": "rhot_list",
                "sub": "play_total"
            });
        }
        return false;
    });
    $('#moreBdLink').click(function() {
        globalLinks.bangdan();
        $.ClickMonkey({
            "page": "recommend",
            "pos": "hot_list",
            "sub": "more"
        });
    });
    $('#moreGdLink').click(function() {
        globalLinks.gedan();
        $.ClickMonkey({
            "page": "recommend",
            "pos": "recommend_song_list",
            "sub": "more"
        });
    });
    $('#moreSingerLink').click(function() {
        globalLinks.singer();
        $.ClickMonkey({
            "page": "recommend",
            "pos": "recommend_singer",
            "sub": "more"
        });
    });
}

)


