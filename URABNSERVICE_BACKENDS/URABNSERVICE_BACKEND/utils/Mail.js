const mailer = require("nodemailer");

const mail = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: "swap10292@gmail.com",
            to: to,
            subject: subject,
            text: text
        };

        const transporter = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'swap10292@gmail.com', // Your Gmail address
                pass: 'soqsjfogmjxlcyjo' // Your Gmail password or App password
            }
        });

        const res = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", res);

        return res;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Re-throwing the error for the caller to handle if needed
    }
};

module.exports={
    mail
}
// const mailer = require('nodemailer');

// const mailSend = async(to,subject,text)=>{
//     const mailOptions = {
//         from: 'swap10292@gmail.com',
//         to: to,
//         subject: subject,
//      //   text: text
//         html: `<h1>${text}</h1>`
//     }

//     const transporter = mailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'swap10292@gmail.com',
//             pass: 'soqsjfogmjxlcyjo'
//         }
//     })
        

//     const res = await transporter.sendMail(mailOptions)
    
//     return res

// }
// mailSend("thakore.swapnil@gmail.com"," UrbanTest","welcome to LocalServiceapp...")

// module.exports = {
//     mailSend
// }