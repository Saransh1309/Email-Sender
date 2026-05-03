const sendEmail = require('./utils/sendEmail'); // Correct path

(async () => {
  try {
    await sendEmail(
      'your-email@gmail.com', // put your real email here
      'This is a test email from my Node.js app 🚀'
    );
    console.log('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
})();
