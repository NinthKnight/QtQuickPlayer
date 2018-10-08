#include "mynetwork.h"
#include<QFile>
#include<QJsonDocument>
#include<QJsonArray>
#include<QJsonObject>
#include<QEventLoop>
#include<QDebug>
#include <QCoreApplication>
#include <QDir>
#include <QJsonDocument>

//play method
//http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=
//http://www.kugou.com/yy/index.php?r=play/getdata&hash
//4C285C68EBEFAD7D8602D2D14D48F725
//AFF3B6219C15D030F957B82FF50AA91E

#define USE_NETCLOUD 1

#define BG_URL "http://artistpicserver.kuwo.cn/pic.web?type=big_artist_pic&pictype=url&content=list&id=0&name=%1&from=pc&json=1&version=1&width=1920&height=1080"
#define SONG_URL "http://itwusun.com/search/wy/%1?&f=json&size=50&p=%2&sign=itwusun"

#define URL_KGPLAY "http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=%1"
#define KGLrcPart0 "http://songsearch.kugou.com/song_search_v2?keyword=%1&page=1&pagesize=40&filter=0&bitrate=0&isfuzzy=0&inputtype=2&platform=PcFilter&userid=312986171&clientver=8100&iscorrection=3"
#define KGLrcPart1 "http://lyrics.kugou.com/search?ver=1&man=no&client=pc&keyword=%1&duration=%2&hash=%3"//&hash=9c6fd9b90800f7a37f6821c07bc0f906 9C6FD9B90800F7A37F6821C07BC0F906 b3c9045aa086236dc78a59357bdf73ac
#define KGLrcPart2 "http://lyrics.kugou.com/download?ver=1&client=pc&id=%1&accesskey=%2&fmt=krc"

#define ITWUSUN "http://api.itwusun.com/music/search/wy/%1?format=json&keyword=%2&sign=a5cc0a8797539d3a1a4f7aeca5b695b9"

#define MV_SEARCH_URL "http://mvsearch.kugou.com/mv_search?keyword=%1&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1515052279917"

#define MV_URL "http://m.kugou.com/app/i/mv.php?cmd=100&hash=%1&ismp3=1&ext=mp4"


#define LRYIC_URL "http://www.kugou.com/yy/index.php?r=play/getdata&hash=%1"

#define NEWSONG_URL "http://m.kugou.com/?json=true"

#define HOTSONG_URL "http://m.kugou.com/rank/info/?rankid=8888&page=1&json=true"

/*
 *  a new API =====>    http://s.music.163.com/search/get/?type=1&s=  ������/������  &limit=5000
 *  a new API too-----> http://api.itwusun.com/music/search/wy/2?format=json&keyword=����Ѹ&sign=a5cc0a8797539d3a1a4f7aeca5b695b9
*/

/*{"SongName":"�������",
"OwnerCount":1874763,
"MvType":2,
"SQFailProcess":4,
"Source":"",
"Bitrate":128,
"HQExtName":"mp3",
"SQFileSize":25058814,
"ResFileSize":43915053,
"SuperExtName":"",
"MvTrac":3,
"SQDuration":215,
"ExtName":"mp3",
"Auxiliary":"",
"SQPkgPrice":1,
"Scid":22084042,
"FailProcess":4,
"HQPkgPrice":1,
"HQBitrate":320,
"HiFiQuality":3,
"Grp":{},
"AlbumPrivilege":8,
"AlbumID":"1645030",
"SuperFileHash":"",
"ASQPrivilege":10,
"M4aSize":887266,
"AlbumName":"�ܽ��׵Ĵ��߹���",
"Privilege":8,
"ResBitrate":1632,
"FileHash":"3C3D93A5615FB42486CAB22024945264",
"SQPayType":3,
"HQPrice":200,
"SourceID":0,
"FileName":"�ܽ��� - �������",
"ID":"9dba44e08f30315c565a0fb773289dea",
"SuperFileSize":0,
"QualityLevel":3,
"SQFileHash":"B2C0A23919EEE8B47831FFAA2604107F",
"HQPrivilege":10,
"SuperBitrate":0,
"SuperDuration":0,
"ResFileHash":"05CCCE134338BD3B2AAB176218FCB0F9",
"PublishAge":255,
"HQFileHash":"4C285C68EBEFAD7D8602D2D14D48F725",
"A320Privilege":10,
"HQPayType":3,
"TopicUrl":"",
"PayType":3,
"PkgPrice":1,
"SongLabel":"",
"Accompany":1,
"HQFileSize":8624568,
"FileSize":3449934,
"SQPrice":200,
"ResDuration":215,
"SQExtName":"flac",
"Price":200,
"AudioCdn":100,
"SingerName":"�ܽ���",
"SQBitrate":931,
"MvHash":"AFF3B6219C15D030F957B82FF50AA91E",
"SQPrivilege":10,
"HQDuration":215,
"OtherName":"",
"HasAlbum":1,
"HQFailProcess":4,
"Duration":216}


check this out===>http://trackercdn.kugou.com/i/v2/?cmd=24
&hash=3c3d93a5615fb42486cab22024945264
&key=0b8d4d681d6cd4403ea2a47907935ae0
&pid=1
&vipToken=
&appid=1001
&version=8100
&token=
&vipType=0
&userid=312986171
&behavior=play
&module=locallist
&album_id=1645030
&cdnBackup=1
&mid=716e60e8f13d81666d8515da60a4313b

*/

