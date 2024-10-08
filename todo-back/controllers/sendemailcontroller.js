const User = require('../models/User');
const nodemailer = require('nodemailer');
require('dotenv').config()
exports.sendemail = 
 async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email manquant');
    }

    const mailOptions = {
        from: 'abirbouaouina0@gmail.com',
        to: email,
        subject: 'Message de Bienvenue',
        text: 'Bonjour ', 
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé avec succès');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
};

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587, 
    secure: false, 
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
    },
});
