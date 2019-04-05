<div align="center">
  
![Eventmania](https://i.imgur.com/RHzYyuK.png)
</div>
# EventMania

A mobile and web platform for organisations to arrange events, find volunteers and raise funds for events.
The application has 3 main entities:

1. Organisation
2. Volunteers
3. Fund Donors

## Process
1. Users need to register first.
2.  Organisation can register an event which it will hold. It will input name of the event, event venue, quotation for the event, funds it would need and number of volunteers required. This data will be saved in the server's file system.
3. Funds will be raised through third-party gateway ie. PayPal.
4.  People who have registered on the app and are nearer to the event venue (which is calculated using Haversine formula), will be getting a notification regarding the event. If the person is interested to volunteer, he registers for the event. A ticket with event details and a unique QR code will be mailed to the volunteer which he needs to show before participating in the event.
5.  At the start of the event, the organisers will be scanning the QR code of the volunteer to mark his presence in the event.
6.  At the end of the event, a link of a feedback form will be shared with the volunteer, which he needs to fill.
7.  Certificate of participation will be sent to the volunteer to encourage active participation in social events, which will be stored in server's file system. The volunteer can get access to certificates at anytime.
8.  Sentiment analysis will be generated from the feedbacks given by the volunteers to analyse the success of the event, thereby increasing authenticity and rank of the organisers in social activities.

## Installation
Installing NodeJs
```
$ sudo apt-get install nodejs
```
Installing [Android Studio](https://developer.android.com/studio/)

Cloning the repo
```
$ git clone https://github.com/deadbits06/EventMania.git
```
Installing the dependencies
```
$ cd EventMania
$ npm install
```
Running the server
```
$ node app.js
```

## Technology stack
1.  Bootstrap
2.  HTML
3.  CSS
4.  NodeJS
5.  Python
6.  Android

## Contributers
1.  <a href="https://github.com/Nishant98">Nishant Nimbalkar</a>
2.  <a href="https://github.com/Jaykukreja">Jayesh Kukreja</a>
3.  <a href="https://github.com/pawanabc59" >Pawankumar Maurya</a>
4.  <a href="https://github.com/alok217" >Alok Pandey</a>
5.  <a href="https://github.com/deepika42" >Deepika Naik</a>
6.  <a href="https://github.com/vishalchoutele123">Vishal Choutele</a>