MyNetWork::MyNetWork(QObject *parent) : QObject(parent)
{

    m_pageindex=1;
    m_songname="";
}

MyNetWork::~MyNetWork()
{

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void MyNetWork::requestalbum(const QString &name,const QString &savelocal)
{
    QString songname=name;
    QByteArray songencod(songname.replace("&"," ").toUtf8().toPercentEncoding());
    QNetworkRequest requestalbum1;
    QNetworkAccessManager mangeralbum1;
    requestalbum1.setUrl(QUrl("http://music.163.com/api/search/pc"));
    requestalbum1.setRawHeader("Cookie","os=pc");
    requestalbum1.setRawHeader("Host","music.163.com");
    requestalbum1.setRawHeader("MUSIC_U","5339640232");
    requestalbum1.setRawHeader("Referer","http://music.163.com/");
    requestalbum1.setHeader(QNetworkRequest::ContentTypeHeader,"application/x-www-form-urlencoded");
    QNetworkReply *reply1= mangeralbum1.post(requestalbum1,"offset=0&total=true&limit=100&type=1&s="+songencod);

///loop1
    QEventLoop loop1;
    connect(&mangeralbum1,SIGNAL(finished(QNetworkReply*)),&loop1,SLOT(quit()));
    loop1.exec();
////
    QByteArray byt1=reply1->readAll();
    if(reply1->error()==QNetworkReply::NoError)
    {
        QJsonDocument doc=QJsonDocument::fromJson(byt1);
        QJsonObject obj0=doc.object();
        QJsonObject obj1=obj0.value("result").toObject();
        QJsonArray arry=obj1.value("songs").toArray();
        QJsonObject obj3= arry.at(1).toObject();
        QJsonObject obj4=obj3.value("album").toObject();
        QString picurl=obj4.value("picUrl").toString();

        QNetworkRequest requestalbum2;
        QNetworkAccessManager mangeralbum2;
        requestalbum2.setUrl(picurl);
        QNetworkReply *reply2= mangeralbum2.get(requestalbum2);
///loop2
        QEventLoop loop2;
        connect(&mangeralbum2,SIGNAL(finished(QNetworkReply*)),&loop2,SLOT(quit()));
        loop2.exec();
///
        if(reply2->error()==QNetworkReply::NoError)
        {
            QByteArray byt=reply2->readAll();
    ///save
            QPixmap pix;
            pix.loadFromData(byt);
            pix.save(savelocal);
    ///
            emit setpic(savelocal,name);
            reply2->deleteLater();
        }
        else
        {
            reply1->deleteLater();
            reply2->deleteLater();
            return;
        }
    }
    else
    {
        reply1->deleteLater();
        return;
    }
    reply1->deleteLater();

}

//ͨ������hash��ȡ���
QString MyNetWork::requestLyric(const QString &strSongHash)
{

	ItemResult Item = { 0 };
	QString strTemp(LRYIC_URL);
	strTemp = strTemp.arg(strSongHash);

	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp);
	QNetworkReply *reply = manger.get(request);

	QEventLoop loop;
	connect(&manger, SIGNAL(finished(QNetworkReply*)), &loop, SLOT(quit()));
	loop.exec();

	if (reply->error() == QNetworkReply::NoError)
	{
		QByteArray bytTemp = reply->readAll();
		QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
		QJsonObject objTemp = doc0.object();

		objTemp = doc0.object();
		objTemp = objTemp.value("data").toObject();
		Item.strSongLyric = objTemp.value("lyrics").toString();
	}
	reply->deleteLater();

	return Item.strSongLyric;
}


