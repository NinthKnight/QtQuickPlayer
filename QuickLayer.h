#ifndef QUICKLAYER_H
#define QUICKLAYER_H
#include <QObject>
#include <QDebug>
#include <QJSEngine>
#include <QJSValue>


#include "PlayCore\FFmpegPlayer.h"
#include "netWork\mynetwork.h"
#include "model.h"
#include "LyricModel.h"

extern SongModel model;
extern PlayListModel playModel;
extern CLyricModel lyricModel;

class CQuickLayer : public QObject
{
    Q_OBJECT
private:
	QObject* qmlRoot;

	enum PlayStatus {
		//开始
		PLAYSTATUS_START = 0,
		
		//播放中
		PLAYSTATUS_PLAYING,

		//暂停
		PLAYSTATUS_PAUSE,

		//结束
		PLAYSTATUS_END
	};

public:
	CQuickLayer();

	const ItemResult& GetItemByIndex(int index) { return m_songlist.at(index); }

	public slots:
	Q_INVOKABLE  void searchSong(QString songName)
	{
		qDebug() << "slot_searchSong:" << songName << endl;
		m_net.requestSong(songName);
	}

	//响应主界面的双击
	Q_INVOKABLE  void playSong(int nRow)
	{
		qDebug() << "playSong:" << nRow << endl;

		//将歌曲添加到播放列表中
		Song s = model.getSong(nRow);
		playModel.addSong(s);

		emit setPlayListCount(QString::number(playModel.getCount()));

		playModel.setCurentSongIndex(playModel.getCount() - 1);

		slot_playSong();
	}

	//响应播放列表的双击
	Q_INVOKABLE  void playListSong(int nRow)
	{
		qDebug() << "playListSong:" << nRow << endl;

		playModel.setCurentSongIndex(nRow);

		slot_playSong();
	}

	//响应向前切歌
	Q_INVOKABLE  void playPreSong()
	{
		qDebug() << "playPreSong" << endl;

		if (playModel.getCount() < 0){
			return;
		}

		//根据模式来选择合适的歌
		int nIndex = playModel.getCurentSongIndex();
		nIndex = (nIndex - 1) % playModel.getCount()  < 0 ? 0 : (nIndex - 1) % playModel.getCount();
		playModel.setCurentSongIndex(nIndex);
		slot_playSong();
	}
	
	Q_INVOKABLE  void playNextSong() {
		qDebug() << "playNextSong" << endl;

		if (playModel.getCount() < 0) {
			return;
		}

		//根据模式来选择合适的歌
		int nIndex = playModel.getCurentSongIndex();
		nIndex = (nIndex + 1) % playModel.getCount();
		playModel.setCurentSongIndex(nIndex);
		slot_playSong();
	}

	//一首歌播完了，切歌
	Q_INVOKABLE  void finishNextSong()
	{
		qDebug() << "finishNextSong:" << endl;

		if (playModel.getCount() < 0) {
			return;
		}

		//根据模式来选择合适的歌
		int nIndex = playModel.getCurentSongIndex();
		switch (playModel.getMode())
		{

		//循环模式
		case PlayListModel::CircleMode: {
			nIndex = (nIndex + 1) % playModel.getCount();
		}

		//下一首模式
		case PlayListModel::NextMode: {
			nIndex = nIndex + 1 >= playModel.getCount() ? -1 : nIndex + 1;
		}

		//随机模式
		case PlayListModel::RandMode: {

			nIndex = qrand() % playModel.getCount();
		}

		//单曲循环模式
		case PlayListModel::SigleCircleMode: {
			nIndex = nIndex;
		}

		}

		playModel.setCurentSongIndex(nIndex);
		slot_playSong();
	}


	Q_INVOKABLE  void close()
	{
		qDebug() << "close"  << endl;
		m_ffplayer.stop();
	}

signals:
	void begin();
	void beginTime(const QString& strTimeBegin);
	void endTime(const QString& strTimeEnd);
	void setTimeSlider(int nBegin, int nEnd, int nPos);

	void setPlayButton(int nPlayStatus);
	void setPlayListCount(const QString& strPlayLstCount);

	void setPlayMode(int nMode);

	void setPlayList(int nIndex);

	void setLyrics(const QString &strLyrics);

public slots:

    void slot_CurrentMediaFinished();

	void slot_requestSong(const ItemResult&, SearchStatus);
	void slot_positionChange(qint64);
	void slot_setVolumn(int nValue);

	void slot_palyMusic();
	void slot_changeMode();
	void slot_playSong();
	void slot_setPlayList(int nIndex);


public:
	virtual ~CQuickLayer();

	FFmpegPlayer m_ffplayer;
	MyNetWork m_net;

	QList<ItemResult> m_songlist;
	QMap<int, QString> m_hashmap;
	QMap<int, QString> m_MvHashmap;

	int rowCount = 3;
	QJSEngine m_JS;
	QJSValue m_jsArray;

	int  m_nSongId = 0;
	int m_playStatus;
};

#endif // QUICKLAYER_H
