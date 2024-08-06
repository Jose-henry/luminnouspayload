import fetch from 'node-fetch';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

interface MailchimpErrorResponse {
  title?: string;
  detail?: string;
}

export async function subscribeToMailchimp(email: string): Promise<string> {
  const { MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID } = process.env;

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
    throw new Error('Mailchimp API Key or Audience ID is not defined in the environment variables');
  }

  // Validate email format
  if (!isValidEmail(email)) {
    throw new Error('Invalid email address');
  }

  const emailHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

  // Check if the email already exists in Mailchimp
  const checkExistsResponse = await fetch(`https://us13.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${emailHash}`, {
    method: 'GET',
    headers: {
      'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (checkExistsResponse.ok) {
    const memberData = await checkExistsResponse.json();
    if (memberData.status === 'subscribed') {
      throw new Error('Email already subscribed');
    }
  } else if (checkExistsResponse.status !== 404) {
    const errorData: MailchimpErrorResponse = await checkExistsResponse.json();
    throw new Error(errorData.detail || 'Failed to check email in Mailchimp');
  }

  // If email does not exist or is not subscribed, proceed with subscription
  const subscribeResponse = await fetch(`https://us13.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (!subscribeResponse.ok) {
    const errorData: MailchimpErrorResponse = await subscribeResponse.json();
    throw new Error(errorData.detail || 'Failed to subscribe to Mailchimp');
  }

  // Send a welcome email after successful subscription
  await sendWelcomeEmail(email);
  return 'Successfully subscribed!';
}

async function sendWelcomeEmail(email: string) {
  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('Email credentials are not defined in environment variables');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to any email service you prefer
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Luminous Life Foundation" <${EMAIL_USER}>`, // Use display name with email
    to: email,
    subject: 'Welcome to Our Newsletter!',
    text: 'Thank you for subscribing to our newsletter. Stay tuned for updates!',
    html: `<p>Dear Subscriber,</p>
           <p>Thank you for subscribing to our newsletter at Luminous Life Foundation. We are thrilled to have you on board!</p>
           <p>Stay tuned for the latest updates and insights on our projects and initiatives.</p>
           <p>Best regards,<br/>The Luminous Life Foundation Team</p>`,
  };

  await transporter.sendMail(mailOptions);
}

function isValidEmail(email: string): boolean {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
