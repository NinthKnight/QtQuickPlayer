#pragma once

#include <QAbstractListModel>
#include <QStringList>


class CLyricModel : public QObject
{
	Q_OBJECT
public:
	CLyricModel();
	~CLyricModel();

signals:
	void sig_SendToQml(int nTime);

public:

	//歌词设置
	Q_INVOKABLE void setLyric(QString str) {
		m_lyric = str;
	}

	Q_INVOKABLE QString getLyric() {
		return m_lyric;
	}

	//歌手设置
	Q_INVOKABLE void setSonger(QString str) {
		m_songer = str;
	}

	Q_INVOKABLE QString getSonger() {
		return m_songer;
	}

	//专辑设置
	Q_INVOKABLE void setAlbumName(QString str) {
		m_AlbumName = str;
	}

	Q_INVOKABLE QString getAlbumName() {
		return m_AlbumName;
	}

	//歌名设置
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
	};

	~CLyricLayer() {};

signals:
	void signalSendToQml(int nTime);

	public slots:
	void slotSendToQml(int nTime) {
		emit signalSendToQml(nTime);
	}

};