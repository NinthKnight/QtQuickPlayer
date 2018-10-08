#ifndef MYNETWORK_H
#define MYNETWORK_H

#include<QObject>
#include<QtNetWork/QNetworkAccessManager>
#include<QtNetWork/QNetworkReply>
#include<QtNetWork/QNetworkRequest>
#include<Qimage>
#include<QPixmap>
#include <QFile>
#include <QJSEngine>
#include <QJSValue>

struct ItemResult
{
   QString strFullName;
   QString strUrl;
   QString strMusicName;
   QString strSinger;
   QString strAlbum;
   QString strHash;
   QString strDur;
   QString strMvHash;
   QString strSongLyric;
};
enum SearchStatus{Started=0x00,Searching,Finished};


class MyNetWork : public QObject
{
    Q_OBJECT

public:
    explicit MyNetWork(QObject *parent = 0);
    ~MyNetWork();
    const QImage &BgWhiteChange(QImage& image , int brightness);

	void Download(const QString& url);

signals:
    void sig_requestMvfinished(const QString&);
    void sig_reqSongStatus(const ItemResult&,SearchStatus);
    void sig_reqSongNextPagefinished(const QByteArray&);

    void dolrcworkfinished(const QByteArray&,const QString&);
    void setpic(const QString&strPath,const QString&strName);
    void sig_setBgpix(const QStringList&,const QString& author);

	void sig_reqNewSongStatus(QString song);
	void sig_reqHotSongStatus(QString song);


public slots:
    void requestMv(const QString&);
	void downloadMv(const QString&);
	void requestNewMv(const QString&);
    void requestalbum(const QString &name,const QString &savelocal);
    void requestSong(const QString&);
    void requestSongNextPage();
    void requestlrc(const QString &name,qint64 totaltime,const QString &saveloaction,const QString &strHash="");
    void requestBgPic(const QString &author);

	void requestNewSong();

	void requestHotSong();

	QString requestLyric(const QString &strSongHash);

	void slot_ReplyRead();
	void slot_ReplyFinished();

	void slot_Replyerror(QNetworkReply::NetworkError code);

private:

    int m_pageindex;
    QString m_songname;

	QNetworkAccessManager m_downloadManager;
	QNetworkRequest m_request;
	QNetworkReply* m_pDownloadReply;
	QFile m_File;
};

#endif // MYNETWORK_H
