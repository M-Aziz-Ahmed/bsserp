
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { email, userName, message, services, phoneNumber } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailToUs = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc:'info@bizsoftsolution.net',
    subject: `Message from ${userName} (${email}) for ${services}`,
    text: `
    Name: ${userName}
    Email: ${email}
    Phone: ${phoneNumber}
    Message: ${message}
    `,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailToUs, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });
    
    await transport.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject: 'Thank you for contacting us',
        text: `Dear ${userName},\n\nWe've received your message and will get back to you soon.\n\nBest regards,\nBiz Soft Solutions`,
      });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}