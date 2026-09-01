const express = require("express");
const router = express.Router();
const transporter = require("../config/mail");

router.post("/", async (req, res) => {

    const {
        name,
        company,
        email,
        phone,
        project,
        message
    } = req.body;

    try {

        const mailOptions = {

            from: process.env.EMAIL_USER,

            // During testing, send the email to your Gmail account.
            // Later, replace this with info@manpowerprojects.com
            to: process.env.EMAIL_USER,

            subject: "New Quote Request",

            html: `
                <h2>New Quote Request</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Company:</strong> ${company}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Phone:</strong> ${phone}</p>

                <p><strong>Project:</strong> ${project}</p>

                <p><strong>Message:</strong><br>${message}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);

console.log("Email sent successfully!");
console.log(info);

        res.json({
            success: true,
            message: "Quote Request Sent Successfully"
        });

    } catch (err) {

        console.log("❌ Email Error");
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;