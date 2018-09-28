import QtQuick 2.9
import QtQuick.Window 2.2
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4
import QtQuick.Dialogs 1.1
import QtQuick.Layouts 1.3
import QtGraphicalEffects 1.0

Rectangle {
    id:myMainWindow;
    visible: true;

    width:843;
    height: 624;

    Rectangle{
       id:left_mainUIRectangle;
       color: "#F5F5F7";
       visible: true;
       width: 200;
       height: parent.height;
       anchors.top:  parent.top;
       anchors.left:  parent.left;

       Rectangle{
           id: itemHead1;
           width: parent.width;
           height: 20;
           visible: true;
           anchors.left:  parent.left;
           anchors.top:  parent.top;
           anchors.topMargin: 10;

           color: "#F5F5F7";

           Text{
               anchors.leftMargin: 15;
               text: "我的音乐"
               color: "#707070"
               font.pixelSize: 13
               Layout.preferredWidth: 120
           }
       }

       Rectangle{
           id: list;
           width: parent.width;
           height: parent.height - 20;
           visible: true;
           anchors.top:  itemHead1.bottom;
           anchors.left:  parent.left;
           color: "#F5F5F7";

           ListView{

                   id: listView
                   anchors.fill: parent
                   delegate: listDelegate
                   model: ContactModel {}
                   focus: true
                   highlight: Rectangle{
                       color: "#E6E7EA"
                   }
           }
       }
    }

    //左边是ListDelegate
    Component{
            id: listDelegate

            Item {
                id: wrapper
                width: parent.width
                height: 30
                ListView.onAdd: console.log("count:", ListView.view.count)

                MouseArea{
                    anchors.fill: parent
                    onClicked: wrapper.ListView.view.currentIndex = index
                }

                RowLayout{
                    anchors.left: parent.left
                    anchors.verticalCenter: parent.verticalCenter
                    spacing: 8

                    Rectangle{
                        id: headBlock;
                        visible: wrapper.ListView.isCurrentItem ? true : false;
                        color: "#C62F2F";
                        width: 5;
                        height: 30;
                    }

                    Image{
                        id:iconImg1;
                        anchors.left:  headBlock.right;
                        anchors.leftMargin: 10;
                        source: srcImg;
                        width: 24;
                        height: 22;

                    }

                    Text{
                        id: listName;
                        anchors.left:  iconImg1.right;
                        anchors.leftMargin: 10;
                        text: name
                        color: wrapper.ListView.isCurrentItem ? "black" : "#707070";
                        font.pixelSize: 13
                        Layout.preferredWidth: 120
                    }

                }
            }
        }

    //右边是table
    Rectangle{
       id:right_mainUIRectangle;

       anchors.top:  parent.top;
       anchors.left:  left_mainUIRectangle.right;

       visible: true;
       width: mainUIRectangle.width - left_mainUIRectangle.width;
       height: parent.height;

       color: "#FAFAFA";

       //最左边面有一根线
       Rectangle{
           id:rightLine;
           width: 1;
           height: parent.height;
           anchors.left:  parent.left;
           anchors.top: parent.top;
           color: "#E1E1E2";
           visible: true;
       }


       Rectangle{
           anchors.left:  rightLine.right;
           anchors.top: parent.top;
           visible: true;
           width:right_mainUIRectangle.width - rightLine.width;
           height: parent.height;
           color:"#FAFAFA";

           TableView{
                   id: songTable;
                   anchors.left:  parent.left;
                   anchors.top: parent.top;
                   anchors.fill: parent;

                   width: parent.width;
                   height: parent.height;

                   backgroundVisible: false;
                   frameVisible: false;

                   //响应双击
                   onDoubleClicked:{
                        quickLayer.playSong(songTable.currentRow);
                   }

                   //TableViewColumn 描述表格的每一列
                   TableViewColumn{
                       role: "songId";
                       title: "";
                       width: 50;
                       elideMode: Text.ElideRight;

                   }

                   TableViewColumn{
                       role: "songName";
                       title: "音乐标题";
                       width: 150;
                       elideMode: Text.ElideLeft;

                   }

                   TableViewColumn{
                       role: "songer";
                       title: "歌手";
                       width: 100;
                       elideMode: Text.ElideLeft;
                   }

                   TableViewColumn{
                       role: "AlbumName";
                       title: "专辑";
                       width: 100;
                       elideMode: Text.ElideLeft;
                   }

                   TableViewColumn{
                       role: "Duration";
                       title: "时长";
                       width: 50;
                       elideMode: Text.ElideLeft;
                   }



                   itemDelegate:Text{//设置每个单元格的字体样式
                       text: styleData.value
                       color: styleData.selected? "balck" : styleData.textColor
                       elide: styleData.elideMode;
                       font.pixelSize: 14
                       Layout.preferredWidth: 120
                   }

                   rowDelegate :Rectangle{//设置行的背景色
                       color: styleData.selected ? "#E6E7EA" : "#FAFAFA";
                       visible: true
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
                           font.pixelSize: 14
                           Layout.preferredWidth: 120
                       }
                   }

                   model: myModel
                   focus: true
               }
           }
    }
}
