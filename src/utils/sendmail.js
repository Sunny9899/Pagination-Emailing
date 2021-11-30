//2MAIL Sending USING MAILTRAP
const transporter=require("../configs/mail");//MAIL

module.exports=(to,subject,text,html)=>{

//Mail
const message = {

    to,
    subject,
    text,
    html,
  };

//Mail
transporter.sendMail(message);    //By doing this, everytime user is created, mail will be sent to user 

}
