#pragma once

#include <QAbstractListModel>
#include <QStringList>
#include <qdebug.h>


class CSongLstModel : public QObject
{
	Q_OBJECT
public:
	CSongLstModel();
	~CSongLstModel();

signals:
	void sig_SendToQml(QString str);
	void sig_SetNewSongLst(QString str);
	void sig_SetHotSongLst(QString str);


	void sig_PlaySong(int nIndex);

public:

	//∏Ë¥ …Ë÷√
	Q_INVOKABLE void setLyric(QString str) {
		//m_lyric = str;
	}

private:
};

extern CSongLstModel songLstModel;

class CSongLstLayer : public QObject
{
	Q_OBJECT
public:
	CSongLstLayer() {
	
		connect(&songLstModel, SIGNAL(sig_SendToQml(QString)), this, SLOT(slotSendToQml(QString)));

		connect(&songLstModel, SIGNAL(sig_SetNewSongLst(QString)), this, SLOT(slotSetNewSongLst(QString)));

		connect(&songLstModel, SIGNAL(sig_SetHotSongLst(QString)), this, SLOT(slotSetHotSongLst(QString)));
		
	};

	~CSongLstLayer() {};

signals:
	void signalSendToQml(QString strSong);

	void signalSetNewSongLst(QString strSong);

	void signalSetHotSongLst(QString strSong);


	public slots:
	void slotSendToQml(QString strSong) {
		//qDebug() << strSong << endl;
		emit signalSendToQml(strSong);

	}

	void slotSetNewSongLst(QString strSong) {

		emit signalSetNewSongLst(strSong);
	}

	void slotSetHotSongLst(QString strSong) {

		emit signalSetHotSongLst(strSong);
	}
};