const express = require("express");
const router = express.Router();
const db = require("../database/db");
const transporter = require("../config/mail");

router.post("/", (req, res) => {

    const { name, email, phone, company, subject, message } = req.body;

    const sql = `
        INSERT INTO enquiries
        (name,email,phone,company,subject,message)
        VALUES (?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [name, email, phone, company, subject, message],
        async (err, result) => {

            if (err) {
                console.log("MySQL Error:", err);

                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            try {

                const mailOptions = {

                    from: process.env.EMAIL_USER,

                    // During testing send it to your Gmail.
                    // Later change this to info@manpowerprojects.com
                    to: process.env.EMAIL_USER,

                    subject: "New Website Enquiry",

                    html: `
                        <h2>New Website Enquiry</h2>

                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Company:</strong> ${company}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong><br>${message}</p>
                    `
                };

                const info = await transporter.sendMail(mailOptions);

                console.log("✅ Email Sent Successfully");
                console.log(info);

                res.json({
                    success: true,
                    message: "Enquiry Submitted Successfully"
                });

            } catch (emailError) {

                console.log("❌ Email Error:", emailError);

                res.status(500).json({
                    success: false,
                    message: emailError.message
                });

            }

        }
    );

});

module.exports = router;