import nodemailer from 'nodemailer';
function sendQuizMail() {
    const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailDetails = {
    from: 'praksamonline@gmail.com',
    to: 'prakash86.it@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail',
  };

  transport.sendMail(mailDetails, function (err, data) {
    console.log('data: ', data);
    if (err) {
      console.log('Error Occurs');
    } else {
      console.log('Email sent successfully');
    }
  });
}

export default sendQuizMail;
