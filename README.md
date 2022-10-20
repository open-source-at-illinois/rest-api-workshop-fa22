# rest-api-workshop-fa21

## Required Software

1. Git
2. Python >=3.6
3. Flask
3. Yarn (optional)
4. NPM (optional)

## Installation and setup
1. Go to [https://www.python.org/downloads/](https://www.python.org/downloads/) and download the latest version of Python with pip for your OS.
2. Go to [https://git-scm.org](https://git-scm.org) and install the latest version of git

## Commands

First, Create a fork of this repo

Then, Clone the forked repo
  
```
git clone "https://github.com/your_username_/Project_Name.git" restapi
cd restapi/api
```

Install the required dependencies and Start the flask server

```
pip install -r requirements.txt
set FLASK_ENV=development
flask run
```
    
 ## Slides
 
 Slides are available [here](https://docs.google.com/presentation/d/164n1aMUk4r8zCzwdApw7XQpeJgy0a_y7RTcWsGZW1rw/edit?usp=sharing)
 
 ## TO DO
 
 1. Use [this website](https://freebie.opensourceatillinois.com/) to check the functionality of your API
 2. Write the 5 HTTP methods in `api/app.py`
    * get(“/”) - returns a key-value pair, with key "message" and value "Welcome to OSAI"
            *TIP: Refer to slide 14  
    * get(“/all”) - returns events currently stored in the API
    * post(“/event”) - Adds an event to the end of the events dictionary stored in the API
            * `request.json` contains the data you add in the form
            * puts the data into a new key-value pair in events
            * returns the index in string format  
    * put(“/event/<event_id>”)
            * takes in 1 argument called event_id of int type
            * adds the data in `request.json` to events and returns it 
    * delete(“/event/<event_id>”)
            * takes in 1 argument called event_id of int type
            * deletes the key-value pair with the id passed in
            * returns a "Deletion Successful" message
   
