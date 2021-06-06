class Const:
    """
    定数クラス

    Attributes:
        なし
    """

    """ アプリの定数 """
    # SQL方言　※mariadbはmysqlを使う
    DIALECT = 'mysql'
    # SQLドライバ　※mariadbはmysqlを使う
    DRIVER = 'pymysql'
    # ユーザ名
    USERNAME = 'root'
    # パスワード
    PASSWORD = ''
    # 接続先情報
    HOST = 'localhost'
    PORT = ''
    DATABASE = 'vote'
    CHARSET_TYPE = 'utf8'