//�����¸��
void  MyNetWork::requestNewSong() {
	ItemResult Item = { 0 };

	QString strTemp(NEWSONG_URL);

	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp);
	QNetworkReply *reply = manger.get(request);

	QEventLoop loop;
	connect(&manger, SIGNAL(finished(QNetworkReply*)), &loop, SLOT(quit()));
	loop.exec();

	if (reply->error() == QNetworkReply::NoError)
	{
		QByteArray bytTemp = reply->readAll();
		reply->deleteLater();
		QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
		QJsonObject objTemp = doc0.object();
		//objTemp = objTemp.value("data").toObject();
		QJsonArray array0 = objTemp.value("data").toArray();

		int nCount = array0.size();
		QJSEngine JS;
		QJSValue array = JS.newArray(nCount);

		for (int i = 0; i<array0.size(); ++i)
		{
			objTemp = array0.at(i).toObject();

			QString strFullName = objTemp.value("filename").toString();
			QString strHash = objTemp.value("hash").toString();
			QString strSinger;
			QString strMusicName;

			QStringList ls = strFullName.split("-");
			if (ls.size() >= 2) {
				strSinger = ls[0];
				strMusicName = ls[1];
			}

			QJSValue item = JS.newObject();
			item.setProperty("songName", strMusicName);
			item.setProperty("songer", strSinger);
			item.setProperty("songHash", strHash);

			array.setProperty(i, item);
		}


		QJsonDocument jsonDoc = QJsonDocument::fromVariant(array.toVariant());
		//qDebug() << "json[" << jsonDoc.toJson() << "]";

		emit sig_reqNewSongStatus(jsonDoc.toJson());

	}
	reply->deleteLater();

}

//�����ȸ��
void  MyNetWork::requestHotSong() {
	ItemResult Item = { 0 };

	QString strTemp(HOTSONG_URL);

	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp);
	QNetworkReply *reply = manger.get(request);

	QEventLoop loop;
	connect(&manger, SIGNAL(finished(QNetworkReply*)), &loop, SLOT(quit()));
	loop.exec();

	if (reply->error() == QNetworkReply::NoError)
	{
		QByteArray bytTemp = reply->readAll();
		reply->deleteLater();
		QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
		QJsonObject objTemp = doc0.object();
		objTemp = objTemp.value("songs").toObject();
		QJsonArray array0 = objTemp.value("list").toArray();

		int nCount = array0.size();
		QJSEngine JS;
		QJSValue array = JS.newArray(nCount);

		for (int i = 0; i<array0.size(); ++i)
		{
			objTemp = array0.at(i).toObject();

			QString strFullName = objTemp.value("filename").toString();
			QString strHash = objTemp.value("hash").toString();
			QString strSinger;
			QString strMusicName;

			QStringList ls = strFullName.split("-");
			if (ls.size() >= 2) {
				strSinger = ls[0];
				strMusicName = ls[1];
			}

			QJSValue item = JS.newObject();
			item.setProperty("songName", strMusicName);
			item.setProperty("songer", strSinger);
			item.setProperty("songHash", strHash);

			array.setProperty(i, item);
		}


		QJsonDocument jsonDoc = QJsonDocument::fromVariant(array.toVariant());
		//qDebug() << "json[" << jsonDoc.toJson() << "]";

		emit sig_reqHotSongStatus(jsonDoc.toJson());

	}
	reply->deleteLater();

}


