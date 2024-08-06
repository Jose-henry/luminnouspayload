// src/lib/actions/email.actions.ts
"use server";

import nodemailer from 'nodemailer';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailParams): Promise<void> {
  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure the email options
    const mailOptions = {
      from: email,
      to: process.env.DESTINATION_EMAIL,
      subject: 'New Message from Luminous Life Foundation Website',
      text: `You have received a new message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
    
  }
}
