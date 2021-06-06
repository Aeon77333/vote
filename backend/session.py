from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session

from const import Const


engine = create_engine(
    f'{Const.DIALECT}+{Const.DRIVER}://{Const.USERNAME}:@{Const.HOST}/{Const.DATABASE}?charset={Const.CHARSET_TYPE}', echo=True)
Base = declarative_base()
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