///////////////////////////////////////////////////////////////////////////////////////
void MyNetWork::requestSong(const QString &strReq)//�������
{
	/**
	@brief:kuGou API search��hash
	*/

	ItemResult Item = { 0 };
	emit sig_reqSongStatus(Item, SearchStatus::Started);

	QString strTemp(KGLrcPart0);
	strTemp = strTemp.arg(strReq);

	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp);
	QNetworkReply *reply = manger.get(request);

	QEventLoop loop;
	connect(&manger, SIGNAL(finished(QNetworkReply*)), &loop, SLOT(quit()));
	loop.exec();

	if (reply->error() == QNetworkReply::NoError)
	{
		QByteArray bytTemp = reply->readAll();
		reply->deleteLater();
		QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
		QJsonObject objTemp = doc0.object();
		objTemp = objTemp.value("data").toObject();
		QJsonArray array0 = objTemp.value("lists").toArray();
		for (int i = 0; i<array0.size(); ++i)
		{
			objTemp = array0.at(i).toObject();

			Item.strFullName = objTemp.value("FileName").toString();
			Item.strHash = objTemp.value("FileHash").toString();
			Item.strMusicName = objTemp.value("SongName").toString();
			Item.strSinger = objTemp.value("SingerName").toString();
			Item.strAlbum = objTemp.value("AlbumName").toString();
			int ndur = objTemp.value("Duration").toInt();
			QTime time(0, ndur / 60, ndur % 60);
			Item.strDur = time.toString("mm:ss");

			strTemp = URL_KGPLAY;
			strTemp = strTemp.arg(Item.strHash);
			request.setUrl(strTemp);

			QNetworkReply *reply = manger.get(request);
			loop.exec();
			if (reply->error() == QNetworkReply::NoError)
			{
				bytTemp = reply->readAll();
				QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
				objTemp = doc0.object();
				Item.strUrl = "";
				Item.strUrl = objTemp.value("url").toString();
				emit sig_reqSongStatus(Item, SearchStatus::Searching);
			}
			reply->deleteLater();
		}
	}
	emit sig_reqSongStatus(Item, SearchStatus::Finished);
	reply->deleteLater();

	/* QJsonDocument doc0=QJsonDocument::fromJson(byt0);
	QJsonObject obj0=doc0.object();
	QJsonObject obj01= obj0.value("data").toObject();
	QJsonArray array0= obj01.value("lists").toArray();
	QJsonObject obj02= array0.at(0).toObject();
	QString hash= obj02.value("FileHash").toString();*/
}

void MyNetWork::requestNewMv(const QString &mvname)//����Mv
{
	ItemResult Item = { 0 };
	emit sig_reqSongStatus(Item, SearchStatus::Started);

	QString strTemp(MV_SEARCH_URL);

	QByteArray byt = QString(mvname).replace("&", " ").toUtf8().toPercentEncoding();

	strTemp = strTemp.arg(QString(byt));

	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp);
	QNetworkReply *reply = manger.get(request);

	QEventLoop loop;
	connect(&manger, SIGNAL(finished(QNetworkReply*)), &loop, SLOT(quit()));
	loop.exec();

	if (reply->error() == QNetworkReply::NoError)
	{
		QByteArray bytTemp = reply->readAll();
		reply->deleteLater();
		QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
		QJsonObject objTemp = doc0.object();
		objTemp = objTemp.value("data").toObject();
		QJsonArray array0 = objTemp.value("lists").toArray();
		for (int i = 0; i<array0.size(); ++i)
		{
			objTemp = array0.at(i).toObject();

			Item.strFullName = objTemp.value("FileName").toString().replace(QString("<em>"), QString("")).replace(QString("</em>"), QString(""));;
			Item.strHash = objTemp.value("FileHash").toString();
			Item.strMusicName = objTemp.value("MvName").toString().replace(QString("<em>"), QString("")).replace(QString("</em>"), QString(""));
			Item.strSinger = objTemp.value("SingerName").toString();
			Item.strMvHash = objTemp.value("MvHash").toString();

			int ndur = objTemp.value("Duration").toInt();
			QTime time(0, ndur / 60, ndur % 60);
			Item.strDur = time.toString("mm:ss");

			strTemp = URL_KGPLAY;
			strTemp = strTemp.arg(Item.strHash);
			request.setUrl(strTemp);

			QNetworkReply *reply = manger.get(request);
			loop.exec();
			if (reply->error() == QNetworkReply::NoError)
			{
				bytTemp = reply->readAll();
				QJsonDocument doc0 = QJsonDocument::fromJson(bytTemp);
				objTemp = doc0.object();
				Item.strUrl = "";
				Item.strUrl = objTemp.value("url").toString();
				emit sig_reqSongStatus(Item, SearchStatus::Searching);
			}
			reply->deleteLater();
		}
	}
	emit sig_reqSongStatus(Item, SearchStatus::Finished);
	reply->deleteLater();
}




