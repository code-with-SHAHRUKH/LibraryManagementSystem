// PrintLabel.js
import React from 'react';
import BookQRCode from './BookQrCode';

const PrintLabel = ({ bookId }) => {
  const handlePrint = () => {
    window.print(); // This triggers the browser's print dialog
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Book Label</h2>
        <BookQRCode bookId={123456676767} />
        <button onClick={handlePrint} className="print-button">
          Print Label
        </button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: top;
          height: 100vh; /* Full viewport height */
        }
        .content {
          text-align: center;
          {/* paddingpx */}
        }
        .content h2{
        padding:12px;
        font-weight:bold;
        font-size:26px;
        }
        .print-button {
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius:4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default PrintLabel;
