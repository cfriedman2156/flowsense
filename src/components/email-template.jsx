import React from 'react';

export default function EmailTemplate({ name, email, phone, companyName, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      <h1 style={{ color: '#007BFF' }}>New Inquiry</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Company:</strong> {companyName}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}
