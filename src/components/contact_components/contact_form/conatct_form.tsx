"use client";

import { sendEmail } from '@/lib/actions/email.action';
import styles from './contact_form.module.css';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { Suspense } from "react"




export const experimental_ppr = true

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    try {
      await sendEmail({ name, email, message });
      setStatus('Successfully sent!');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setStatus('');
      }, 5000); // Clear status message after 5 seconds
    } catch (error) {
      setStatus('Failed to send email.');
      setTimeout(() => {
        setStatus('');
      }, 5000); // Clear status message after 5 seconds
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <h2>Get In Touch With Us!</h2>
        <p>We’d love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out.</p>
      </div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              style={{
                resize: 'none', // Disable resizing
              }}
              placeholder="Type your message here"
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {status && (
            <div className={styles.status_container}>
              <h4 className={styles.status_message}>Message status: <span>{status}</span></h4>
            </div>
          )}
        </form>

        <div className={styles.cont_img}>
          <div className={styles.map}>
          <Suspense>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9212084048627!2d3.3154927750403216!3d6.531635293461082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5d92645925%3A0x1c45036c13286d66!2s13%20Oba%20Goloba%20St%2C%20Isolo%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1719822070292!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
            </Suspense>
          </div>

          <div className={styles.others}>
            <h3>Contact details</h3>
            <div>
              <Image src="/assets/mail-plus.svg" alt="Mail" width={16} height={16}></Image>
              <p>luminouslifefoundation@gmail.com</p>
            </div>
            <div>
              <Image src="/assets/phone.svg" alt="Phone" width={16} height={16}></Image>
              <p>+2348186248404</p>
            </div>
            <div>
              <Image src="/assets/linked.svg" alt="Linkedin" width={16} height={16}></Image>
              <Link href="/https://www.linkedin.com/company/luminous-life-foundation/" className={styles.l}>@luminous-life-foundation</Link>
            </div>
            <div>
              <Image src="/assets/insta.svg" alt="Instagram" width={16} height={16}></Image>
              <Link href="https://www.instagram.com/luminous_life_foundation?igsh=MzBpaWVrODV4Nmxs" className={styles.l}>@luminous_life_foundation</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
