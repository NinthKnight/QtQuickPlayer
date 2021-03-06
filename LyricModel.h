#pragma once

#include <QAbstractListModel>
#include <QStringList>
#include <qdebug.h>


class CLyricModel : public QObject
{
	Q_OBJECT
public:
	CLyricModel();
	~CLyricModel();

signals:
	void sig_SendToQml(int nTime);

	void sig_ReloadLyric();

	void sig_HideLyric();

public:

	//�������
	Q_INVOKABLE void setLyric(QString str) {
		m_lyric = str;
	}

	Q_INVOKABLE QString getLyric() {
		return m_lyric;
	}

	//��������
	Q_INVOKABLE void setSonger(QString str) {
		m_songer = str;
	}

	Q_INVOKABLE QString getSonger() {
		qDebug() << "CLyricModel::getSonger" << endl;
		return m_songer;
	}

	//ר������
	Q_INVOKABLE void setAlbumName(QString str) {
		m_AlbumName = str;
	}

	Q_INVOKABLE QString getAlbumName() {
		return m_AlbumName;
	}

	//��������
	Q_INVOKABLE void setSongName(QString str) {
		m_SongName = str;
	}

	Q_INVOKABLE QString getSongName() {
		return m_SongName;
	}

private:
	QString m_lyric;
	QString m_songer;
	QString m_AlbumName;
	QString m_SongName;
};

extern CLyricModel lyricModel;

class CLyricLayer : public QObject
{
	Q_OBJECT
public:
	CLyricLayer() {
	
		connect(&lyricModel, SIGNAL(sig_SendToQml(int)), this, SLOT(slotSendToQml(int)));

		connect(&lyricModel, SIGNAL(sig_ReloadLyric()), this, SLOT(slotReloadLyric()));
	};

	~CLyricLayer() {};

signals:
	void signalSendToQml(int nTime);
	void signalReloadLyric();


	public slots:
	void slotSendToQml(int nTime) {
		emit signalSendToQml(nTime);
	}

	void slotReloadLyric() {
		emit signalReloadLyric();
	}


};