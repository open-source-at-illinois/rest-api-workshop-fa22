from flask import Flask, request
from flask_cors import CORS

events = {
        0 : {
            "id" : 0,
            "name" : "event1",
            "category" : "food", 
            "location" : "alma",
            "date" : "UTC ",
        }, 
        1 : {
            "id" : 1,
            "name" : "event2",
            "category" : "food", 
            "date" : "UTC ",
            "location" : "alma",
        },
        2 : {
            "id" : 2,
            "name" : "event3",
            "category" : "food",
            "location" : "alma", 
            "date" : "UTC ",
        }}

app = Flask(__name__)
CORS(app)

@app.get("/")
def get_default():
    return {"message": "Welcome to OSAI"}

@app.get("/all")
def get_all():
    # Your code goes here
    return "todo"

@app.get("/event/<event_id>")
def get_event(event_id: int):
    # Your code goes here
    return "todo"

@app.post("/event")
def new():
    # Your code goes here
    return "todo"

@app.put("/event/<event_id>")
def update(event_id: int):
    # Your code goes here
    return "todo"   

@app.delete("/event/<event_id>")
def delete(event_id: int):  # no error handling
    # Your code goes here
    return "todo"

if __name__ == '__main__':
    app.run()
