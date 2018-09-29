#include "model.h"

Song::Song(const QString &songId,
	const QString &songName,
	const QString &songer,
	const QString &AlbumName,
	const QString &Duration,
	const QString &SongHash,
	const QString &SongUrl)
{

	m_songId = songId;
	m_songName = songName;
	m_songer = songer;
	m_AlbumName = AlbumName;
	m_Duration = Duration;
	m_SongHash = SongHash;
	m_songUrl = SongUrl;
}

QString Song::songId() const {
	return m_songId;
}

QString Song::songName() const {
	return m_songName;
}

QString Song::songer() const {
	return m_songer;
}

QString Song::AlbumName() const {
	return m_AlbumName;
}

QString Song::Duration() const {
	return m_Duration;
}

QString Song::SongHash() const {
	return m_SongHash;
}

QString Song::SongUrl() const {
	return m_songUrl;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
SongModel::SongModel(QObject *parent)
	: QAbstractTableModel(parent)
{
}


void SongModel::clearData() {
	if (rowCount() > 0)
	{
		beginRemoveRows(QModelIndex(), 0, rowCount() - 1);

		if (!m_Lst.isEmpty()) {
			m_Lst.clear();
		}
		endRemoveRows();
	}

}

void SongModel::addSong(const Song &s)
{
	//beginInsertRows(QModelIndex(), rowCount(), rowCount());
	m_Lst << s;
	//endInsertRows();
}

int SongModel::rowCount(const QModelIndex & parent) const {
	Q_UNUSED(parent);
	return m_Lst.count();
}

QVariant SongModel::data(const QModelIndex & index, int role) const {
	if (index.row() < 0 || index.row() >= m_Lst.count())
		return QVariant();

	const Song &s = m_Lst[index.row()];
	if (role == IdRole)
		return s.songId();
	else if (role == NameRole)
		return s.songName();
	else if (role == SongerRole)
		return s.songer();
	else if (role == AlbumRole)
		return s.AlbumName();
	else if (role == DurationRole)
		return s.Duration();

	return QVariant();
}

QHash<int, QByteArray> SongModel::roleNames() const {
	QHash<int, QByteArray> roles;

	roles[IdRole] = "songId";
	roles[NameRole] = "songName";
	roles[SongerRole] = "songer";
	roles[AlbumRole] = "AlbumName";
	roles[DurationRole] = "Duration";

	return roles;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
PlayListModel::PlayListModel(QObject *parent)
	: QAbstractTableModel(parent)
{
	m_nPlayMode = CircleMode;
	m_nCurPlayIndex = -1;
}


void PlayListModel::clearData() {
	if (rowCount() > 0)
	{
		beginRemoveRows(QModelIndex(), 0, rowCount() - 1);

		if (!m_Lst.isEmpty()) {
			m_Lst.clear();
		}
		endRemoveRows();
	}

}

void PlayListModel::addSong(const Song &s)
{
	//beginInsertRows(QModelIndex(), rowCount(), rowCount());
	m_Lst << s;
	//endInsertRows();
}

int PlayListModel::rowCount(const QModelIndex & parent) const {
	Q_UNUSED(parent);
	return m_Lst.count();
}

QVariant PlayListModel::data(const QModelIndex & index, int role) const {
	if (index.row() < 0 || index.row() >= m_Lst.count())
		return QVariant();

	const Song &s = m_Lst[index.row()];
	if (role == NameRole)
		return s.songName();
	else if (role == SongerRole)
		return s.songer();
	else if (role == DurationRole)
		return s.Duration();
	else if (role == IdRole)
		return index.row() + 1;
	else if (role == ImageRole)
	{
		int n = index.row() == m_nCurPlayIndex ? 1 : 0;
		return n;
	}

	return QVariant();
}

QHash<int, QByteArray> PlayListModel::roleNames() const {
	QHash<int, QByteArray> roles;
	
	roles[IdRole] = "id";
	roles[ImageRole] = "image";
	roles[NameRole] = "songName";
	roles[SongerRole] = "songer";
	roles[DurationRole] = "Duration";

	return roles;
}