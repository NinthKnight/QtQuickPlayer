function Client() {
    var player = null;
    var sucess = true;
    try {
        this.player = window.external.BaiduMusic;
        if (!Boolean(this.player)) {
            throw 'error';
        }
        return new BaiduMusic(this.player);
    } catch (e) {}
}
function BaiduMusic(player) {
    this.player = player;
    this.clientLoginStatus = function(user) {
        try {
            this.player.SetLoginStatus2(user);
        } catch (e) {
            alert("player error - SetLoginStatus2");
        }
    }
    ,
    this.clientLogin = function(type) {
        try {
            this.player.Login();
            playerInterface.setLoginCallBackType(type);
        } catch (e) {
            alert("player error - Login");
        }
    }
    ,
    this.loginJump = function(url) {
        try {
            if (typeof url == "undefined" || url == "") {
                return;
            }
            url = encodeURIComponent(url);
            this.player.JumpUrl(url);
        } catch (e) {
            alert("player error - JumpUrl");
        }
    }
    ,
    this.jumpUrl = function(url) {
        try {
            if (typeof url == "undefined" || url == "") {
                return;
            }
            this.player.JumpUrl(url);
        } catch (e) {
            alert("player error - JumpUrl");
        }
    }
    ,
    this.linkPlay = function(songs) {
        try {
            this.player.PlaySongs(songs);
        } catch (e) {
            alert("player error - PlaySongs");
        }
    }
    ;
    this.linkAdd = function(songs) {
        try {
            this.player.AddSongs(songs);
        } catch (e) {
            alert("player error - AddSongs");
        }
    }
    ;
    this.linkDownload = function(songs) {
        try {
            this.player.DownloadSongs(songs);
        } catch (e) {
            alert("player error - DownloadSongs");
        }
    }
    ;
    this.linkPlayMV = function(songs) {
        try {
            this.player.PlayMVs(songs);
        } catch (e) {
            alert("player error - PlayMVs");
        }
    }
    ;
    this.playMV = function(mv_id) {
        try {
            this.player.PlayMVByID(mv_id);
        } catch (e) {
            updownCommonLayer("播放特殊资源mv");
        }
    }
    this.radioPlay = function(channel) {
        try {
            this.player.PlayRadios(channel);
        } catch (e) {
            alert("player error - PlayRadios");
        }
    }
    ;
    this.favoriteSongs = function(songs) {
        try {
            this.player.FavoriteSongs(songs);
        } catch (e) {
            alert("player error - FavoriteSongs");
        }
    }
    ;
    this.getSongInfo = function() {
        try {
            var songInfo = this.player.GetSongInfos();
            songInfo = $.parseJSON(songInfo);
        } catch (e) {
            var songInfo = {};
        }
        return songInfo;
    }
    ;
    this.GetMvId = function() {
        try {
            var mvid = this.player.GetMVID();
        } catch (e) {
            var mvid = 0;
        }
        return mvid;
    }
    ;
    this.getClientInfo = function() {
        try {
            var clientInfo = this.player.ClientInfo;
            clientInfo = $.parseJSON(clientInfo);
        } catch (e) {
            var clientInfo = {};
        }
        return clientInfo;
    }
    ;
    this.checkIsLogin = function() {
        var clientInfo = this.getClientInfo();
        var bduss = clientInfo.bduss
          , token_ = clientInfo.token_;
        if ((typeof bduss == "undefined" || bduss == "") && (typeof token_ == "undefined" || token_ == "")) {
            return false;
        } else {
            return true;
        }
    }
    ;
    this.getLocalIP = function() {
        try {
            var uIP = this.player.GetLocalIP();
        } catch (e) {
            var uIP = '';
        }
        return uIP;
    }
    ;
    this.closeAllPage = function() {
        try {
            this.player.ClearEffectBrowsers();
        } catch (e) {
            alert("player error - ClearEffectBrowsers");
        }
    }
    ;
    this.sendPhoneLogin = function(songs) {
        try {
            this.player.SendSongsToDeviceByAccount(songs);
        } catch (e) {
            alert("player error - SendSongsToDeviceByAccount");
        }
    }
    ;
    this.sendPhoneLoginResult = function(flag) {
        try {
            this.player.NotifySendDeviceResult(flag);
        } catch (e) {
            alert("player error - NotifySendDeviceResult");
        }
    }
    ;
    this.sendPhone = function(songs) {
        try {
            this.player.SendSongsToDevice(songs);
        } catch (e) {
            alert("player error - SendSongsToDevice");
        }
    }
    ;
    this.newSongList = function(type, songs, callbacktype, title, isrname) {
        try {
            if (typeof title == "undefined") {
                title = "";
            }
            if (typeof isrname == "undefined") {
                isrname = true;
            }
            if (typeof callbacktype == "undefined") {
                callbacktype = 4;
            }
            this.player.AddSongsToNewList(parseInt(type), songs, String(title), isrname, callbacktype);
        } catch (e) {
            alert("player error - AddSongsToNewList");
        }
    }
    ;
    this.addSongToList = function(type, listid, songs) {
        try {
            this.player.AddSongsToListByID(parseInt(type), listid, songs);
        } catch (e) {
            alert("player error - AddSongsToListByID");
        }
    }
    ;
    this.getRadioInfo = function() {
        try {
            var radioInfo = this.player.GetRadioInfo();
            radioInfo = $.parseJSON(radioInfo);
        } catch (e) {
            var radioInfo = {};
        }
        return radioInfo;
    }
    ;
    this.privateRadioPlay = function() {
        try {
            this.player.PlayPrivateRadio();
        } catch (e) {
            alert("player error - PlayPrivateRadio");
        }
    }
    ;
    this.openClientWindow = function(url, data) {
        try {
            var type = data.type;
            if (typeof type == 'undefined') {
                this.player.PopupBitrateWindow(url, data);
            } else {
                var dataString = JSON.stringify(data);
                this.player.PopupShareWindow(dataString);
            }
        } catch (e) {
            alert('player error - PopupBitrateWindow/PopupShareWindow');
        }
    }
    ;
    this.openShareWindow = function(data) {
        try {
            var dataString = JSON.stringify(data);
            this.player.PopupShareWindow(dataString);
        } catch (e) {
            alert('player error - PopupShareWindow');
        }
    }
    this.resizeClientWindow = function(width, height) {
        try {
            this.player.SetPageSize(width, height);
        } catch (e) {
            alert('player error - SetPageSize');
        }
    }
    ;
    this.getMenu = function() {
        try {
            this.player.GetSongList();
        } catch (e) {
            alert('player error - GetSongList');
        }
    }
    ;
    this.setScript = function(interface) {
        try {
            this.player.SetScriptCallback(interface);
        } catch (e) {
            alert('player error - SetScriptCallback');
        }
    }
    ;
    this.ShowPayWnd = function() {
        try {
            this.player.ShowPaymentWnd();
        } catch (e) {
            alert("player error - ShowPaymentWnd");
        }
    }
    ;
    this.openSinglePointPayWnd = function(song) {
        try {
            this.player.PopupSinglePointPaymentWindow(song);
        } catch (e) {
            alert("player error - PopupSinglePointPaymentWindow");
        }
    }
    ;
    this.OpenPaymentWindow = function(type, typeid) {
        try {
            this.player.OpenPaymentWindow(type, typeid);
        } catch (e) {
            alert("player error - OpenPaymentWindow");
        }
    }
    ;
    this.NotifyPaymentResult = function(type, flag) {
        try {
            this.player.NotifyPaymentResult(type, flag);
        } catch (e) {
            alert("player error - NotifyPaymentResult");
        }
    }
    ;
    this.markNavigate = function(url) {
        try {
            this.player.MarkNavigate(url);
        } catch (e) {
            alert("player error - MarkNavigate");
        }
    }
    ;
    this.dislikeRadioSong = function() {
        try {
            this.player.DislikeRadioSong();
        } catch (e) {
            alert("player error - DislikeRadioSong");
        }
    }
    ;
    this.openSingleSongInfoPage = function() {
        try {
            this.player.OpenSingleSongInfoPage();
        } catch (e) {
            alert("player error - OpenSingleSongInfoPage");
        }
    }
    this.openPage = function(url) {
        try {
            this.player.DynamicOpenPage(url);
        } catch (e) {
            alert('player error - DynamicOpenPage');
        }
    }
    ;
    this.closePage = function() {
        try {
            this.player.DynamicClosePage();
        } catch (e) {
            alert('player error - DynamicClosePage');
        }
    }
    ;
    this.ugcCollectSongs = function(list_id, list_name, list_type, is_collect) {
        try {
            this.player.AddCloudSongList2(list_id, list_name, list_type, is_collect);
        } catch (e) {
            alert('player error - AddCloudSongList2');
        }
    }
    ;
    this.ShareWithFriends = function(json_string) {
        try {
            this.player.ShareWithFriends(json_string);
        } catch (e) {
            alert('player error - ShareWithFriends');
        }
    }
    ;
    this.AddUserInteractMessage = function(json_string) {
        try {
            this.player.AddUserInteractMessage(json_string);
        } catch (e) {
            alert('player error - AddUserInteractMessage');
        }
    }
    ;
    this.GetShareInfo = function(is_need_clear) {
        try {
            var shareInfo = this.player.GetShareInfo(is_need_clear);
            shareInfo = $.parseJSON(shareInfo);
        } catch (e) {
            var shareInfo = {};
            alert('player error - GetShareInfo');
        }
        return shareInfo;
    }
    ;
    this.NotifyUnreadMsgCount = function(num) {
        try {
            this.player.NotifyUnreadMsgCount(num);
        } catch (e) {
            alert('player error - NotifyUnreadMsgCount');
        }
    }
    ;
    this.GoBack = function() {
        try {
            this.player.GoBack();
        } catch (e) {
            alert('player error - GoBack');
        }
    }
    ;
    this.updateCommentNums = function(tag) {
        try {
            this.player.NotifySonglistCommentsCount(tag);
        } catch (e) {
            alert('player error - NotifySonglistCommentsCount');
        }
    }
    ;
    this.OpenImageBrowser = function(count) {
        try {
            this.player.OpenImageBrowser(count);
        } catch (e) {
            alert('player error - OpenImageBrowser');
        }
    }
    ;
    this.NotifyDynamicClose = function() {
        try {
            this.player.NotifyDynamicClose();
        } catch (e) {
            alert('player error - NotifyDynamicClose');
        }
    }
    ;
    this.NavigateToUserCenter = function(nickname) {
        try {
            this.player.NavigateToUserCenter(nickname);
        } catch (e) {
            alert('player error - NavigateToUserCenter');
        }
    }
    ;
    this.ReloadPage = function() {
        try {
            this.player.ReloadPage();
        } catch (e) {
            alert('player error - ReloadPage');
        }
    }
    ;
    this.JumpToPage = function(page_type, page_id) {
        try {
            this.player.JumpToPage(page_type, page_id);
        } catch (e) {
            alert('player error - JumpToPage');
        }
    }
    ;
    this.OpenUrl = function(url, isIEBrowser, needLogin) {
        try {
            if (typeof url == "undefined" || url == "") {
                return;
            }
            url = encodeURIComponent(url);
            this.player.OpenUrl(url, isIEBrowser, needLogin);
        } catch (e) {
            alert("player error - OpenUrl");
        }
    }
    this.prototype = Object.extend(this, {
        "sucess": true
    });
}
Object.extend = function(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}
;
;var playerInterface = (function() {
    var is_download = 0
      , is_refresh_download = 0
      , is_collect = 0
      , is_save_list = 0
      , is_private_radio = 0
      , is_share_message = 0
      , is_share_to_dynamic = 0;
    var setIsDownload = function(value) {
        is_download = value;
    }
      , setIsRefreshDownload = function(value) {
        is_refresh_download = value;
    }
      , setIsCollect = function(value) {
        is_collect = value;
    }
      , setIsSaveList = function(value) {
        is_save_list = value;
    }
      , setIsPrivateRadio = function(value) {
        is_private_radio = value;
    }
      , setIsShareMessage = function(value) {
        is_share_message = value;
    }
      , setIsShareToDynamic = function(value) {
        is_share_to_dynamic = value;
    }
      , clearLoginCallBack = function() {
        setIsDownload(0);
        setIsRefreshDownload(0);
        setIsCollect(0);
        setIsSaveList(0);
        setIsPrivateRadio(0);
        setIsShareMessage(0);
        setIsShareToDynamic(0);
    };
    return {
        on_search_result: function(type, info) {
            if (info && info != "") {
                var url = "";
                info = $.parseJSON(info);
                if (type == 1) {
                    var query = info.song_title + " " + info.artist_name;
                    url = "/2018/app/search/songList.php?qword=" + encodeURIComponent(query);
                } else if (type == 2) {
                    url = "/2018/static/singer/person_" + info.artist_id + "_" + info.u_id + "_1.html";
                } else if (type == 3) {
                    url = "/2018/static/singer/album_" + info.album_id + "_1.html";
                } else {
                    var query = info.query || "";
                    if (query == "") {
                        return;
                    } else {
                        url = "/2018/app/search/songList.php?qword=" + encodeURIComponent(query);
                    }
                }
                var host = window.location.host;
                HOST_URL = 'http://' + host;
                url = HOST_URL + url;
                if (client.sucess) {
                    client.markNavigate(url);
                }
                top.location.href = url;
                return;
            } else {
                alert("error:search info is empty!");
            }
        },
        on_search_result_ugc: function(type, info) {
            if (info && info != "") {
                var url = "";
                info = $.parseJSON(info);
                if (type == 1) {
                    var query = info.song_title + " " + info.artist_name;
                    url = "/2018/app/search/searchListUgc.php?qword=" + encodeURIComponent(query);
                } else if (type == 2) {
                    url = "/2018/static/singer/person_" + info.artist_id + "_" + info.u_id + "_1.html";
                } else if (type == 3) {
                    url = "/2018/static/singer/album_" + info.album_id + "_1.html";
                } else {
                    var query = info.query || "";
                    if (query == "") {
                        return;
                    } else {
                        url = "/2018/app/search/searchListUgc.php?qword=" + encodeURIComponent(query);
                    }
                }
                var host = window.location.host;
                HOST_URL = 'http://' + host;
                url = HOST_URL + url;
                if (client.sucess) {
                    client.markNavigate(url);
                }
                top.location.href = url;
                return;
            } else {
                alert("error:search info is empty!");
            }
        },
        on_callback_tip: function(info) {
            if (info && info != "") {
                info = $.parseJSON(info);
                if (typeof info.result == "undefined")
                    info.result = 0;
                if (info.type == 2) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('addSuccess', "已添加到歌单");
                    } else {
                        Common_Layer.init_tip('addSuccess', "添加失败", 'icon2');
                    }
                } else if (info.type == 4) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('addSuccess', "已收藏为歌单");
                    } else {
                        Common_Layer.init_tip('addSuccess', "收藏失败", 'icon2');
                    }
                } else if (info.type == 100) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('client101', "已添加到收藏");
                    } else {
                        Common_Layer.init_tip('client101', "收藏失败", 'icon2');
                    }
                } else if (info.type == 101) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('client101', "已取消收藏");
                    } else {
                        Common_Layer.init_tip('client101', "取消失败", 'icon2');
                    }
                } else if (info.type == 102) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('client102', "已开启高品质试听");
                    } else {
                        Common_Layer.init_tip('client102', "已关闭高品质试听");
                    }
                } else if (info.type == 103) {
                    if (info.result == 1) {
                        Common_Layer.init_tip('client103', "发送成功");
                    } else {
                        Common_Layer.init_tip('client103', "发送失败，请重试");
                    }
                } else if (info.type === 104) {
                    Common_Layer.init_tip('client104', '自动为您跳过付费歌曲');
                } else if (info.type === 105) {
                    Common_Layer.init_tip('client105', '没有正在播放的歌曲哦');
                } else if (info.type == 1000) {
                    var content = info.content;
                    var icon = content.icon == 2 ? "icon2" : "";
                    if (typeof content.text != "undefined" && content.text != "") {
                        Common_Layer.init_tip(content.id, content.text, icon);
                    } else {
                        alert("error:tip info content error!");
                    }
                }
            } else {
                alert("error:tip info is empty!");
            }
            return;
        },
        on_rmenu_result: function(data) {
            var menu = $.parseJSON(data);
            if ($.isArray(menu)) {
                $.fn.ttRmenu.menu2(menu);
            } else {
                if (menu.massop.length < 4) {
                    $('#rmenuScroll').height(jsondata.massop.length * 34);
                    if (menu.massop.length != 0) {
                        $('.firstline').css('display', 'block');
                    }
                } else {
                    $('#rmenuScroll').height(128);
                    $('.firstline').css('display', 'block');
                }
                var SonglistContent = template('mySongList', menu);
                $('#songListWrap').empty().append(SonglistContent);
                $('#rmenuScroll').jScrollPane();
            }
            return;
        },
        on_login_status_changed: function() {
            var clientInfo = {}
              , client = new Client();
            if (client.sucess)
                clientInfo = client.getClientInfo();
            var isLogin = client.checkIsLogin();
            if (isLogin) {
                $.ajax({
                    type: "POST",
                    url: "/2018/app/user/reset.php",
                    data: {
                        'bduss': bduss,
                        'token_': token_
                    },
                    dataType: "json",
                    success: function(jsondata) {}
                })
            }
            if (is_download == 1) {}
            if (is_refresh_download == 1) {
                ttp_download.reset();
                setIsRefreshDownload(0);
            }
            if (is_collect == 1) {
                if (isLogin)
                    window.loginBack_collectSongs();
                setIsCollect(0);
            }
            if (is_save_list == 1) {}
            if (is_share_message == 1) {
                if (isLogin) {
                    var login_user_id = clientInfo.user_id;
                    getMessageFriendList(login_user_id);
                }
                setIsShareMessage(0);
            }
            if (is_share_to_dynamic == 1) {
                if (isLogin) {
                    var songInfo = client.GetShareInfo();
                    if (!songInfo) {
                        var songInfos = client.getSongInfo();
                        songInfo = songInfos[0];
                    }
                    var songInfoStr = JSON.stringify(songInfo);
                    client.ShareWithFriends(songInfoStr);
                }
                setIsShareToDynamic(0);
            }
            if ($("#rdli_private")[0]) {
                if (is_private_radio == 1) {
                    if (isLogin) {
                        try {
                            loginBack_play_privateRadio();
                        } catch (e) {}
                    }
                    setIsPrivateRadio(0);
                }
            }
            if ($("#autoLoginDiv")[0]) {
                if (isLogin)
                    $("#autoLoginDivBorder").remove();
            }
            if (window.location.href.indexOf('dynamics/index.html') > -1) {
                window.location.reload();
            }
            return;
        },
        on_login_close: function() {
            clearLoginCallBack();
        },
        on_radio_changed: function() {
            if ($("#rdInfo")[0]) {
                try {
                    radio_init(true);
                } catch (e) {}
            }
            return;
        },
        on_check_auto_login: function() {
            var clientInfo = {}
              , client = new Client();
            if (client.sucess)
                clientInfo = client.getClientInfo();
            if (typeof clientInfo.bduss == "undefined" || clientInfo.bduss == "") {
                var url = '/2018/app/user/userInfo.php';
                $.getJSON(url, [], function(data) {
                    if (data.success) {
                        var user = data.user_info;
                        var html = '<div id="autoLoginDivBorder"><div id="autoLoginDiv"> <a href="javascript:;" class="close"></a>' + '<div id="autoLoginContent">' + '<p class="text title">&nbsp;&nbsp;&nbsp;&nbsp;检测到您已登陆千千帐号，点击头像快速登录</p>' + '<div class="img_border"><img src="' + user.avatar_mini + '" /><a href="javascript:;" class="img_layer"></a></div>' + '<p class="text">' + user.user_name + '</p>' + '<div class="other"><a href="javascript:;" >其他帐号登陆</a></div>' + '</div>' + '</div></div>';
                        var $autoLoginDiv = $(html);
                        $("body").append($autoLoginDiv);
                        $("a.close", $autoLoginDiv).click(function() {
                            $autoLoginDiv.remove();
                            return false;
                        });
                        $("a.img_layer", $autoLoginDiv).click(function() {
                            if (client.sucess)
                                client.clientLoginStatus(user);
                            $autoLoginDiv.remove();
                            return false;
                        });
                        $(".other a", $autoLoginDiv).click(function() {
                            if (client.sucess)
                                client.clientLogin();
                            $autoLoginDiv.remove();
                            return false;
                        });
                    }
                });
            }
            return;
        },
        on_return_online: function() {
            try {
                $.fn.ttRmenu.hide();
            } catch (e) {}
            return;
        },
        on_show_thumbnail: function(imgstr) {
            var imgData = imgstr.split(',');
            var img_count = parseInt($('#uploadImgListCon li').length) + parseInt(imgData.length);
            if (img_count < 6) {
                $('#createDynamicWrapper .add-icon').show();
            } else {
                $('#createDynamicWrapper .add-icon').hide();
            }
            $.each(imgData, function(index, item) {
                var li = '<li class="img-preview"><img src="' + item + '" data-thumbnail="' + item + '"/><span class="delete-btn"></span><span class="upload-loadding"></span></li>';
                $('#createDynamicWrapper #uploadImgListCon').append(li);
                $('#createDynamicWrapper').css('margin-top', '-230px');
            })
        },
        on_upload_image_finish: function(jsonstr) {
            var jsondata = $.parseJSON(jsonstr);
            var thumbnail = jsondata.thumbnail;
            var image_url = jsondata.image_url;
            var imageData = image_url.split('?');
            var pic_url = imageData[0];
            var picStr = $('#createDynamicWrapper #picdata').val();
            if (picStr == "" || typeof picStr == 'undefined') {
                picStr = pic_url;
            } else {
                picStr = picStr + ',' + pic_url;
            }
            $('#uploadImgListCon li').each(function(index, item) {
                if ($(this).find('img').data('thumbnail') == thumbnail) {
                    $(this).find('.upload-loadding').remove();
                }
            });
            $('#createDynamicWrapper #picdata').val(picStr);
        },
        setLoginCallBackType: function(type) {
            if (type == 1) {
                setIsDownload(1);
            } else if (type == 2) {
                setIsRefreshDownload(1);
            } else if (type == 3) {
                setIsCollect(1);
            } else if (type == 4) {
                setIsSaveList(1);
            } else if (type == 5) {
                setIsPrivateRadio(1);
            } else if (type == 6) {
                setIsShareMessage(1);
            } else if (type == 7) {
                setIsShareToDynamic(1);
            } else {}
        },
        push_msg_arrive: function(jsonstring) {
            var current_page_url = window.location.href;
            var is_msgcenter_index_page = current_page_url.indexOf('msgcenter/index');
            var is_personal_index_page = current_page_url.indexOf('personal/index_');
            var is_dynamics_index_page = current_page_url.indexOf('dynamics/index.html');
            var jsondata = $.parseJSON(jsonstring);
            if (jsondata) {
                var msg_body = $.parseJSON(jsondata.msg_body);
                var serverid = msg_body.serverid;
                if (serverid == 10001 && (is_msgcenter_index_page > -1 || is_personal_index_page > -1)) {
                    update_msg(msg_body);
                    var markReadFlag = markRead(msg_body);
                    if (!markReadFlag) {
                        getContactList({}, false);
                        getMessageCount();
                    }
                } else if (serverid == 10004) {
                    var message_type = msg_body.message_type;
                    if (message_type == 1) {
                        getMessageCount();
                        getContactList({}, true);
                    } else if (message_type == 2) {
                        var ugcCenterObj = new ugccenterInterface();
                        ugcCenterObj.checkFollRedPoint({
                            "typeids": 3
                        }).done(function(jsondata) {
                            var error_code = jsondata.error_code;
                            if (error_code == ugcCenterObj.SUCCESS_CODE) {
                                var dynamic_unread_nums = parseInt(jsondata.result.dynamic_flag);
                                if (dynamic_unread_nums > 0) {
                                    $('#pushInfoBox').show();
                                }
                            }
                        });
                    }
                } else if (serverid == 10002) {
                    var content = $.parseJSON(msg_body.content);
                    var source_type = content.source_type;
                    if (source_type != 7) {
                        Common_Layer.init_tip('addSuccess', "发送成功");
                        if (source_type == 0) {
                            if (is_msgcenter_index_page > -1 && $('#letterContainer').length > 0) {
                                getContactList({}, false);
                            }
                            if ($('#chatWindowScroll').length > 0) {
                                update_msg(msg_body);
                            }
                        }
                    } else if (source_type == 7) {
                        isSendSuccessFlag = true;
                    }
                } else if (serverid == 10003 && (is_msgcenter_index_page > -1)) {
                    getMessageCount();
                }
            }
        }
    }
}
)();
var client = new Client();
if (client.sucess)
    client.setScript(playerInterface);
