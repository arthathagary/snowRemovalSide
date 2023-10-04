var nodemailer = require("nodemailer");

// const redirectURL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000/assets/pdf/terms_and_conditions.pdf"
//       : "https://www.mrsnowremoval.ca/assets/pdf/terms_and_conditions.pdf";

const redirectURL = "https://www.mrsnowremoval.ca/assets/pdf/terms_and_conditions.pdf";
//-----------------------------------------------------------------------------
export async function sendMail(toMail,subject, fromEmail, content) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uaaagary@gmail.com",
      pass: "zbmb oybk cwms kkjo",
    },
  });

  var mailOptions = {
    from: fromEmail,
    to: [toMail],
    bcc : ["uaaagary@gmail.com"],
    subject: subject,
    html: content,
    // attachments: [
    //   {
    //     filename : 'terms_and_conditions.pdf',
    //     path: redirectURL,
    //   }
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