from http.client import BAD_REQUEST, OK
from flask import Flask, abort, request
from flask_cors import CORS

events = {
    # Here is an example event:
    0: {
        "id": 0,
        "name": "OSAI Social",
        "category": "food",
        "location": "CIF 1038",
        "date": "Oct 6th 2022 7PM",
    }
}

app = Flask(__name__)
CORS(app)


@ app.get("/")
def get_default():
    return {"message": "I <3 Open-Source at Illinois"}


@ app.get("/all")
def get_all():
    """
    Returns a map of all events to their event ID
    """
    # Your code goes here

    # Since this function is not yet implemented, return Status 501
    # https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
    abort(501)


@ app.get("/event/<event_id>")
def get_event(event_id: int):
    """
    Returns the event object for the given event_id
    """
    event_id = int(event_id)
    # Your code goes here

    abort(501)


@ app.post("/event")
def new():
    """
    Stores a new event object in the database
    """
    # HINT: You can access the object to be created using request.json
    # Your code goes here

    abort(501)


@ app.patch("/event/<event_id>")
def new():
    """
    Updates the event object for the given event_id
    """
    # HINT: You can access the object to be updated using request.json
    # Your code goes here

    abort(501)


@ app.delete("/event/<event_id>")
def delete(event_id: int):  # no error handling
    """
    Deletes the event object for the given event_id
    """
    event_id = int(event_id)
    # Your code goes here

    abort(501)


if __name__ == '__main__':
    app.run()
