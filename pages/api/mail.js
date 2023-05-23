const mail = require('@sendgrid/mail');

export default async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = JSON.parse(req.body);

    mail.setApiKey(process.env.SENDGRID_API_KEY);

    const emailMessage = `
      Name: ${name}\r\n
      Email: ${email}\r\n
      Phone number: ${phoneNumber}\r\n
      Message: ${message}
    `;

    const data = {
      to: ['noreply@gtccomponents.co.za', 'gtcafrica1@gmail.com', 'soni@cherrypopmedia.co.za'],
      from: 'noreply@gtccomponents.co.za',
      subject: 'New web form message',
      text: emailMessage,
      html: emailMessage.replace(/\r\n/g, '<br>'),
    };

    await mail.send(data);

    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};
