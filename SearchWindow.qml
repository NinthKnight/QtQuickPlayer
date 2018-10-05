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

    //需要注册一个WebChannel对象
    WebChannel{
        id:searchChannel
        registeredObjects:[songLst]
    }

    WebEngineView {
             anchors.fill: parent
             url: "qrc:/res/index.html"
             //url:"http://musicmini.qianqian.com/2018/static/recommend/recommend.html"
             webChannel:searchChannel
    }


    MSonglst{
        id: songLst
        WebChannel.id: "mSonglst" //这个id可在html中使用

        signal signal_setSonglst(string strSong);

        //c++ -->Qml
        onSignalSendToQml: {
            //console.log(strSong);
            signal_setSonglst(strSong);
        }


        //扩展的函数
        function playSong(nIndex){
            console.log("playSong");
            var d = songLstModel.sig_PlaySong(nIndex);
            return d
        }


    }



}
