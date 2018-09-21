import QtQuick 2.0

Item {
    id: xButton;

    property string buttonNormalImage: "";
    property string buttonPressImage: "";
    property string buttonHoverImage: "";
    property string buttonDisableImage: "";
    property  bool buttonDisable : false;

    signal clicked();
    signal exited();
    signal entered();
    Image {
        id: xbuttonImage;
        source: buttonNormalImage;
        anchors.fill: parent;


        MouseArea{
            id:buttonMouseArea;
            anchors.fill: parent;
            hoverEnabled: true;
            cursorShape: Qt.PointingHandCursor;

            onEntered: {
                if(buttonDisable==false)
                {
                    xButton.entered();
                    xbuttonImage.source = buttonHoverImage;
                }

                //console.log("onEntered");
                buttonMouseArea.cursorShape = Qt.PointingHandCursor;
            }

            onExited: {
                if(buttonDisable==false)
                {
                    xButton.exited();
                    xbuttonImage.source = buttonNormalImage;
                }

                //console.log("onExited");
                buttonMouseArea.cursorShape = Qt.ArrowCursor;

            }

            onPressed: {
                if(buttonDisable==false)
                {
                    //xButton.clicked();
                    xbuttonImage.source = buttonPressImage;
                }
            }

            onReleased: {
                if(buttonDisable==false)
                {
                    //xButton.clicked();
                    xbuttonImage.source = buttonNormalImage;
                }
            }

            onClicked: {
                if(buttonDisable==false)
                {
                    xButton.clicked();
                    //xbuttonImage.source = buttonPressImage;
                }
            }



        }
    }

    onButtonDisableChanged: {
        buttonDisable == false?(xbuttonImage.source = buttonNormalImage)
                              :(xbuttonImage.source = buttonDisableImage);
    }

    onButtonNormalImageChanged: {
       xbuttonImage.source = buttonNormalImage;
    }

}
