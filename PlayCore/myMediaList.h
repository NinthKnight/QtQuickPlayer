#ifndef MYMEDIALIST_H
#define MYMEDIALIST_H
#include <QUrl>
#include <QMap>
#include <QObject>

class myTablePlayListFinal;


enum PlayMode{playInOrder=0,playRandom=1,playOneCircle=2};

class myMediaList : public QObject
{
    Q_OBJECT
public:
    explicit myMediaList(QObject *parent = 0);
 /*pass pointer*/
    void setTableFinal(myTablePlayListFinal *pParent){m_pFinal=pParent;}

    QUrl mediaUrl(int index);//赋值给musicIndex;

    void addPlayList(const QString& url,const QString&hash=""){m_list.append(url);m_hashMap.insert(url,hash);}

    const QList<QString> & GetList(){return m_list;}

    const QMap <QString,QString>& GetHashMap(){return m_hashMap;}

    void setPlayMode(PlayMode);

    void setCurIndex(int index){m_musicIndex=index;}

    int nextMediaIndex();

    int preMediaIndex();

    void clearMediaList(){m_list.clear();m_hashMap.clear();}

public Q_SLOTS:
    void slot_removeSong(int index);
signals:
private:
    int indexMode;
    int m_musicIndex;
    QList<QString> m_list;
    QMap <QString,QString> m_hashMap;
    myTablePlayListFinal *m_pFinal;
};

#endif // MYMEDIALIST_H