;var linkUrl = "/2018/app/link/getLinks.php";
var client = new Client();
var newChain = false;
var newChain2 = false;
var cacheData = null;
var recursionDebug = false;
var safeFlag = client.sucess ? client.sucess : recursionDebug;
var HOST_URL = "http://" + window.location.host;
function recursionData(param_data, param_callBack, param_songs, firstSongData) {
    if (safeFlag) {
        if ((param_callBack == 5 || param_callBack == 1) && (checkVersionGt('11.1.4'))) {
            if (client.sucess)
                client.linkPlay(param_songs);
        } else if ((param_callBack == 2) && (checkVersionGt('11.1.4'))) {
            linkAddSongs(param_songs);
        } else {
            cacheData = param_data;
            var data = {
                "param": (new BaseEncode()).encode(JSON.stringify(param_data))
            };
            $.post(linkUrl, data, function(song) {
                var errorCode = song.error_code;
                var songs = [];
                if (song) {
                    songs.push(song);
                }
                if (typeof param_songs != "undefined" && param_songs.length > 0) {
                    songs = songs.concat(param_songs);
                }
                if (typeof param_callBack != "undefined" && param_callBack > 0) {
                    if (param_callBack == 1) {
                        if (song) {
                            if (errorCode == 22000) {
                                if (song.copy_type == 2) {
                                    Common_Layer.init_tip('addSuccess', "您好，应版权方要求，该歌曲下载后，即可播放哦~", "icon3");
                                    return false;
                                } else if (song.copy_type == 0) {
                                    Common_Layer.init_tip('addSuccess', "应版权方要求，该歌曲暂时无法播放", "icon2");
                                    return false;
                                }
                                if (!song.file_list[0].url && !newChain) {
                                    newChain = true;
                                    if (song.file_list[0].kbps == 320) {
                                        cacheData.rate = 128;
                                        recursionData(cacheData, param_callBack, songs[0]);
                                    } else {
                                        newChain = false;
                                        if (client.sucess)
                                            isUseByBdpayForVip();
                                    }
                                } else if (!song.file_list[0].url && newChain) {
                                    newChain = false;
                                    if (client.sucess)
                                        isUseByBdpayForVip();
                                } else {
                                    newChain = false;
                                    if (client.sucess)
                                        client.linkPlay(songs);
                                }
                            } else if (errorCode == 22467) {
                                if (client.sucess)
                                    isUseByBdpayForVip();
                            } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                                if (!songs[0].album_id) {
                                    if (firstSongData.album_id) {
                                        songs[0].album_id = firstSongData.album_id;
                                    } else if (song.buy_url) {
                                        var url = song.buy_url;
                                        var arr = url.split('/');
                                        songs[0].album_id = arr[arr.length - 1];
                                    }
                                }
                                if (client.sucess)
                                    isUseByBdpayForSinglePoint(songs);
                            }
                        }
                    } else if (param_callBack == 5) {
                        if (song) {
                            if (errorCode == 22000) {
                                if (!song.file_list[0].url && !newChain2) {
                                    newChain2 = true;
                                    if (song.file_list[0].kbps == 320) {
                                        cacheData.rate = 128;
                                        recursionData(cacheData, param_callBack, songs.slice(1, songs.length));
                                    } else {
                                        newChain2 = false;
                                        if (client.sucess)
                                            client.linkPlay(songs);
                                    }
                                } else if (!song.file_list[0].url && newChain2) {
                                    newChain2 = false;
                                    if (client.sucess)
                                        client.linkPlay(songs);
                                } else {
                                    newChain2 = false;
                                    if (client.sucess)
                                        client.linkPlay(songs);
                                }
                            } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003 || errorCode == 22467) {
                                Common_Layer.init_tip('addSuccess', "自动为您跳过付费歌曲", 'icon2');
                                songs[0] = firstSongData;
                                if (client.sucess)
                                    client.linkPlay(songs);
                            } else {
                                songs[0] = firstSongData;
                                if (client.sucess)
                                    client.linkPlay(songs);
                            }
                        }
                    } else if (param_callBack == 2) {
                        if (song) {
                            if (errorCode == 22000) {
                                if (!song.file_list[0].url && !newChain) {
                                    newChain = true;
                                    if (song.file_list[0].kbps == 320) {
                                        cacheData.rate = 128;
                                        recursionData(cacheData, 2, songs[0]);
                                    } else {
                                        newChain = false;
                                        if (client.sucess)
                                            isUseByBdpayForVip();
                                    }
                                } else if (!song.file_list[0].url && newChain) {
                                    newChain = false;
                                    if (client.sucess)
                                        isUseByBdpayForVip();
                                } else {
                                    newChain = false;
                                    linkAddSongs(songs);
                                }
                            } else if (errorCode == 22467) {
                                if (client.sucess)
                                    isUseByBdpayForVip();
                            } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                                if (!songs[0].album_id) {
                                    if (firstSongData.album_id) {
                                        songs[0].album_id = firstSongData.album_id;
                                    } else if (song.buy_url) {
                                        var url = song.buy_url;
                                        var arr = url.split('/');
                                        songs[0].album_id = arr[arr.length - 1];
                                    }
                                }
                                if (client.sucess)
                                    isUseByBdpayForSinglePoint(songs);
                            }
                        }
                    } else if (param_callBack == 3) {
                        if (errorCode != 22000) {
                            songs[0] = firstSongData;
                        }
                        if (client.sucess)
                            client.linkDownload(songs);
                        ttp_download.do_close();
                    } else if (param_callBack == 31) {
                        if (errorCode == 22467) {
                            if (client.sucess)
                                isUseByBdpayForVip();
                        } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                            if (!songs[0].album_id) {
                                if (firstSongData.album_id) {
                                    songs[0].album_id = firstSongData.album_id;
                                } else if (song.buy_url) {
                                    var url = song.buy_url;
                                    var arr = url.split('/');
                                    songs[0].album_id = arr[arr.length - 1];
                                }
                            }
                            if (client.sucess)
                                isUseByBdpayForSinglePoint(songs);
                        } else {
                            openDownloadPage(songs);
                            ttp_download.init(1, songs);
                        }
                    } else if (param_callBack == 32) {
                        if (errorCode == 22467 || errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                            songs[0] = firstSongData;
                        }
                        ttp_download.init(2, songs);
                    } else if (param_callBack == 331) {
                        if (errorCode == 22467) {
                            if (client.sucess)
                                isUseByBdpayForVip();
                        } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                            if (!songs[0].album_id) {
                                if (firstSongData.album_id) {
                                    songs[0].album_id = firstSongData.album_id;
                                } else if (song.buy_url) {
                                    var url = song.buy_url;
                                    var arr = url.split('/');
                                    songs[0].album_id = arr[arr.length - 1];
                                }
                            }
                            if (client.sucess)
                                isUseByBdpayForSinglePoint(songs);
                        } else {
                            openDownloadPage(songs);
                            ttp_download.init(3, songs);
                        }
                    } else if (param_callBack == 332) {
                        if (errorCode == 22467 || errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                            songs[0] = firstSongData;
                        }
                        ttp_download.init(4, songs);
                    } else if (param_callBack == 8) {
                        if (errorCode == 22000) {
                            if (!song.file_list[0].url && !newChain) {
                                newChain = true;
                                if (song.file_list[0].kbps == 320) {
                                    cacheData.rate = 128;
                                    recursionData(cacheData, param_callBack, songs[0]);
                                } else {
                                    newChain = false;
                                    if (client.sucess)
                                        isUseByBdpayForVip();
                                }
                            } else if (!song.file_list[0].url && newChain) {
                                newChain = false;
                                if (client.sucess)
                                    isUseByBdpayForVip();
                            } else {
                                var url = HOST_URL + '/2018/app/share/shareSong.html';
                                if (client.sucess) {
                                    client.openClientWindow(url, new Array(songs[0]));
                                }
                            }
                        } else if (errorCode == 22467) {
                            if (client.sucess)
                                isUseByBdpayForVip();
                        } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                            if (!songs[0].album_id) {
                                if (firstSongData.album_id) {
                                    songs[0].album_id = firstSongData.album_id;
                                } else if (song.buy_url) {
                                    var url = song.buy_url;
                                    var arr = url.split('/');
                                    songs[0].album_id = arr[arr.length - 1];
                                }
                            }
                            if (client.sucess)
                                isUseByBdpayForSinglePoint(songs);
                        }
                        $.ClickMonkey({
                            song_id: songs[0].song_id,
                            song_title: songs[0].song_title,
                            type: "click",
                            act: 'share'
                        });
                    }
                }
            }, 'json');
        }
    }
}
function checkVersionGt(oldVersion) {
    var oldVersion = oldVersion || '9.1.17.0';
    var checkGt = checkVersion(oldVersion).gt;
    return checkGt;
}
;function checkVersionLt(oldVersion) {
    var checkLt = checkVersion(oldVersion).lt;
    return checkLt;
}
function playSong(song, callbackType, oSongs) {
    var callbackType = callbackType || 1;
    var newSongs = [];
    if (oSongs) {
        newSongs = oSongs;
    } else {
        newSongs.push(song);
    }
    getLinkCommonParamsData(callbackType, newSongs, song);
}
function playSongs(songs) {
    var song = songs[0];
    var oSongs;
    if (!checkVersionGt('11.1.4')) {
        oSongs = songs.slice(1, songs.length);
    } else {
        oSongs = songs;
    }
    var rate = 128;
    if (client.sucess && client.getClientInfo().is_hq_enabled)
        rate = 320;
    oSongs = linkEmptyData(oSongs, rate);
    if (songs.length > 1) {
        playSong(song, 5, oSongs);
    } else if (songs.length == 1) {
        playSong(song, 1, oSongs);
    }
}
function addSong(song, oSongs) {
    if (oSongs.length == 0) {
        oSongs.push(song)
    }
    getLinkCommonParamsData(2, oSongs, song);
}
function addSongs(songs) {
    var song = songs[0];
    var oSongs;
    if (!checkVersionGt('11.1.4')) {
        oSongs = songs.slice(1, songs.length);
    } else {
        oSongs = song;
    }
    var rate = 128;
    if (client.sucess && client.getClientInfo().is_hq_enabled)
        rate = 320;
    oSongs = linkEmptyData(oSongs, rate);
    if (songs.length > 1) {
        Common_Layer.init_tip('addSuccess', "已添加到试听列表");
        if (client.sucess)
            client.linkAdd(songs);
    } else if (songs.length == 1) {
        addSong(song, oSongs);
    } else {
        Common_Layer.init_tip('addSuccess', "添加失败", 'icon2');
    }
}
function linkAddSongs(songs) {
    if (songs.length > 0) {
        if (client.sucess) {
            Common_Layer.init_tip('addSuccess', "已添加到试听列表");
            client.linkAdd(songs);
        }
    } else {
        Common_Layer.init_tip('addSuccess', "添加失败", 'icon2');
    }
}
function downloadSongsByRate(rate, songs) {
    var song = songs[0];
    var oSongs = songs.slice(1, songs.length);
    oSongs = linkEmptyData(oSongs, rate);
    if (typeof song.is_cloud == "undefined" || song.is_cloud == "")
        song.is_cloud = 0;
    song.is_cloud = 0;
    getLinkCommonParamsData(3, oSongs, song, rate);
}
function downloadSong(song, oSongs) {
    if (typeof song.is_cloud == "undefined" || song.is_cloud == "")
        song.is_cloud = 0
    var callBack = 31;
    if (typeof oSongs != "undefined" && oSongs.length > 0) {
        callBack = 32;
    }
    getLinkCommonParamsData(callBack, oSongs, song);
}
function downloadSongs(songs) {
    var song = songs[0];
    var oSongs = songs.slice(1, songs.length);
    oSongs = getAlbumImageUrl(oSongs, 2);
    downloadSong(song, oSongs);
}
var loginBack_collectSongs_songIds, loginBack_collectSongs_songs;
function loginBack_collectSongs() {
    collectSongs(loginBack_collectSongs_songIds, loginBack_collectSongs_songs);
}
function collectSongs(songIds, songs) {
    var bduss = ""
      , token_ = "";
    var clientInfo = client.getClientInfo();
    var bduss = clientInfo.bduss
      , token_ = clientInfo.token_;
    if (!client.checkIsLogin()) {
        loginBack_collectSongs_songIds = songIds;
        loginBack_collectSongs_songs = songs;
        if (client.sucess)
            client.clientLogin(3);
        return;
    }
    if (songIds.length > 0) {
        var url = '/2018/app/cloud/handleSong.php';
        var data = {
            "bduss": bduss,
            "token_": token_,
            "songId": songIds.join("@@"),
            "type": 1
        };
        $.getJSON(url, data, function(data) {
            var errorCode = data.error_code;
            if (errorCode == 22000) {
                if (checkVersionGt('10.1.0') && checkVersionLt('11.1.3.2')) {
                    Common_Layer.init_tip('collectSucc', "已添加到喜欢");
                } else {
                    Common_Layer.init_tip('collectSucc', "已添加到收藏");
                }
                $.ClickMonkey({
                    res: '1',
                    page: '',
                    pos: 'fav',
                    sub: '',
                    type: "click",
                    song_id: songIds.join(',')
                });
                songs = linkEmptyData(songs, "");
                if (client.sucess)
                    client.favoriteSongs(songs);
            } else if (errorCode == 22011) {
                Common_Layer.init_tip('collectMore', "操作频繁，请稍后再试", 'icon2');
            } else if (errorCode == 22322) {
                if (checkVersionGt('10.1.0') && checkVersionLt('11.1.3.2')) {
                    Common_Layer.init_tip('collectSucc', "已添加到喜欢");
                } else {
                    Common_Layer.init_tip('collectSucc', "已添加到收藏");
                }
                return false;
            } else if (errorCode == 22469 || errorCode == 24002 || errorCode == 24003) {
                var songsData = [];
                if (data) {
                    songsData.push(data);
                }
                if (client.sucess)
                    isUseByBdpayForSinglePoint(songsData);
            } else if (errorCode == 22467) {
                if (client.sucess)
                    isUseByBdpayForVip();
            } else {
                $.ClickMonkey({
                    res: '0',
                    page: '',
                    pos: 'fav',
                    sub: '',
                    type: "click",
                    song_id: songIds.join(',')
                });
                if (checkVersionGt('10.1.0') && checkVersionLt('11.1.3.2')) {
                    Common_Layer.init_tip('collectFail', "喜欢失败", 'icon2');
                } else {
                    Common_Layer.init_tip('collectFail', "收藏失败", 'icon2');
                }
            }
        });
    }
}
function shareSong(song) {
    getLinkCommonParamsData(8, '', song);
}
function playMV(song) {
    var songs = [];
    songs.push(song);
    if (client.sucess)
        client.linkPlayMV(songs);
}
function getLinkCommonParamsData(callback_type, oSongs, song, rate) {
    var key = getLinkKey(song);
    rate = rate ? rate : 128;
    if (callback_type != 3) {
        if (client.sucess && client.getClientInfo().is_hq_enabled)
            rate = '320';
    }
    var userBduss = ""
      , token_ = "";
    var client_version = '';
    if (client.sucess) {
        var clientInfo = client.getClientInfo();
        userBduss = clientInfo.bduss;
        token_ = clientInfo.token_;
        client_version = clientInfo.client_version;
    }
    var resource = 1;
    if (typeof song.is_cloud == "undefined" || song.is_cloud == "")
        song.is_cloud = 0;
    if ((typeof song.del_status != "undefined" && song.del_status == 0) || (typeof song.copy_type != "undefined" && song.copy_type == 1)) {
        resource = 2;
    }
    var callback_type_data = {
        "1": "playSong",
        "5": "playSong",
        "2": "add",
        "3": "downByRate",
        "331": "down",
        "332": "down",
        "31": "down",
        "32": "down",
        "8": "share"
    };
    var data = {
        'playSong': {
            "key": key,
            "rate": rate,
            "linkType": 0,
            "isCloud": song.is_cloud,
            "resource": resource
        },
        'add': {
            "key": key,
            "rate": rate,
            "linkType": 0,
            "isCloud": song.is_cloud,
            "resource": resource
        },
        'downByRate': {
            "key": key,
            "rate": rate,
            "linkType": 1,
            "isCloud": song.is_cloud,
            "resource": resource
        },
        'down': {
            "key": key,
            "default": true,
            "linkType": 1,
            "isCloud": song.is_cloud,
            "resource": resource
        },
        'share': {
            "key": key,
            "rate": rate,
            "linkType": 0,
            "isCloud": song.is_cloud,
            "resource": resource
        },
        'default': {
            "key": key,
            "rate": rate,
            "linkType": 0,
            "isCloud": song.is_cloud,
            "resource": resource
        }
    };
    var callback_string = 'default';
    callback_string = callback_type_data[callback_type];
    var linkdata = data[callback_string];
    if (userBduss) {
        $.extend(linkdata, {
            "bduss": userBduss,
            "version": client_version
        });
    } else if (token_) {
        $.extend(linkdata, {
            "token_": token_,
            "version": client_version
        });
    } else {
        $.extend(linkdata, {
            "version": client_version
        });
    }
    recursionData(linkdata, callback_type, oSongs, song);
}
function openDownloadPage(songs) {
    var song = songs[0];
    var host = window.location.host;
    var url = 'http://' + host + '/2018/app/download/download.html';
    if (client.sucess)
        client.openClientWindow(url, songs);
}
function playMVByID(mv_id) {
    if (client.sucess) {
        client.playMV(mv_id);
    }
}
function getLinkKey(song) {
    var key = song.song_id;
    if (key == 0 || key == "") {
        if (song.song_title == "" && song_artist == "") {
            key = song.append;
        } else if (song.song_title == "") {
            key = song_artist;
        } else if (song.song_artist == "") {
            key = song.song_title;
        } else {
            key = song.song_title + "$$" + song.song_artist;
        }
    }
    return key;
}
function linkEmptyData(songs, rate) {
    var reSong = [];
    for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        song.file_list = [];
        if (typeof song.is_cloud == "undefined" || song.is_cloud != "") {
            song.is_cloud = 0;
        }
        if (typeof rate != "undefined" && rate != "") {
            var file = {
                "kbps": rate
            };
            (song.file_list).push(file);
        }
        reSong.push(song);
    }
    return reSong;
}
function getAlbumImageUrl(songs, n) {
    for (var i = 0; i < songs.length; i++) {
        if (i >= n)
            break;
        var img = songs[i].album_image_url;
        if (!img || img == null || img == "" || img == "http://musicdata.baidu.com/data2/pic/") {
            $.ajax({
                async: false,
                dataType: "json",
                url: "/2018/app/link/getImg.php",
                data: {
                    "songid": songs[i].song_id
                },
                success: function(image) {
                    songs[i].album_image_url = image;
                },
                timeout: 1000
            });
        }
    }
    return songs;
}
function checkLoginStatus() {
    var isLogin = false;
    if (client.sucess && (typeof client.getClientInfo().bduss != "undefined" && client.getClientInfo().bduss != ""))
        isLogin = true;
    return isLogin;
}
var globalLinks = {
    markNavigate: function(url) {
        var host = window.location.host;
        var nav_host_url = "http://" + host;
        if ((url.indexOf("http://") > -1) || url.indexOf("https://") > -1) {
            url = url;
        } else {
            url = nav_host_url + url;
        }
        if (client.sucess) {
            client.markNavigate(url);
            window.location.href = url;
            return false;
        }
        window.location.href = url;
    },
    singer: function() {
        var url = "/2018/static/singer/singer_0_0__1.html";
        this.markNavigate(url);
    },
    singerPerson: function(artist_id, u_id) {
        var url = "/2018/static/singer/person_" + artist_id + "_" + u_id + "_1.html";
        this.markNavigate(url);
    },
    singerAlbum: function(artist_id, u_id) {
        var url = "/2018/static/singer/personAlbum_" + artist_id + "_" + u_id + "_1.html";
        this.markNavigate(url);
    },
    singerDesc: function(artist_id, u_id) {
        var url = "/2018/static/singer/personDesc_" + artist_id + "_" + u_id + "_1.html";
        this.markNavigate(url);
    },
    album: function(album_id) {
        var url = "/2018/static/singer/album_" + album_id + ".html";
        this.markNavigate(url);
    },
    bangdanList: function(bangdan_id) {
        var url = "/2018/static/bangdan/bangdanList_" + bangdan_id + "_1.html";
        this.markNavigate(url);
    },
    dailyRcList: function() {
        var url = "/2018/templates/recommend/dailyRC.html";
        this.markNavigate(url);
    },
    gedanList: function(gedan_id) {
        var url = "/2018/static/gedan/gedanList_" + gedan_id + ".html";
        this.markNavigate(url);
    },
    classifyList: function(m1, m2) {
        var url = "/2018/static/classify/classifyList_" + m1 + "_" + m2 + "_1.html";
        this.markNavigate(url);
    },
    searchSongs: function(query) {
        var version1010 = checkVersionGt('10.1.0');
        if (version1010) {
            var url = "/2018/app/search/searchListUgc.php?qword=" + encodeURIComponent(query);
        } else {
            var url = "/2018/app/search/songList.php?qword=" + encodeURIComponent(query);
        }
        this.markNavigate(url);
    },
    radio: function() {
        var url = "/2018/static/radio/radio.html";
        this.markNavigate(url);
    },
    classify: function() {
        var url = "/2018/static/classify/classify.html";
        this.markNavigate(url);
    },
    bangdan: function() {
        var url = "/2018/static/bangdan/bangdan.html";
        this.markNavigate(url);
    },
    gedan: function() {
        var url = "/2018/static/gedan/gedanIndex__1_1.html";
        this.markNavigate(url);
    },
    topicList: function(topic_code) {
        var url = "/2018/static/topic/topicList_" + topic_code + ".html";
        this.markNavigate(url);
    },
    dynamicsInfo: function(dynamicsid) {
        var url = "/2018/static/dynamics/dynamic_" + dynamicsid + ".html";
        this.markNavigate(url);
    },
    personal: function(nickname) {
        var url = "/2018/static/personal/index_" + nickname + '.html';
        this.markNavigate(url);
    },
    follow: function(nickname) {
        var url = "/2018/static/personal/follow_" + nickname + '.html';
        this.markNavigate(url);
    },
    fans: function(nickname) {
        var url = "/2018/static/personal/fans_" + nickname + '.html';
        this.markNavigate(url);
    },
    personalDynamics: function(nickname) {
        var url = "/2018/static/personal/dynamics_" + nickname + '.html';
        this.markNavigate(url);
    },
    myPersonal: function() {
        var url = "/2018/static/personal/index.html";
        this.markNavigate(url);
    },
    ugctopic: function() {
        var url = "/2018/static/dynamics/ugctopicList.html";
        this.markNavigate(url);
    },
    ugctopicInfo: function(topic_id) {
        var url = "/2018/static/dynamics/ugctopicListInfo_" + topic_id + ".html";
        this.markNavigate(url);
    },
    songCommentList: function(songid) {
        var url = "/2018/static/song/commentList_" + songid + ".html";
        this.markNavigate(url);
    },
    msgCenter: function(hash) {
        var url = '/2018/static/msgcenter/index.html#' + hash;
        globalLinks.markNavigate(url);
    }
}
$('#header li').on("click", "a", function() {
    var url = $(this).attr('href');
    var logdata = {
        "page": "top_nav",
        "type": "click"
    };
    if ($(this).html() == "推荐") {
        logdata.pos = "recommend";
    } else if ($(this).html() == "榜单") {
        logdata.pos = "hotlist";
    } else if ($(this).html() == "歌单") {
        logdata.pos = "songlist";
    } else if ($(this).html() == "电台") {
        logdata.pos = "fm";
    } else if ($(this).html() == "歌手") {
        logdata.pos = "artlist";
    } else if ($(this).html() == "分类") {
        logdata.pos = "classify";
    } else if ($(this).html() == "数字专辑") {
        logdata.pos = "digital_album"
    } else if ($(this).html() == "直播") {
        logdata.pos = "nav_live";
    }
    $.ClickMonkey(logdata);
    globalLinks.markNavigate(url);
});
$('.search_tab li a').click(function() {
    var url = $(this).attr('href');
    globalLinks.markNavigate(url);
});
$('#mainPage').delegate('a', 'click', function() {
    var url = $(this).attr('href');
    globalLinks.markNavigate(url);
});
$('body').delegate('.shareBtn', 'click', function() {
    if (checkVersionGt('10.1.0')) {
        var jsondata = $(this).data('shareinfo');
        if (client.sucess)
            client.openClientWindow(HOST_URL + '/2018/app/share/shareMusic.html', jsondata);
    } else {
        var textHtml = "";
        if ($(this).hasClass("singer_share")) {
            textHtml = "分享歌手"
        } else if ($(this).hasClass("gedan_share")) {
            textHtml = "分享歌单"
        } else if ($(this).hasClass("album_share")) {
            textHtml = "分享专辑"
        }
        updownCommonLayer(textHtml);
    }
});
function updownCommonLayer(textHtml) {
    var $layer = Common_Layer.init_layer("updown", "请升级到最新版本，才可以使用<br/>" + textHtml + "功能");
    window.Common_Layer_Submit_updown = function() {
        window.open("http://download.qianqian.com/channel/1/guanwang");
        Common_Layer.layer_close($layer);
    }
    return;
}
function updateCommonLayer() {
    var $layer = Common_Layer.init_layer("updown", "您需要升级最新版客户端<br/>才能使用这首歌曲哦");
    window.Common_Layer_Submit_updown = function() {
        window.open("http://download.qianqian.com/channel/1/guanwang");
        Common_Layer.layer_close($layer);
    }
    return;
}
var checkVersion = function(version) {
    if (typeof version == 'undefined') {
        return false;
    }
    var client_version = '0.0.0';
    if (client.sucess)
        client_version = client.getClientInfo().client_version;
    var array_version = version.split(".")
      , array_client_version = client_version.split(".");
    var length = array_version.length > array_client_version.length ? array_version.length : array_client_version.length;
    for (var i = 0; i < length; i++) {
        if (typeof array_version[i] == 'undefined') {
            array_version.push("0");
        }
        if (typeof array_client_version[i] == 'undefined') {
            array_client_version.push("0");
        }
        var len_version_i = array_version[i].length
          , len_client_version_i = array_client_version[i].length;
        if (len_version_i !== len_client_version_i) {
            var len = Math.abs(len_version_i - len_client_version_i);
            var add_str = "";
            for (var l = 0; l < len; l++) {
                add_str += "0";
            }
            len_version_i > len_client_version_i ? array_client_version[i] = add_str + array_client_version[i] : array_version[i] = add_str + array_version[i];
        }
    }
    var str_version = array_version.join("")
      , str_client_version = array_client_version.join("");
    var int_version = parseInt(str_version)
      , int_client_version = parseInt(str_client_version);
    return {
        "gt": (int_client_version > int_version),
        "eq": (int_client_version == int_version),
        "lt": (int_client_version < int_version)
    };
};
function skin() {
    var version1002 = checkVersionGt('10.0.2.0');
    var skinVersion = Common_GetCookies('skinVersion');
    if (version1002) {
        $('body').addClass('fixedskin');
    }
}
skin();
resetBdussCookie();
function resetBdussCookie() {
    if (client.sucess) {
        var bduss = client.getClientInfo().bduss;
        var token_ = client.getClientInfo().token_;
        $.ajax({
            type: "POST",
            url: "/2018/app/user/reset.php",
            data: {
                'bduss': bduss,
                'token_': token_
            },
            dataType: "json",
            success: function(jsondata) {}
        })
    }
}
