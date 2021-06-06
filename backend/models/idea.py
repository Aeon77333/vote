from sqlalchemy import Column, Integer, String
import json
import uuid

from session import Base, session


class Idea(Base):
    """アイデアモデル"""

    __tablename__ = 'ideas'

    id = Column(Integer, primary_key=True)
    idea = Column(String)
    count = Column(Integer)

    def __init__(self, id, idea, count):
        self.id = id
        self.idea = idea
        self.count = count

    def getIdea():
        """アイデアデータを取得する

        Returns:
            list: 取得結果
        """
        ideas = session.query(Idea).all()
        ideas_arr = []
        for idea in ideas:
            idea_obj = dict(id=idea.id, idea=idea.idea)
            ideas_arr.append(idea_obj)

        return json.dumps(ideas_arr)

    def postIdea(idea):
        """アイデアを登録する

        Args:
            idea (string): 登録するアイデア
        """
        id = str(uuid.uuid4())
        count = 0
        post_item = Idea(id, idea, count)
        session.add(post_item)
        session.commit()

    def putIdeaCount(id):
        """投票数を更新する

        Args:
            id (string): 投票数を更新するアイデア
        """
        get_item = session.query(Idea).filter_by(id=id).first()
        get_item.count += 1
        session.add(get_item)
        session.commit()

    def getVoteResult():
        """投票結果を取得する

        Returns:
            list: 取得結果
        """
        ideas = session.query(Idea).all()
        ideas_arr = []
        for idea in ideas:
            idea_obj = dict(id=idea.id, idea=idea.idea, count=idea.count)
            ideas_arr.append(idea_obj)

        return json.dumps(ideas_arr)
