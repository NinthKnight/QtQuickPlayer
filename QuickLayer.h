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
		//��ʼ
		PLAYSTATUS_START = 0,
		
		//������
		PLAYSTATUS_PLAYING,

		//��ͣ
		PLAYSTATUS_PAUSE,

		//����
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

	//��Ӧ�������˫��
	Q_INVOKABLE  void playSong(int nRow)
	{
		qDebug() << "playSong:" << nRow << endl;

		//��������ӵ������б���
		Song s = model.getSong(nRow);
		playModel.addSong(s);

		emit setPlayListCount(QString::number(playModel.getCount()));

		playModel.setCurentSongIndex(playModel.getCount() - 1);

		slot_playSong();
	}

	//��Ӧ�����б��˫��
	Q_INVOKABLE  void playListSong(int nRow)
	{
		qDebug() << "playListSong:" << nRow << endl;

		playModel.setCurentSongIndex(nRow);

		slot_playSong();
	}

	//��Ӧ��ǰ�и�
	Q_INVOKABLE  void playPreSong()
	{
		qDebug() << "playPreSong" << endl;

		if (playModel.getCount() < 0){
			return;
		}

		//����ģʽ��ѡ����ʵĸ�
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

		//����ģʽ��ѡ����ʵĸ�
		int nIndex = playModel.getCurentSongIndex();
		nIndex = (nIndex + 1) % playModel.getCount();
		playModel.setCurentSongIndex(nIndex);
		slot_playSong();
	}

	//һ�׸貥���ˣ��и�
	Q_INVOKABLE  void finishNextSong()
	{
		qDebug() << "finishNextSong:" << endl;

		if (playModel.getCount() < 0) {
			return;
		}

		//����ģʽ��ѡ����ʵĸ�
		int nIndex = playModel.getCurentSongIndex();
		switch (playModel.getMode())
		{

		//ѭ��ģʽ
		case PlayListModel::CircleMode: {
			nIndex = (nIndex + 1) % playModel.getCount();
		}

		//��һ��ģʽ
		case PlayListModel::NextMode: {
			nIndex = nIndex + 1 >= playModel.getCount() ? -1 : nIndex + 1;
		}

		//���ģʽ
		case PlayListModel::RandMode: {

			nIndex = qrand() % playModel.getCount();
		}

		//����ѭ��ģʽ
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
