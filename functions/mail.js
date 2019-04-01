var nodemailer = require('nodemailer');

function sendMail(name,password,email){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eventmania82@gmail.com',
      pass: 'eventmania@1234'
    }
  });

  var mailOptions = {
    from: 'eventmania82@gmail.com',
    to: email,
    subject: 'Account created from EventMania',
    text: 'Hey '+name+', Admin here. You have been successfully registered on EventMania and your password is '+password+'.\n\n\n\nThanks and Regards,Admin :)'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


function sendTicket(name,eventName,email,attachment){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eventmania82@gmail.com',
      pass: 'eventmania@1234'
    }
  });

  var mailOptions = {
    from: 'eventmania82@gmail.com',
    to: email,
    subject: 'Successfully Registered',
    text: 'Hey '+name+', Admin here. You have been successfully registered for '+eventName+'.\nFor more details check the ticket.\n\n\n\nThanks and Regards,Admin :)',
    attachments: [{
    filename: 'file.pdf',
    path: 'C:/wamp/www/EventMania/files/quotation.pdf',//attachment
    contentType: 'application/pdf'
  }]
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


module.exports= { sendMail, sendTicket };