var nodemailer = require("nodemailer");


//-----------------------------------------------------------------------------
export async function sendMail(toMail,subject, fromEmail, content) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: fromEmail,
    to: [toMail],
    bcc : [process.env.NODEMAILER_EMAIL],
    subject: subject,
    html: content,
    // attachments: [
    //   // {
    //   //   filename : 'terms.pdf',
    //   //   path: '/assets/pdf/terms.pdf',
    //   // },
    //   {
    //     filename : 'logo.png',
    //     path: '/assets/images/logo.png',
    //   },
     
    // ],
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}