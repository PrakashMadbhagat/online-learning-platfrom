const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "prakashmadbhagat861@gmail.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});


exports.sendResetEmail = async (email,resetToken) =>{
  const resetLink = `http://localhost:5000/reset-password/${resetToken}`;
  const mailOption = {
    from : "prakashmadbhagat861@gmail.email" ,
    to : email ,
    subject : 'Password Reset',
    text : `Click the link to reset your password: ${resetLink}`

  };
  await transporter.sendMail(mailOption);

}