void MyNetWork::requestSongNextPage()
{
    m_pageindex++;
    QByteArray byt=m_songname.replace("&"," ").toUtf8().toPercentEncoding();
    QNetworkRequest requestsong;
    QNetworkAccessManager mangersong;
#if USE_NETCLOUD
    requestsong.setUrl(QUrl("http://music.163.com/api/search/pc"));
    requestsong.setRawHeader("Origin","http://music.163.com");
    requestsong.setRawHeader("Host","music.163.com");
    requestsong.setRawHeader("MUSIC_U","5339640232");
    requestsong.setRawHeader("Referer","http://music.163.com/");
    requestsong.setHeader(QNetworkRequest::ContentTypeHeader,"application/x-www-form-urlencoded");
    QByteArray bytarray="offset=0&limit=100&type=1&s="+byt;

    QNetworkReply *reply1= mangersong.post(requestsong,bytarray);
#else
    QString Url = ITWUSUN.arg(m_pageindex).arg(m_songname);
    requestsong.setUrl(Url);
    QNetworkReply *reply1= mangersong.get(requestsong);
#endif
///loop1
    QEventLoop loop1;
    connect(reply1,SIGNAL(finished()),&loop1,SLOT(quit()));
    loop1.exec();
///
   if(reply1->error()==QNetworkReply::NoError)
   {
        QByteArray arry=reply1->readAll();
        emit sig_reqSongNextPagefinished(arry);
   }
   reply1->deleteLater();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void MyNetWork::requestlrc(const QString &lrcname,qint64 nTotalTime,const QString &lrcloaction,const QString &strHash)//������
{
    QByteArray arrayTemp;
    QString accesskey;
    QString strID;
    QString strHash2=strHash;
    QString strTemp(KGLrcPart0);
    QString songname=lrcname;
    songname.replace("&"," ");
    QNetworkRequest request;
    QNetworkAccessManager manger;
    QJsonDocument jsonDoc;
    QJsonObject jsonObj;
    QJsonArray jsonArray;
    QEventLoop loop;
    QNetworkReply *reply;

    connect(&manger,SIGNAL(finished(QNetworkReply*)),&loop,SLOT(quit()));

    if(0==nTotalTime)
        return;
    if(strHash.isEmpty())
    {

        strTemp=strTemp.arg(songname);
        request.setUrl(strTemp);
        reply=manger.get(request);

        loop.exec();

        if(reply->error() == QNetworkReply::NoError)
        {
            arrayTemp= reply->readAll();
            jsonDoc=QJsonDocument::fromJson(arrayTemp);
            jsonObj=jsonDoc.object();
            jsonObj = jsonObj.value("data").toObject();
            jsonArray = jsonObj.value("lists").toArray();
            jsonObj= jsonArray.at(0).toObject();
            strHash2= jsonObj.value("FileHash").toString();
        }
        reply->deleteLater();
    }
        strTemp=KGLrcPart1;
        request.setUrl(strTemp.arg(songname).arg(nTotalTime).arg(strHash2));
        reply= manger.get(request);

        loop.exec();

        if(reply->error() == QNetworkReply::NoError)
        {
            arrayTemp=reply->readAll();
            jsonDoc=QJsonDocument::fromJson(arrayTemp);
            jsonObj=jsonDoc.object();
            jsonArray=jsonObj.value("candidates").toArray();
            jsonObj= jsonArray.at(0).toObject();
            accesskey= jsonObj.value("accesskey").toString();
            strID=jsonObj.value("id").toString();
        }
        reply->deleteLater();


        strTemp=KGLrcPart2;
        request.setUrl(strTemp.arg(strID).arg(accesskey));
        reply= manger.get(request);

        loop.exec();

        if(reply->error()==QNetworkReply::NoError)
        {
                arrayTemp=reply->readAll();
                jsonDoc=QJsonDocument::fromJson(arrayTemp);
                jsonObj=jsonDoc.object();
                arrayTemp="";
                arrayTemp=jsonObj.value("content").toString().toUtf8();
                arrayTemp=QByteArray::fromBase64(arrayTemp);

                if(arrayTemp.size()!=0)
                {
                    emit dolrcworkfinished(arrayTemp,lrcname);//����������ź�
                    ////////////////////////////���ڱ���
                    QFile file(lrcloaction);
                    file.resize(0);
                    if(file.open(QIODevice::WriteOnly))//�����ʧ��
                    {
                        file.write(arrayTemp); //write the kugou source krc
                        file.close();
                    }
                }
        }
        reply->deleteLater();
}

const QImage &MyNetWork::BgWhiteChange(QImage &image , int brightness)
    {
        uchar *line =image.scanLine(0);
            uchar *pixel = line;
            for (int y = 0; y < image.height(); ++y)
            {
                pixel = line;
                for (int x = 0; x < image.width(); ++x)
                {
                    *pixel = qBound(0, *pixel + brightness, 255);
                    *(pixel + 1) = qBound(0, *(pixel + 1) + brightness, 255);
                    *(pixel + 2) = qBound(0, *(pixel + 2) + brightness, 255);
                    pixel += 4;
                }
                line += image.bytesPerLine();
            }
            return image;
}

void MyNetWork::requestMv(const QString &mvname)
{
    QString strTemp(MV_URL);
    QByteArray byt=QString(mvname).replace("&"," ").toUtf8().toPercentEncoding();
    QNetworkRequest request;
    QNetworkAccessManager manger;
    request.setUrl(strTemp.arg(mvname));
    QNetworkReply *reply1= manger.get(request);
///loop1
    QEventLoop loop1;
    connect(reply1,SIGNAL(finished()),&loop1,SLOT(quit()));
    loop1.exec();
///

   if(reply1->error()==QNetworkReply::NoError)
   {
        QByteArray arry=reply1->readAll();

        //QJsonDocument doc=QJsonDocument::fromJson(arry);
       // QJsonArray array=doc.array();

		QJsonDocument doc0 = QJsonDocument::fromJson(arry);
		QJsonObject objTemp = doc0.object();
		objTemp = objTemp.value("mvdata").toObject();
		objTemp = objTemp.value("le").toObject();

        QString url= objTemp.value("downurl").toString();//���mp3Url
		if (!url.isEmpty()) {
			emit sig_requestMvfinished(url);
		}
         
   }
   else
   {
       reply1->deleteLater();
       return;
   }
   reply1->deleteLater();
}

void MyNetWork::Download(const QString&  url)
{
	m_request.setUrl(url);
	m_pDownloadReply = m_downloadManager.get(m_request);

	int nIndex = url.lastIndexOf('/', -1);
	if (nIndex < 0) {
		m_pDownloadReply->deleteLater();
		return;
	}

	QString strPath = QCoreApplication::applicationDirPath();

	int nRight = url.length() - nIndex - 1;
	QString fileName = url.right(nRight);

	strPath += "/Download/";
	
	QDir tempDir;
	//���filePath·�������ڣ�������
	if (!tempDir.exists(strPath))
	{
		qDebug() << "�����ڸ�·��: " << strPath << endl;
		tempDir.mkpath(strPath);
	}

	strPath += fileName;

	m_File.setFileName(strPath);
	m_File.open(QIODevice::WriteOnly);
	if (m_File.isOpen()) {
		connect(m_pDownloadReply, SIGNAL(readyRead()), this, SLOT(slot_ReplyRead()));
		connect(m_pDownloadReply, SIGNAL(finished()), this, SLOT(slot_ReplyFinished()));
		connect(m_pDownloadReply, SIGNAL(error(QNetworkReply::NetworkError)), this, SLOT(slot_Replyerror(QNetworkReply::NetworkError)));
	}
}

void MyNetWork::downloadMv(const QString &mvname)
{
	QString strTemp(MV_URL);
	QByteArray byt = QString(mvname).replace("&", " ").toUtf8().toPercentEncoding();
	QNetworkRequest request;
	QNetworkAccessManager manger;
	request.setUrl(strTemp.arg(mvname));
	QNetworkReply *reply1 = manger.get(request);
	///loop1
	QEventLoop loop1;
	connect(reply1, SIGNAL(finished()), &loop1, SLOT(quit()));
	loop1.exec();
	///

	if (reply1->error() == QNetworkReply::NoError)
	{
		QByteArray arry = reply1->readAll();

		//QJsonDocument doc=QJsonDocument::fromJson(arry);
		// QJsonArray array=doc.array();

		QJsonDocument doc0 = QJsonDocument::fromJson(arry);
		QJsonObject objTemp = doc0.object();
		objTemp = objTemp.value("mvdata").toObject();
		objTemp = objTemp.value("le").toObject();

		QString url = objTemp.value("downurl").toString();//���mp3Url
		if (!url.isEmpty()) {
			//�����ȡ��url��ֱ�����ر���
			Download(url);
		}
	}
	else
	{
		reply1->deleteLater();
		return;
	}
	reply1->deleteLater();
}

void MyNetWork::slot_Replyerror(QNetworkReply::NetworkError code) {
	Q_UNUSED(code);
	qDebug() << m_pDownloadReply->errorString() << endl;
}

void MyNetWork::slot_ReplyRead() {

	//��ʼд�ļ�

	QByteArray bytes = m_pDownloadReply->readAll();  //��ȡ�ֽ�  

	m_File.write(bytes);

}

void MyNetWork::slot_ReplyFinished() {

	//��ȡ��Ӧ����Ϣ��״̬��Ϊ200��ʾ����  
	QVariant status_code = m_pDownloadReply->attribute(QNetworkRequest::HttpStatusCodeAttribute);

	//�޴��󷵻�  
	if (m_pDownloadReply->error() == QNetworkReply::NoError)
	{
		QByteArray bytes = m_pDownloadReply->readAll();  //��ȡ�ֽ�  
		m_File.write(bytes);
	}

	m_File.close();
	m_pDownloadReply->deleteLater();
}


void MyNetWork::requestBgPic(const QString &author)
{
    QString strTemp(BG_URL);
    strTemp=strTemp.arg(author);

    QNetworkAccessManager manger;
    QNetworkReply *reply;
    reply=manger.get(QNetworkRequest(strTemp));

    QEventLoop loop;
    connect(&manger,SIGNAL(finished(QNetworkReply*)),&loop,SLOT(quit()));
    loop.exec();
    QByteArray bytTemp=reply->readAll();
    reply->deleteLater();

    QJsonDocument doc=QJsonDocument::fromJson(bytTemp);
    QJsonObject obj=doc.object();
    QJsonArray array=obj.value("array").toArray();

    QStringList picList;
    for(int i=0;i<array.count();i++)
    {
       obj= array.at(i).toObject();
       strTemp=obj.value("bkurl").toString();

	   //�����Ϊ��
       if(!strTemp.isEmpty())
       {
           reply=manger.get(QNetworkRequest(strTemp));
           connect(&manger,SIGNAL(finished(QNetworkReply*)),&loop,SLOT(quit()));
           loop.exec();

           bytTemp=reply->readAll();

           QImage image;
           image.loadFromData(bytTemp);
           image=BgWhiteChange(image,-50);
           strTemp=QString("D:/ExcellentAlbum/%1/%2.jpg").arg(author).arg(i);
           image.save(strTemp);


           picList<<strTemp;
           reply->deleteLater();
       }
    }
    if(!picList.isEmpty())
        emit sig_setBgpix(picList,author);
}
