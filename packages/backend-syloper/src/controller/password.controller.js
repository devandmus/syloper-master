const User = require("../../database/models/User.model");
const mailer = require('../../config/mailer.config');

// ===PASSWORD RECOVER AND RESET

// @route POST api/auth/recover
// @desc Recover Password - Generates token and Sends password reset email
// @access Public

const recover = async (email) => {
    const user = await User.findOne(email);
    if (user) {
        user.generatePasswordReset();

        user.save()
        .then(user => {
            // send email
            mailer.sendEmail(user)

        })
        .catch(err => res.status(500).json({message: err.message}));

    }
    return {status: 401, error: "No Autorizado"}
}


// @route POST api/auth/reset
// @desc Reset Password - Validate password reset token and shows the password reset view
// @access Public

const reset = async (token) => {
    const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}})
    if (user) {

        //Redirect user to form with the email address
        res.render('reset', {user});


    }
    return {status: 401, error: "No Autorizado"}
}

const resetPassword = async () => {
    const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}})

    if (user) {

        //Set the new password
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        // Save
        user.save((err) => {
            if (err) return res.status(500).json({message: err.message});

            // send email
            const mailOptions = {
                to: user.email,
                from: process.env.FROM_EMAIL,
                subject: "Your password has been changed",
                text: `Hi ${user.username} \n 
                This is a confirmation that the password for your account ${user.email} has just been changed.\n`
            };

            sgMail.send(mailOptions, (error, result) => {
                if (error) return res.status(500).json({message: error.message});

                res.status(200).json({message: 'Your password has been updated.'});
            });
        });
        
        


    }
    return {status: 401, error: "No Autorizado"}


}


module.exports = {
    recover,
    reset,
    resetPassword,
  }
  