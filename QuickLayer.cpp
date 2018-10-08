#include "QuickLayer.h"
#include <QQuickView>
#include <qqmlcontext.h>
#include <SongListModel.h>
#include <QJsonDocument>

extern CSongLstModel songLstModel;

CQuickLayer::CQuickLayer()
{
	//��������&mv
	connect(&m_net, SIGNAL(sig_reqSongStatus(ItemResult, SearchStatus)), this, SLOT(slot_requestSong(ItemResult, SearchStatus)));

	connect(&m_net, SIGNAL(sig_reqNewSongStatus(QString)), this, SLOT(slot_requestNewSong(QString)));

	connect(&m_net, SIGNAL(sig_reqHotSongStatus(QString)), this, SLOT(slot_requestHotSong(QString)));

	//ʱ��
	connect(&m_ffplayer, SIGNAL(sig_PositionChange(qint64)), this, SLOT(slot_positionChange(qint64)));


	//���ֲ�������
	connect(&m_ffplayer, SIGNAL(sig_CurrentMediaFinished()), this, SLOT(slot_CurrentMediaFinished()));

	//���ֲ�������
	connect(&playModel, SIGNAL(setPlayList(int)), this, SLOT(slot_setPlayList(int)));

	//��������
	connect(&songLstModel, SIGNAL(sig_PlaySong(int)), this, SLOT(playSong(int)));

	//���ð�
	connect(&songLstModel, SIGNAL(sig_SetList()), this, SLOT(setList()));
	

	m_playStatus = PLAYSTATUS_START;
}

CQuickLayer::~CQuickLayer()
{
}

void CQuickLayer::slot_changeMode() {
	//�ı�ģʽ
	playModel.ChangeMode();
	emit setPlayMode(playModel.getMode());

}

void CQuickLayer::slot_requestSong(const ItemResult &result, SearchStatus status)
{
	if (SearchStatus::Started == status)
	{
		m_songlist.clear();
		m_hashmap.clear();
		m_MvHashmap.clear();

		model.clearData();
	}
	else if (SearchStatus::Searching == status)
	{
		m_nSongId = m_songlist.count();
		m_songlist.append(result);
		m_hashmap.insert(m_nSongId, result.strHash);
		m_MvHashmap.insert(m_nSongId, result.strMvHash);

		model.addSong(Song(QString::number(m_nSongId), result.strMusicName, result.strSinger, result.strAlbum, result.strDur, result.strHash, result.strUrl));	
	}
	else if (SearchStatus::Finished == status)
	{
		int nCount = m_songlist.count();
		if (nCount > 0)
		{
			QJSEngine JS;
			QJSValue array = JS.newArray(nCount);

			for (int i = 0; i < nCount; i++) {
				QJSValue item = JS.newObject();


				item.setProperty("songId", QString::number(i));
				item.setProperty("songName", m_songlist[i].strMusicName);
				item.setProperty("songer", m_songlist[i].strSinger);
				item.setProperty("AlbumName", m_songlist[i].strAlbum);
				item.setProperty("Duration", m_songlist[i].strDur);
				item.setProperty("songHash", m_songlist[i].strHash);

				array.setProperty(i, item);
				
			}
			
			QJsonDocument jsonDoc = QJsonDocument::fromVariant(array.toVariant());
			//qDebug() << "json[" << jsonDoc.toJson() << "]";

			songLstModel.sig_SendToQml(jsonDoc.toJson());
		}
	}
}

void CQuickLayer::slot_requestNewSong(QString song)
{
	songLstModel.sig_SetNewSongLst(song);
}

void CQuickLayer::slot_requestHotSong(QString song)
{
	songLstModel.sig_SetHotSongLst(song);
}

void CQuickLayer::slot_positionChange(qint64 length)
{
	int pos = length / 1000;
	int dur = m_ffplayer.getDuration() / 1000000;

	QTime time;
	time.setHMS(0, dur / 60, dur % 60);
	QString durstr = time.toString("mm:ss");

	time.setHMS(0, pos / 60, pos % 60);
	QString posstr = time.toString("mm:ss");

	emit beginTime(posstr);
	emit endTime(durstr);
	emit setTimeSlider(0, dur, pos);

	emit lyricModel.sig_SendToQml(length);
}

void CQuickLayer::slot_setVolumn(int nValue) {
	m_ffplayer.setVol(nValue);
}

void CQuickLayer::slot_palyMusic()
{
	//֪ͨ�޸Ľ���Ĳ��Ű�ť
	if (m_playStatus == PLAYSTATUS_PLAYING) {
		m_ffplayer.pause();

		m_playStatus = PLAYSTATUS_PAUSE;
		emit setPlayButton(m_playStatus);
	}
	else if (m_playStatus == PLAYSTATUS_PAUSE)
	{
		if (playModel.getCurentSongIndex() != -1)
		{
			m_ffplayer.play();
			m_playStatus = PLAYSTATUS_PLAYING;
			emit setPlayButton(m_playStatus);
		}
	}
}

void CQuickLayer::slot_playSong() {
	//��ȡ��Ӧ�ĸ�����url��Ȼ�󲥷ż��ɡ�
	m_ffplayer.stop();
	QString url;
	QString hash;

	int nPlayListIndex = playModel.getCurentSongIndex();

	if (nPlayListIndex >= 0 && nPlayListIndex < playModel.getCount())
	{
		url = playModel.GetSongUrl(nPlayListIndex);

		if (!url.isEmpty())
		{
			m_ffplayer.setMedia(url);
			m_ffplayer.play();
		}

		//֪ͨ�޸Ľ���Ĳ��Ű�ť
		m_playStatus = PLAYSTATUS_PLAYING;
		emit setPlayButton(m_playStatus);

		//��ȡlyric.html���ø�ʲ���ʾ
		hash = playModel.GetSongHash(nPlayListIndex);

		if (!hash.isEmpty()) {
			//��ȡ���
			QString lyrics = m_net.requestLyric(hash);
			lyricModel.setLyric(lyrics);
			lyricModel.setSonger(playModel.GetSonger(nPlayListIndex));
			lyricModel.setAlbumName(playModel.GetAlbumName(nPlayListIndex));
			lyricModel.setSongName(playModel.GetSongName(nPlayListIndex));
		}
	}
}

void CQuickLayer::slot_CurrentMediaFinished() {

	emit beginTime("00:00");
	emit endTime("00:00");
	emit setTimeSlider(0, 1, 0);

	finishNextSong();
}

void CQuickLayer::slot_setPlayList(int nIndex) {
	emit setPlayList(nIndex);
}

void CQuickLayer::setList() {
	m_net.requestNewSong();
	m_net.requestHotSong();
}