#include "model.h"
#include "LyricModel.h"
#include "SongListModel.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>

#include <qqmlengine.h>
#include <qqmlcontext.h>
#include <qqml.h>
#include <QtQuick/qquickitem.h>
#include <QtQuick/qquickview.h>
#include <QtWebEngine/qtwebengineglobal.h>

#include "QuickLayer.h"

SongModel model;
PlayListModel playModel;
CLyricModel lyricModel;
CSongLstModel songLstModel;


int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

	qsrand(QTime(0, 0, 0).secsTo(QTime::currentTime()));

	QtWebEngine::initialize();

	//register C++ type CQuickLayer
	qmlRegisterType<CQuickLayer>("com.mplayer", 1, 0, "Mplayer");
	qmlRegisterType<CLyricLayer>("com.mplayer", 1, 0, "MLyric");
	qmlRegisterType<CSongLstLayer>("com.mplayer", 1, 0, "MSonglst");



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
	ctxt->setContextProperty("lyricModel", &lyricModel);
	ctxt->setContextProperty("songLstModel", &songLstModel);

    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));
    if (engine.rootObjects().isEmpty())
        return -1;

    return app.exec();
}
