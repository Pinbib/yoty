# Yoty

This package was created to create telegram bots, it has a minimal set of functions and it simplifies the work

# Using

## Package installation

To install the package, use this command:

``` npm install yoty ```

## Work

In your executable, import the class TelegramBot:

``` const TelegramBot = require('./yoty'); ```

Creating a new bot:

``` var bot = new TelegramBot("token"); ```

token - the token you received from BotFather

Now we can start contacting the bot, let's register the "start" command, we can do this through the "register" method, it takes two parameters conditions, execution in conditions we write the desired command, and in execution an anonymous function with two parameters message and user they contain the message itself and information about the sender, or rather, there is a method id , first_name , username , we only need id , let's get started:
``` 
bot.register("/start", (message, user)=>{
    console.log("user: "+user.username);
    console.log("send message: "+ message.join(' '));
}) 
```
We registered the start command and when it is received, "user: username send message: message" is displayed in the console, I note that the message parameter is an array.
But if now we try to send the start command, then nothing will happen, this is because we did not start the bot wiretapping, in order to start the wiretapping there is a listen method, but for correct operation, you need to register the last message, for this there is the oldsave method, that we will write down the wiretapping at the end of the program code like this:
```
bot.oldsave();
bot.listen();
```
Now the bot is listening!

Let's make the bot send a text message in response:

To do this, remove the above two code examples and write a new one:

```
bot.register("/start", (message, user)=>{
    bot.sendText(user.id, "Hello World")
})
bot.oldsave();
bot.listen();
```
Еhe sendText method has two parameters chatID - send chat ID, data - the text itself, more about message sending methods are below.

START!

# !
If the bot has not previously been sent a single message, then it may see an error that will point to update_id , send a message to the bot for a solution!

## Method

### getMe

getMe - getting information about the bot;

### getUpdates

getUpdates - receiving updates (messages) from the chat;

### sendText

sendText - send a message;

chatID - send chat ID;<br>
data - the text itself;

### sendPhoto

sendPhoto - sending a photo;

chatID - send chat ID;<br>
url - url to your photo;

### sendAudio

sendAudio - send an audio file;

chatID - send chat ID;<br>
url - url to your audio;

### sendVideo

sendVideo - send a video file;

chatID - send chat ID;<br>
url - url to your video;<br>

### sendLocation

sendLocation - send location;

chatID - send chat ID;<br>
latitude, longitude - latitude, longitude to your location;

### sendContact

sendContact - send contact (name, phone number);

chatID - send chat ID;<br>
phone_number - phone number;<br>
first_name - first name;<br>
last_name - last name;

### register

register - registers a command that is an anonymous function that will be executed when the command is issued;

### oldsave

oldsave - registers the last listened command (preferably use this method once and before listen);

### listen

listen - starts listening for commands received by the bot

### request

request - this method sends requests (use of this method is not recommended);<br>

url - url to your data;
