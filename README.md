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

## Method

getMe - getting information about the bot;
getUpdates - receiving updates (messages) from the chat;
sendMessage - send a message;
sendPhoto - sending a photo;
sendAudio - send an audio file;
sendVideo - send a video file;
sendLocation - send location;
sendContact - send contact (name, phone number);


