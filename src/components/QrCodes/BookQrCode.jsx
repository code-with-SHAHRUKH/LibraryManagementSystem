// BookQRCode.js
import React from 'react';
import {QRCode} from 'react-qr-code';

const BookQRCode = ({ bookId }) => {
    if (!bookId) {
        return <p>Error: Book ID is missing.</p>;
      }
  const qrValue = `https://yourapp.com/book/${bookId}`; // URL or unique identifier for the book

  return (
    <div>
      <QRCode value={qrValue} />
      <p>QR Code for Book ID: {bookId}</p>
    </div>
  );
};

export default BookQRCode;
