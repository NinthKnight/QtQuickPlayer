import QtQuick 2.0
import QtQuick.Window 2.2
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4
import QtGraphicalEffects 1.0


Slider {
    id: sliderHorizontal

    maximumValue: 100;
    minimumValue: 0;
    stepSize: 1;



    style: SliderStyle {

        groove: Rectangle {
                    id:mygroove
                    height: sliderHorizontal.height;
                    width: sliderHorizontal.width;
                    radius: 8
                    color: "lightgrey"

                    Rectangle{
                                radius: 8
                                height: sliderHorizontal.height;
                                width: sliderHorizontal.value / sliderHorizontal.maximumValue * sliderHorizontal.width;
                                color: "red";
                     }
        }

        handle: Rectangle {
            anchors.centerIn: parent
            color: control.pressed ? "white" : "lightgray"
            border.color: "gray"
            border.width: 2
            implicitWidth: 10
            implicitHeight: 10
            radius: 8
        }
    }
}

