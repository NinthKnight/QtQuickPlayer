#include "model.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <qqmlengine.h>
#include <qqmlcontext.h>
#include <qqml.h>
#include <QtQuick/qquickitem.h>
#include <QtQuick/qquickview.h>

#include "QuickLayer.h"

SongModel model;
PlayListModel playModel;

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

	qsrand(QTime(0, 0, 0).secsTo(QTime::currentTime()));

	//register C++ type CQuickLayer
	qmlRegisterType<CQuickLayer>("com.mplayer", 1, 0, "Mplayer");
	//qmlRegisterType<SongModel>("com.mplayer", 1, 0, "MySongModel");

	//QQuickView view;
	//view.setResizeMode(QQuickView::SizeRootObjectToView);
	//QQmlContext *ctxt = view.rootContext();
	//ctxt->setContextProperty("myModel", &model);

	//view.setSource(QUrl(QStringLiteral("qrc:/main.qml")));
	//view.show();

	//return app.exec();

    QQmlApplicationEngine engine;

	QQmlContext *ctxt = engine.rootContext();
	ctxt->setContextProperty("myModel", &model);
	ctxt->setContextProperty("playModel", &playModel);

    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty())
        return -1;

    return app.exec();
}
