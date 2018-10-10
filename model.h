#pragma once
#include <QAbstractListModel>
#include <QStringList>
#include "netWork\mynetwork.h"
class Song
{
public:
	friend class MyNetWork;
	friend class PlayListModel;
	Song(const QString &songId, 
		      const QString &songName,
		      const QString &songer,
		      const QString &AlbumName,
		      const QString &Duration,
		      const QString &SongHash,
		      const QString &SongUrl);

	Song() {};

	QString songId() const;
	QString songName() const;
	QString songer() const;
	QString AlbumName() const;
	QString Duration() const;
	QString SongHash() const;
	QString SongUrl() const;

private:
	QString m_songId;
	QString m_songName;
	QString m_songer;
	QString m_AlbumName;
	QString m_Duration;
	QString m_SongHash;
	QString m_songUrl;
};

class SongModel : public QAbstractTableModel
{
	Q_OBJECT
public:

	friend class CQuickLayer;
	friend class MyNetWork;

	enum SongRoles {
		IdRole = Qt::UserRole + 1,
		NameRole,
		SongerRole,
		AlbumRole,
		DurationRole
	};

	SongModel(QObject *parent = 0);

	void addSong(const Song &s);

	Song getSong(int nRow) {
		return m_Lst[nRow];
	}

	void clearData();

	int rowCount(const QModelIndex & parent = QModelIndex()) const;

	int columnCount(const QModelIndex & parent = QModelIndex()) const
	{
		Q_UNUSED(parent);
		return 5;
	}

	QModelIndex index(int row, int column, const QModelIndex &parent) const
	{
		Q_UNUSED(parent);


		if ((row >= 0) && (row < m_Lst.size()))
		{
			return createIndex(row, column);
		}
		return QModelIndex();   //返回一个无效的空索引
	}

	QVariant data(const QModelIndex & index, int role = Qt::DisplayRole) const;
	QHash<int, QByteArray> roleNames() const;



private:
	QList<Song> m_Lst;
};

class PlayListModel : public QAbstractTableModel
{
	Q_OBJECT
public:
	enum SongRoles {
		IdRole = Qt::UserRole + 1,
		ImageRole,
		NameRole,
		SongerRole,
		DurationRole
	};

	enum PlayModes {
		CircleMode = 0, //循环模式
		NextMode, //下一首模式
		RandMode, //随机模式
		SigleCircleMode, //单曲循环模式
	};

	PlayListModel(QObject *parent = 0);

signals:
	void setPlayList(int nIndex);

public:
	void addSong(const Song &s);
	void clearData();

	void ChangeMode() {
		m_nPlayMode = (m_nPlayMode + 1)% 4;
	}

	Song& getSong(int nRow) {
		return m_Lst[nRow];
	}

	int getMode() {
		return m_nPlayMode;
	}

	int getCount() {
		return m_Lst.count();
	}

	QString GetSongUrl(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count()) {
			if (m_Lst[nIndex].SongUrl().isEmpty()) {
				Song& s = getSong(nIndex);
				MyNetWork m;
				s.m_songUrl = m.requestSongUrlbyHash(s.SongHash());
			}
			
			return m_Lst[nIndex].SongUrl();
		}
			
		return "";
	}

	QString GetSongHash(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count())
			return m_Lst[nIndex].SongHash();
		return "";
	}

	QString GetSonger(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count())
			return m_Lst[nIndex].songer();
		return "";
	}

	QString GetSongName(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count())
			return m_Lst[nIndex].songName();
		return "";
	}

	QString GetAlbumName(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count())
			return m_Lst[nIndex].AlbumName();
		return "";
	}

	int getCurentSongIndex() {
		return m_nCurPlayIndex;
	}

	void setCurentSongIndex(int nIndex) {
		m_nCurPlayIndex = nIndex;

		//这里发送信号通知qml改变选中界面
		beginResetModel();
		emit setPlayList(nIndex);
		endResetModel();
	}

	int rowCount(const QModelIndex & parent = QModelIndex()) const;

	int columnCount(const QModelIndex & parent = QModelIndex()) const
	{
		Q_UNUSED(parent);
		return 5;
	}

	QModelIndex index(int row, int column, const QModelIndex &parent) const
	{
		Q_UNUSED(parent);

		if ((row >= 0) && (row < m_Lst.size()))
		{
			return createIndex(row, column);
		}
		return QModelIndex();   //返回一个无效的空索引
	}

	QVariant data(const QModelIndex & index, int role = Qt::DisplayRole) const;
	QHash<int, QByteArray> roleNames() const;

private:
	QList<Song> m_Lst;
	int m_nPlayMode;
	int m_nCurPlayIndex;
};
