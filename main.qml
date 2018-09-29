import QtQuick 2.9
import QtQuick.Window 2.2
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4
import QtQuick.Dialogs 1.1
import QtQuick.Layouts 1.3
import QtGraphicalEffects 1.0
import QtWebEngine 1.0

import com.mplayer 1.0

Window {
    id:mainWindow;
    visible: true
    width: 1022
    height: 670
    color: "#FAFAFA"
    flags: Qt.FramelessWindowHint | Qt.WindowSystemMenuHint
           | Qt.WindowMinimizeButtonHint| Qt.Window;

    property point startPoint: Qt.point(0, 0);
    property point offsetPoint: Qt.point(0, 0);
    property  bool isMoveMainWindow: false;

    Mplayer{
        id:quickLayer;   //Instance of CQuickLayer
    }


//    //监听C++的信号
//    Connections {
//            target: quickLayer;
//            onSetLyrics:{
//                console.log(strLyrics);
//            }
//    }

    onClosing:{
        quickLayer.close();
        playListWindow.close();
    }


    //标题栏
    Rectangle {
        id:titleRectangle;
        visible: true;
        anchors.left: parent.left;
        anchors.top: parent.top;
        color: "#C62F2F"
        width: parent.width;
        height: 50;

        Rectangle{
            id: logoRect;
            anchors.left: parent.left;
            anchors.leftMargin: 0;
            anchors.top: parent.top;
            anchors.topMargin: 0;
            width: logoImg.width;

            Image{
                id:logoImg;
                source: "qrc:/res/title.png";
            }
        }

        Rectangle{
            id: searchRect;
            anchors.left:  logoRect.right;
            anchors.top:   parent.top;
            anchors.leftMargin: 10;
            anchors.topMargin: 15;
            width: 200;
            height: 25;

            visible: true;
            color:"#A82828";
            radius: 8;

//            MouseArea{
//                anchors.fill: parent
//                onClicked:searchInput.focus = true;
//            }

            //背景文字
            Text{
                id:idText;
                color: "#A76F6F";
                anchors.left:  parent.left;
                anchors.top:   parent.top;
                anchors.leftMargin: 5;
                anchors.topMargin: 5;
                anchors.fill: parent;
                font.family: "Helvetica"
                font.pointSize: 10
                text: "搜索音乐，视频，歌词，电台";
            }

            TextInput{
                id: searchInput;
                anchors.left:  parent.left;
                anchors.top:   parent.top;
                anchors.leftMargin: 5;
                anchors.topMargin: 5;
                width: 180
                font.family: "Helvetica"
                font.pointSize: 10
                color: "white";
                focus: true;
                onTextChanged:  {
                    // if bgText is empty show,otherwise hide.
                    idText.visible=(0<searchInput.text.length)?false:true;
                }

                //响应回车
                onAccepted :{
                    quickLayer.searchSong(searchInput.text);
                }
            }

            Loader {
                id: searchButtonLoader;
                anchors.right: parent.right;
                anchors.rightMargin: 1;
                anchors.top: parent.top;
                anchors.topMargin: 2;
                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/trayMenu/btn_search_pressed.png";
                    item.buttonPressImage = "qrc:/res/trayMenu/btn_search_normal.png";
                    item.buttonHoverImage = "qrc:/res/trayMenu/btn_search_normal.png";
                    item.buttonDisableImage = "qrc:/res/trayMenu/btn_search_pressed.png";
                    item.width = 23;
                    item.height = 23;
                }
            }

        }


        MouseArea{
            id:mouseMoveWindowArea;
            anchors.fill: parent;
            onPressed: {
                //cursorShape = Qt.DragMoveCursor;
                mainWindow.startPoint = Qt.point(mouseX, mouseY);
                mainWindow.isMoveMainWindow = true;

                if(mouseX > searchRect.x && mouseX < searchRect.x + searchRect.width &&
                   mouseY > searchRect.y && mouseY < searchRect.y + searchRect.height
                    )
                {
                    searchInput.focus = true;
                }

            }
            onPositionChanged: {
                mainWindow.offsetPoint = Qt.point(mouseX - mainWindow.startPoint.x,
                                                  mouseY - mainWindow.startPoint.y);
                if(mainWindow.isMoveMainWindow === true)
                {
                    mainWindow.x = mainWindow.x + mainWindow.offsetPoint.x;
                    mainWindow.y = mainWindow.y + mainWindow.offsetPoint.y;
                }
            }
            onReleased: {
                cursorShape = Qt.ArrowCursor;
                mainWindow.isMoveMainWindow = false;
            }
        }

        Loader {
            id: closeButtonLoader;
            anchors.right: parent.right;
            anchors.rightMargin: 10;
            anchors.top: parent.top;
            anchors.topMargin: 10;
            source: "XButton.qml";

            onLoaded: {
                item.buttonNormalImage = "qrc:/res/buttonImage/close_normal.png";
                item.buttonPressImage = "qrc:/res/buttonImage/close_down.png";
                item.buttonHoverImage = "qrc:/res/buttonImage/close_hover.png";
                item.buttonDisableImage = "qrc:/res/buttonImage/close_disable.png";
                item.width = 23;
                item.height = 18;

            }

        }

        Loader{
            id:miniSizeButtonLoader;
            anchors.right: closeButtonLoader.left;
            anchors.top: closeButtonLoader.top;
            source: "XButton.qml";

            onLoaded: {
                item.buttonNormalImage = "qrc:/res/buttonImage/min_normal.png";
                item.buttonPressImage = "qrc:/res/buttonImage/min_down.png";
                item.buttonHoverImage = "qrc:/res/buttonImage/min_hover.png";
                item.buttonDisableImage = "qrc:/res/buttonImage/min_disable.png";
                item.width = 23;
                item.height = 18;
            }
        }

        Loader {
            id: menuButtonLoader;
            anchors.right: miniSizeButtonLoader.left;
            anchors.top: miniSizeButtonLoader.top;
            source: "XButton.qml";

            onLoaded: {
                item.buttonNormalImage = "qrc:/res/buttonImage/menu_normal.png";
                item.buttonPressImage = "qrc:/res/buttonImage/menu_down.png";
                item.buttonHoverImage = "qrc:/res/buttonImage/menu_hover.png";
                item.buttonDisableImage = "qrc:/res/buttonImage/menu_disable.png";
                item.width = 23;
                item.height = 18;
            }
        }

        Connections {
            target: closeButtonLoader.item;
            onClicked: {
                mainWindow.close();
            }
        }

        Connections {
            target: miniSizeButtonLoader.item
            onClicked: {
                mainWindow.showMinimized();
            }
        }
    }

    //主界面区
    Rectangle{
        id:mainUIRectangle;
        anchors.top: titleRectangle.bottom;
        anchors.left: titleRectangle.left;
        width:titleRectangle.width;
        height: parent.height - titleRectangle.height - buttomRect.height;
        visible: true;

        //使用StackView来显示主界面区
         StackView {
             id: stackView
             //anchors.centerIn: parent;
             anchors.top: mainUIRectangle.top;
             anchors.left: mainUIRectangle.left;
             width:parent.width;
             height: parent.height;
             visible: true;

             initialItem: "qrc:/SearchWindow.qml";
         }

    }

    //播放列表
    Window{
        id: playListWindow;
        //anchors.right:  parent.right;
        //anchors.bottom:  parent.bottom;

        flags: Qt.FramelessWindowHint;
        visible: false;
        width: 351;
        height: 441;
        color:"#FAFAFA";
        x : mainUIRectangle.x + mainUIRectangle.width - width + mainWindow.x;
        y : mainUIRectangle.y + mainUIRectangle.height - height + mainWindow.y;

        DropShadow {
            anchors.fill: playListRect
            horizontalOffset: -1
            verticalOffset: -1
            samples: 12;
            source: playListRect;
            color: "#C4C4C5"
            radius: 3;
        }


         Rectangle{

             id: playListRect;
             anchors.right:  parent.right;
             anchors.bottom:  parent.bottom;

             visible: true;
             width: 350;
             height: 440;
             color:"#FAFAFA";

             //响应播放列表歌曲被选中
             Connections {
                     target: quickLayer;
                     onSetPlayList:{
                          playListTable.nSelIndex = nIndex;
                          console.log("123" + nIndex);
                     }
                 }

            Rectangle{
                id: playListHead;
                anchors.left:  parent.left;
                anchors.top:  parent.top;
                //visible: true;
                width: parent.width;
                height: 42;
                color:"#F0F0F2";

                Rectangle{
                    id: playHeadLabel;
                    radius: 8;
                    anchors.centerIn: parent;
                    //visible: true;
                    width: 180;
                    height: 26;
                    color:"#7C7D85";

                    Rectangle{
                        id: playHeadLeftLabel;
                        width: parent.width/2;
                        height: parent.height;
                        //visible: true;
                        anchors.left:  parent.left;
                        anchors.top:  parent.top;
                        color: "#7C7D85";

                        Text{
                            text: "播放列表"
                            color: "white"
                            font.pixelSize: 13
                            Layout.preferredWidth: 120
                            anchors.centerIn: parent;
                        }
                    }

                    Rectangle{
                        id: playHeadRightLabel;
                        width: parent.width/2;
                        height: parent.height;
                        //visible: true;
                        anchors.right:  parent.right;
                        anchors.top:  parent.top;
                        color: "#F5F5F7";

                        Text{
                            text: "历史记录"
                            color: "#7C7D85"
                            font.pixelSize: 13
                            Layout.preferredWidth: 120
                            anchors.centerIn: parent;
                        }
                    }
                }

            }


            //最左边面有一根线
            Rectangle{
                id:topLine;
                width: parent.width;
                height: 1;
                anchors.left:  playListHead.left;
                anchors.top: playListHead.bottom;
                color: "#E1E1E2";
                //visible: true;
            }


            TableView{
                    property int nSelIndex: -1;

                    id: playListTable;
                    anchors.left:  topLine.left;
                    anchors.top: topLine.bottom;
                    width: parent.width;
                    height: parent.height - playListHead.height - topLine.height;

                    headerVisible: false;
                    backgroundVisible: false;
                    frameVisible: false;

                    //响应双击
                    onDoubleClicked:{
                         quickLayer.playListSong(playListTable.currentRow);
                    }

                    //TableViewColumn 描述表格的每一列

                    TableViewColumn{
                        role: "11";
                        title: "id";
                        width: 10;
                        elideMode: Text.ElideRight;
                    }

                    TableViewColumn{
                        delegate: Image{
                            source: styleData.value === 1 ? "qrc:/res/playList/playing_list_icon.png" : "";
                            width:19;
                            height:18;
                        }

                        role: "image";
                        title: "id";
                        width: 30;
                        elideMode: Text.ElideRight;
                    }

                    TableViewColumn{
                        role: "22";
                        title: "id";
                        width: 20;
                        elideMode: Text.ElideRight;
                    }

                    TableViewColumn{
                        role: "songName";
                        title: "音乐标题";
                        width: 120;
                        elideMode: Text.ElideRight;

                    }

                    TableViewColumn{
                        role: "songer";
                        title: "歌手";
                        width: 80;
                        elideMode: Text.ElideRight;
                    }

                    TableViewColumn{
                        role: "Duration";
                        title: "时长";
                        width: 50;
                        elideMode: Text.ElideRight;
                    }

                    itemDelegate:Item {
                            Text{
                            text: styleData.value
                            color: "#333333"
                            elide: Text.ElideRight;//styleData.elideMode;
                            font.pixelSize: 13
                            //Layout.preferredWidth: 120
                            anchors.verticalCenter: parent.verticalCenter;
                            width:80;
                            }
                    }

                    rowDelegate :Rectangle{//设置行的背景色
                        color: styleData.selected ?  "#E3E3E5" : (styleData.alternate?"#F5F5F7":"#FAFAFA")
                        visible: true
                        height: 28;

                        Rectangle{
                            width: parent.width;
                            height: 1;

                            color: "#E1E1E2";
                            visible: true;
                        }
                    }

                    headerDelegate :Rectangle{//设置表头的样式
                        implicitWidth: 10
                        implicitHeight: 24


                        border.color: "#707070"
                        color: "#FAFAFA";
                        Text{
                            anchors.verticalCenter: parent.verticalCenter
                            anchors.left: parent.left
                            anchors.leftMargin: 4
                            anchors.right: parent.right
                            anchors.rightMargin: 4
                            text: styleData.value
                            color: "#707070"
                            font.pixelSize: 13
                            Layout.preferredWidth: 120
                        }
                    }

                    model: playModel
                    focus: true
                }
         }
       }

    Rectangle{
        id:buttomRect;
        width: parent.width;
        height: 60;
        anchors.left:  parent.left;
        anchors.top: mainUIRectangle.bottom;
        color: "#F6F6F8";
        visible: true;

        //最上面有一根线
        Rectangle{
            id:buttomLine;
            width: parent.width;
            height: 1;
            anchors.left:  parent.left;
            anchors.top: parent.top;
            color: "#E1E1E2";
            visible: true;
      }

        //三个播放按钮
        //返回，刷新按钮
        Rectangle{
            id: buttonPlay;
            anchors.left:  parent.left;
            anchors.top: buttomLine.bottom;
            color: "#F6F6F8";
            width: 200;
            height: 42;

            Loader {
                id: buttonPreLoader;
                anchors.left: parent.left;
                anchors.top: parent.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 10;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/trayMenu/btn_prev_normal.png";
                    item.buttonPressImage = "qrc:/res/trayMenu/btn_prev_pressed.png";
                    item.buttonHoverImage = "qrc:/res/trayMenu/btn_prev_normal.png";
                    item.buttonDisableImage = "qrc:/res/trayMenu/btn_prev_pressed.png";
                    item.width = 42;
                    item.height = 42;
                }

                Connections {
                    target: buttonPreLoader.item;
                    onClicked: {
                        quickLayer.playPreSong();
                    }
                }


            }

            Loader {
                id: buttonPlayLoader;
                anchors.left: buttonPreLoader.right;
                anchors.top: parent.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 10;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/trayMenu/btn_play_normal.png";
                    item.buttonPressImage = "qrc:/res/trayMenu/btn_play_pressed.png";
                    item.buttonHoverImage = "qrc:/res/trayMenu/btn_play_normal.png";
                    item.buttonDisableImage = "qrc:/res/trayMenu/btn_play_normal.png";
                    item.width = 42;
                    item.height = 42;
                }

                Connections {
                    target: buttonPlayLoader.item;
                    onClicked: {
                        quickLayer.slot_palyMusic();
                    }
                }

                Connections {
                        target: quickLayer;
                        onSetPlayButton:{
                            if (nPlayStatus == 1)
                            {
                                console.log("1");
                                buttonPlayLoader.item.buttonNormalImage = "qrc:/res/trayMenu/btn_pause_normal.png";
                                buttonPlayLoader.item.buttonPressImage = "qrc:/res/trayMenu/btn_pause_pressed.png";
                                buttonPlayLoader.item.buttonHoverImage = "qrc:/res/trayMenu/btn_pause_normal.png";
                                buttonPlayLoader.item.buttonDisableImage = "qrc:/res/trayMenu/btn_pause_normal.png";
                            }
                            else
                            {
                                console.log("2");
                                buttonPlayLoader.item.buttonNormalImage = "qrc:/res/trayMenu/btn_play_normal.png";
                                buttonPlayLoader.item.buttonPressImage = "qrc:/res/trayMenu/btn_play_pressed.png";
                                buttonPlayLoader.item.buttonHoverImage = "qrc:/res/trayMenu/btn_play_normal.png";
                                buttonPlayLoader.item.buttonDisableImage = "qrc:/res/trayMenu/btn_play_normal.png";
                                buttonPlayLoader.item.Image.source = "qrc:/res/trayMenu/btn_play_normal.png";

                            }

                        }
                    }

            }

            Loader {
                id: buttonNextLoader;
                anchors.left: buttonPlayLoader.right;
                anchors.top: parent.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 10;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/trayMenu/btn_next_normal.png";
                    item.buttonPressImage = "qrc:/res/trayMenu/btn_next_pressed.png";
                    item.buttonHoverImage = "qrc:/res/trayMenu/btn_next_normal.png";
                    item.buttonDisableImage = "qrc:/res/trayMenu/btn_next_normal.png";
                    item.width = 42;
                    item.height = 42;
                }


                Connections {
                    target: buttonNextLoader.item;
                    onClicked: {
                        quickLayer.playNextSong();
                    }
                }
            }
        }

        //音乐进度条
        Rectangle{
            id: musicControl;
            anchors.left:  buttonPlay.right;
            anchors.top: buttomLine.bottom;
            color: "#F6F6F8";
            width: 530;
            height: 42;

            Label{
              id: startTimeLabel;
              anchors.left:  parent.left;
              anchors.top:   parent.top;
              anchors.leftMargin: 10;
              anchors.topMargin: 25;

              Text {
                  font.pixelSize: 13;
                  font.bold: false;
                  //text:"00:00";
                  color: "black";
              }

              Connections {
                      target: quickLayer;
                      onBeginTime:{
                          //console.log("123");
                          startTimeLabel.text = strTimeBegin;
                      }
                  }
            }

            //播放进度条
            XSlider {
                id: timeSlider;
                anchors.left:  startTimeLabel.right;
                anchors.top:   startTimeLabel.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 5;
                width: 435;
                height: 5;

                Connections {
                        target: quickLayer;
                        onSetTimeSlider:{
                            //console.log("123");
                            timeSlider.minimumValue = nBegin;
                            timeSlider.maximumValue = nEnd;
                            timeSlider.value = nPos;
                        }
                    }

            }

            Label{
              id: endTimeLabel;
              anchors.left:  timeSlider.right;
              anchors.top:   startTimeLabel.top;
              anchors.leftMargin: 10;
              Text {
                  font.pixelSize: 13;
                  font.bold: false;
                  //text:"05:00";
                  color: "black";
              }

              Connections {
                      target: quickLayer;
                      onEndTime:{
                          //console.log("123");
                          endTimeLabel.text = strTimeEnd;
                      }
                  }
            }
        }

        //音量进度条
        Rectangle{
            id: voiceControl;
            anchors.left:  musicControl.right;
            anchors.top: buttomLine.bottom;
            anchors.leftMargin: 5;
            color: "#F6F6F8";
            width: 150;
            height: 42;

            Loader {
                id: voiceLoader;
                anchors.left: parent.left;
                anchors.top: parent.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 25;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/trayMenu/ad.png";
                    item.buttonPressImage = "qrc:/res/trayMenu/ad.png";
                    item.buttonHoverImage = "qrc:/res/trayMenu/ad.png";
                    item.buttonDisableImage = "qrc:/res/trayMenu/ad.png";
                    item.width = 13;
                    item.height = 15;
                }
            }

            //播放进度条
            XSlider {
                id: voiceSlider;
                anchors.left:  voiceLoader.right;
                anchors.top:   voiceLoader.top;
                anchors.leftMargin: 10;
                anchors.topMargin: 5;
                width: 100;
                height: 5;
                value: 100;

                onValueChanged:{
                    //console.log("onValueChanged");
                    quickLayer.slot_setVolumn(value);

                }

            }
         }

        //歌词
        Rectangle{
            id: lyricControl;
            anchors.left:  voiceControl.right;
            anchors.top: buttomLine.bottom;
            anchors.leftMargin: 5;
            color: "#F6F6F8";
            width: 30;
            height: 42;
            property bool bLyric: true;

            Loader {
                id: lyricLoader;
                anchors.left: parent.left;
                anchors.top: parent.top;
                anchors.leftMargin: 5;
                anchors.topMargin: 20;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/playMode/btn_lyric_normal.png";
                    item.buttonPressImage = "qrc:/res/playMode/btn_lyric_pressed.png";
                    item.buttonHoverImage = "qrc:/res/playMode/btn_lyric_normal.png";
                    item.buttonDisableImage = "qrc:/res/playMode/btn_lyric_normal.png";
                    item.width = 22;
                    item.height = 22;
                }

                Connections {
                    target: lyricLoader.item;
                    onClicked: {
                        if (lyricControl.bLyric){
                            stackView.clear()
                            stackView.push("qrc:/LyricWindow.qml")
                            lyricControl.bLyric = false;
                        }
                        else{
                            stackView.clear()
                            stackView.push("qrc:/SearchWindow.qml")
                            lyricControl.bLyric = true;
                        }

                    }
                }
            }
         }


        //播放模式
        Rectangle{
            id: playModeControl;
            anchors.left:  lyricControl.right;
            anchors.top: buttomLine.bottom;
            anchors.leftMargin: 5;
            color: "#F6F6F8";
            width: 30;
            height: 42;

            Loader {
                id: playModeLoader;
                anchors.left: parent.left;
                anchors.top: parent.top;
                anchors.leftMargin: 5;
                anchors.topMargin: 20;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                    item.buttonPressImage = "qrc:/res/playMode/btn_play_mode_circle_pressed.png";
                    item.buttonHoverImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                    item.buttonDisableImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                    item.width = 22;
                    item.height = 22;
                }

                Connections {
                    target: playModeLoader.item;
                    onClicked: {
                        quickLayer.slot_changeMode();
                    }
                }

                Connections {
                        target: quickLayer;
                        onSetPlayMode:{

                            if (nMode == 0)
                            {
                                //console.log("0");
                                playModeLoader.item.buttonNormalImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                                playModeLoader.item.buttonPressImage = "qrc:/res/playMode/btn_play_mode_circle_pressed.png";
                                playModeLoader.item.buttonHoverImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                                playModeLoader.item.buttonDisableImage = "qrc:/res/playMode/btn_play_mode_circle_normal.png";

                                playModeLoader.item.Image.source = "qrc:/res/playMode/btn_play_mode_circle_normal.png";
                            }
                            else if(nMode == 1)
                            {
                                //console.log("1");
                                playModeLoader.item.buttonNormalImage = "qrc:/res/playMode/btn_play_mode_next_normal.png";
                                playModeLoader.item.buttonPressImage = "qrc:/res/playMode/btn_play_mode_next_pressed.png";
                                playModeLoader.item.buttonHoverImage = "qrc:/res/playMode/btn_play_mode_next_normal.png";
                                playModeLoader.item.buttonDisableImage = "qrc:/res/playMode/btn_play_mode_next_normal.png";

                                playModeLoader.item.Image.source = "qrc:/res/playMode/btn_play_mode_next_normal.png";
                            }
                            else if(nMode == 2)
                            {
                                //console.log("2");
                                playModeLoader.item.buttonNormalImage = "qrc:/res/playMode/btn_play_mode_rand_normal.png";
                                playModeLoader.item.buttonPressImage = "qrc:/res/playMode/btn_play_mode_rand_pressed.png";
                                playModeLoader.item.buttonHoverImage = "qrc:/res/playMode/btn_play_mode_rand_normal.png";
                                playModeLoader.item.buttonDisableImage = "qrc:/res/playMode/btn_play_mode_rand_normal.png";

                                playModeLoader.item.Image.source = "qrc:/res/playMode/btn_play_mode_rand_normal.png";
                            }
                            else
                            {
                                //console.log("3");
                                playModeLoader.item.buttonNormalImage = "qrc:/res/playMode/btn_play_mode_single_circle_normal.png";
                                playModeLoader.item.buttonPressImage = "qrc:/res/playMode/btn_play_mode_single_circle_pressed.png";
                                playModeLoader.item.buttonHoverImage = "qrc:/res/playMode/btn_play_mode_single_circle_normal.png";
                                playModeLoader.item.buttonDisableImage = "qrc:/res/playMode/btn_play_mode_single_circle_normal.png";

                                playModeLoader.item.Image.source = "qrc:/res/playMode/btn_play_mode_single_circle_normal.png";
                            }

                        }
                    }
              }

            }


        //播放列表
        Rectangle{
            id: playlistControl;
            anchors.left:  playModeControl.right;
            anchors.top: buttomLine.bottom;
            anchors.leftMargin: 5;
            color: "#F6F6F8";
            width: 30;
            height: 42;

            Loader {
                id: playlistLoader;
                anchors.left: parent.left;
                anchors.top: parent.top;
                anchors.leftMargin: 5;
                anchors.topMargin: 20;

                source: "XButton.qml";

                onLoaded: {
                    item.buttonNormalImage = "qrc:/res/playMode/btn_playing_list_normal.png";
                    item.buttonPressImage = "qrc:/res/playMode/btn_playing_list_pressed.png";
                    item.buttonHoverImage = "qrc:/res/playMode/btn_playing_list_normal.png";
                    item.buttonDisableImage = "qrc:/res/playMode/btn_playing_list_normal.png";
                    item.width = 22;
                    item.height = 22;
                }



                Connections {
                    target: playlistLoader.item;
                    onClicked: {
                        //console.log("hide")
                        if (playListWindow.visible ){
                            playListWindow.hide();
                        }
                        else
                            playListWindow.show();
                    }
                }
            }


            Label{
              id: songCountLabel;
              anchors.left:  playlistLoader.right;
              anchors.top:   parent.top;
              anchors.leftMargin: 5;
              anchors.topMargin: 25;

              Text {
                  font.pixelSize: 13;
                  font.bold: false;
                  //text:"0";
                  color: "black";
              }

              Connections {
                      target: quickLayer;
                      onSetPlayListCount:{
                          songCountLabel.text = strPlayLstCount;
                      }
                  }
            }

         }


    }
}
