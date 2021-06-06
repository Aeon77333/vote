from sqlalchemy import Column, Integer, String

from session import Base, session


class Vote(Base):
    """投票モデル"""

    __tablename__ = 'votes'

    id = Column(String, primary_key=True)
    count = Column(Integer)

    def __init__(self, id, count):
        self.id = id
        self.count = count

    def putVote(id):
        vote_item = session.query(Vote).filter_by(id=id).first()
        if vote_item is None:
            count = 1
            post_item = Vote(id, count)
            session.add(post_item)
            session.commit()
        else:
            vote_item.count += 1
            session.add(vote_item)
            session.commit()
