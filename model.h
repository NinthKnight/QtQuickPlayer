#pragma once
#include <QAbstractListModel>
#include <QStringList>

class Song
{
public:
	Song(const QString &songId, 
		      const QString &songName,
		      const QString &songer,
		      const QString &AlbumName,
		      const QString &Duration,
		      const QString &SongHash,
		      const QString &SongUrl);

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
		return QModelIndex();   //����һ����Ч�Ŀ�����
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
		CircleMode = 0, //ѭ��ģʽ
		NextMode, //��һ��ģʽ
		RandMode, //���ģʽ
		SigleCircleMode, //����ѭ��ģʽ
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

	Song getSong(int nRow) {
		return m_Lst[nRow];
	}

	int getMode() {
		return m_nPlayMode;
	}

	int getCount() {
		return m_Lst.count();
	}

	QString GetSongUrl(int nIndex) {

		if (nIndex >= 0 && nIndex < m_Lst.count())
			return m_Lst[nIndex].SongUrl();
		return "";
	}

	int getCurentSongIndex() {
		return m_nCurPlayIndex;
	}

	void setCurentSongIndex(int nIndex) {
		m_nCurPlayIndex = nIndex;

		//���﷢���ź�֪ͨqml�ı�ѡ�н���
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
		return QModelIndex();   //����һ����Ч�Ŀ�����
	}

	QVariant data(const QModelIndex & index, int role = Qt::DisplayRole) const;
	QHash<int, QByteArray> roleNames() const;

private:
	QList<Song> m_Lst;
	int m_nPlayMode;
	int m_nCurPlayIndex;
};
