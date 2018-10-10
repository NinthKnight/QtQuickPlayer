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
    id:myLyricWindow;
    visible: true;

    width:843;
    height: 624;

    function reload(){
        console.log("reload");
        mainHtml.reload();
    }

    //需要注册一个WebChannel对象
    WebChannel{
        id:changedId
        registeredObjects:[myObject]
    }

    WebEngineView {
             id:mainHtml
             anchors.fill: parent
             url: "qrc:/res/lyric.html"
             webChannel:changedId

             onContextMenuRequested: function(request) {
                   request.accepted = true
             }
    }

    MLyric{
        id: myObject
        WebChannel.id: "mPlayer" //这个id可在html中使用

        signal signal_setScorll(int time);

        //c++ -->Qml
        onSignalSendToQml: {
            //console.log("onSignalSendToQml" + nTime);
            signal_setScorll(nTime);
        }

        //c++ -->Qml
        onSignalReloadLyric: {
            console.log("onSignalReloadLyric");
            myLyricWindow.reload();
        }

        //扩展的函数
        function hideLyric(){
            console.log("hideLyric");
            lyricModel.hideLyric();
        }

        function getLyric(){
            console.log("getLyric1234");
            var d = lyricModel.getLyric();
            return d
        }

        function getSonger(){
            console.log("getSonger");
            var d = lyricModel.getSonger();
            return d
        }

        function getAlbumName(){
            console.log("getAlbumName");
            var d = lyricModel.getAlbumName();
            return d
        }

        function getSongName(){
            console.log("getSongName");
            var d = lyricModel.getSongName();
            return d
        }



    }





}
