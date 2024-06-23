# personal_chatroom
This is a chatroom website. We will be using gunicorn and nginx as the channel to connect to the front end.

Every time the user enters the web, they are prompt to login. If users are intending to bypass the login, they should be redirected to the login page, while error message is displayed and notified, sent and stored to the backend data base. This attempt will store the time, and the ip where the connection comes from. 

Every user should only be able to send message with their registered name.
Every user can only see the message they sent to target, and messages they've received. 

Before running, check if all requirements are installed by running
```bash
pip install -r ./server/requirements.txt
```

To run the server
```bash
./run server
```
To run the client
```bash
./run client
```

Run command below to view repository map
```bash
ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/-/|/'
```

## Server
Built using python, this is the back end of the application.
The encrypted front end messages are sent here. 

## Client
Built using javascript, this is the front end of the application, working with HTML and CSS.
