#include "QuickLayer.h"
#include <QQuickView>
#include <qqmlcontext.h>


CQuickLayer::CQuickLayer()
{
	//播放音乐&mv
	connect(&m_net, SIGNAL(sig_reqSongStatus(ItemResult, SearchStatus)), this, SLOT(slot_requestSong(ItemResult, SearchStatus)));

	//时长
	connect(&m_ffplayer, SIGNAL(sig_PositionChange(qint64)), this, SLOT(slot_positionChange(qint64)));


	//音乐播放完了
	connect(&m_ffplayer, SIGNAL(sig_CurrentMediaFinished()), this, SLOT(slot_CurrentMediaFinished()));

	//音乐播放完了
	connect(&playModel, SIGNAL(setPlayList(int)), this, SLOT(slot_setPlayList(int)));
	

	m_playStatus = PLAYSTATUS_START;
}

CQuickLayer::~CQuickLayer()
{
}

void CQuickLayer::slot_changeMode() {
	//改变模式
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

		//QJSValue item = m_JS.newObject();
		//item.setProperty("songId",  QString::number(m_nSongId));
		//item.setProperty("songName", result.strMusicName);
		//item.setProperty("songer", result.strSinger);
		//item.setProperty("AlbumName", result.strAlbum);
		//item.setProperty("Duration", result.strDur);
		//m_jsArray.setProperty(m_nSongId, item);
		model.addSong(Song(QString::number(m_nSongId), result.strMusicName, result.strSinger, result.strAlbum, result.strDur, result.strHash, result.strUrl));
	}
	else if (SearchStatus::Finished == status)
	{
		//m_maskwid.hide();

		//QQuickView view;
		//view.rootContext()->setContextProperty("songModel", m_jsArray.toVariant());
		
		//view.rootContext()->setProperty("songModel", m_jsArray.toVariant());
	}
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
}

void CQuickLayer::slot_setVolumn(int nValue) {
	m_ffplayer.setVol(nValue);
}

void CQuickLayer::slot_palyMusic()
{
	//通知修改界面的播放按钮
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
	//获取对应的歌曲的url，然后播放即可。
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

		//通知修改界面的播放按钮
		m_playStatus = PLAYSTATUS_PLAYING;
		emit setPlayButton(m_playStatus);

		//获取lyric.html，拿歌词并显示
		hash = playModel.GetSongHash(nPlayListIndex);

		if (!hash.isEmpty()) {
			//获取歌词
			QString lyrics = m_net.requestLyric(hash);
			lyricModel.setLyric(lyrics);
			lyricModel.setSonger(playModel.GetSonger(nPlayListIndex));
			lyricModel.setAlbumName(playModel.GetAlbumName(nPlayListIndex));
			lyricModel.setSongName(playModel.GetSongName(nPlayListIndex));

			lyricModel.sig_SendToQml();
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