import QtQuick 2.9
import QtQuick.Window 2.2
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4
import QtQuick.Dialogs 1.1
import QtQuick.Layouts 1.3
import QtGraphicalEffects 1.0
import QtWebEngine 1.5
import QtWebChannel 1.0

import com.mplayer 1.0

Rectangle {
    id:mySearchWindow;
    visible: true;

    width:843;
    height: 624;

    function back(){
        console.log("back");
        mainHtml.goBack();
    }

    function forward(){
        console.log("forward");
        mainHtml.goForward();
    }

    function reload(){
        console.log("reload");
        mainHtml.reload();
    }


    Rectangle{
       id:left_mainUIRectangle;
       color: "#F5F5F7";
       visible: true;
       width: 200;
       height: parent.height;
       anchors.top:  parent.top;
       anchors.left:  parent.left;



       WebEngineView {
                id:leftHtml
                anchors.fill: parent
                url: "qrc:/res/left.html"

                //禁用右键菜单
                onContextMenuRequested: function(request) {
                      request.accepted = true
                }
       }

    }


    //右边是table
    Rectangle{
       id:right_mainUIRectangle;

       anchors.top:  parent.top;
       anchors.left:  left_mainUIRectangle.right;

       visible: true;
       width: parent.width - left_mainUIRectangle.width;
       height: parent.height;


        //需要注册一个WebChannel对象
        WebChannel{
            id:searchChannel
            registeredObjects:[songLst]
        }

        WebEngineView {
                 id:mainHtml
                 anchors.fill: parent
                 url: "qrc:/res/main.html"
                 //url:"http://musicmini.qianqian.com/2018/static/recommend/recommend.html"
                 webChannel:searchChannel;

                 //禁用右键菜单
                 onContextMenuRequested: function(request) {
                       request.accepted = true
                 }

        }
    }


    MSonglst{
        id: songLst
        WebChannel.id: "mSonglst" //这个id可在html中使用

        signal signal_setSonglst(string strSong);

        signal signal_setNewSongLst(string strSong); //设置新歌榜

        signal signal_setHotSongLst(string strSong); //设置热歌榜


        property string curSearchString: "";

        //c++ -->Qml
        onSignalSendToQml: {
            console.log(strSong);
            curSearchString = strSong;
            mainHtml.url = "qrc:/res/search.html"

        }

        onSignalSetNewSongLst: {
            signal_setNewSongLst(strSong);
        }

        onSignalSetHotSongLst: {
            //console.log(strSong);
            signal_setHotSongLst(strSong);
        }


        //扩展的函数
        function playSong(nIndex){
            console.log("playSong");
            var d = songLstModel.sig_PlaySong(nIndex);
            return d
        }

        function playNewSong(){
            console.log("playNewSong");
            songLstModel.sig_PlayNewSong();
        }

        function playHotSong(){
            console.log("playHotSong");
            songLstModel.sig_PlayHotSong();
        }


        function setList(){
            console.log("setList");
            var d = songLstModel.sig_SetList();
            return d
        }

        function setSearchList(){
            console.log("setSearchList");

            signal_setSonglst(curSearchString)
        }


    }



}
