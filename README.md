# EventMania

A mobile and web platform for organisations to arrange events, find volunteers and raise funds for events.
The application has 3 main entities:

1. Organisation
2. Volunteers
3. Fund Donors

## Process
1. Users need to register first.
2.  Organisation can register for event which it will hold, it will input name of the event, event venue, quotation for the event, fund it would need and number of volunteers required. This data will be saved in the server's file system.
3. Funds will be raised through third-party gateway ie. PayPal.
4.  People who have registered on the app and are nearer to the event venue (which is calculated using Haversine formula),
will be getting a notification regarding the event. If the person is interested to volunteer, he registers for the event. A ticket with event details and a unique QR code is mailed to the volunteer which he needs to show before participating in the event.
5.  At the start of the event, the organisation will be scanning the QR code of the volunteer to mark his presence in the event.
6.  At the end of the event, a link of a feedback form will be shared to the volunteer, which he needs to fill.
7.  Certificate of participation will be sent to the volunteer to encourage active participation in social events, which will be stored in server's file system. The volunteer can ge access to it at anytime.
8.  Sentiment analysis will be generated from the feedbacks given by the volunteers to analyse the success of the event, thereby increasing authenticity and rank of the organisation in social activities.

## Technology stack
1.  Bootstrap
2.  HTML
3.  NodeJS
4.  PHP
5.  Android

## Contributers
1.  Nishant Nimbalkar
2.  Jayesh Kukreja
3.  Pawankumar Maurya
4.  Alok Pandey
5.  Deepika Naik
6.  Vishal Choutele
