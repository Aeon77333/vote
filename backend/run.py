from flask import Flask
from flask import request
from flask_cors import CORS
from flask_api import status

from models.idea import Idea
from models.vote import Vote

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:8000"}})


@app.route('/idea', methods=['GET', 'POST', 'PUT'])
def idea():
    try:
        if request.method == 'GET':
            message = {}
            data = {}

            message['message'] = {'a': 12}
            data['data'] = message

            return Idea.getIdea(), status.HTTP_200_OK
        if request.method == 'POST':
            if not request.is_json:
                return 'is not json', status.HTTP_400_BAD_REQUEST
            request_body = request.json
            db_items = []
            for value in request_body.values():
                db_items.append(value)

            idea = db_items[0]
            Idea.postIdea(idea)
            return 'post success!', status.HTTP_200_OK
        if request.method == 'PUT':
            if not request.is_json:
                return 'is not json', status.HTTP_400_BAD_REQUEST
            request_body = request.json
            Idea.putIdeaCount(request_body['id'])
            return 'data updated!', status.HTTP_200_OK
    except Exception as e:
        raise e


@app.route('/vote-result', methods=['GET'])
def vote_result():
    try:
        if request.method == 'GET':
            message = {}
            data = {}

            message['message'] = {'a': 12}
            data['data'] = message

            return Idea.getVoteResult(), status.HTTP_200_OK
    except Exception as e:
        raise e


if __name__ == '__main__':
    app.run(threaded=True, debug=True)
