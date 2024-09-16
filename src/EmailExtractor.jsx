import React, { useState } from 'react';

const EmailExtractor = () => {
  const [email, setEmail] = useState('');
  const [inputText, setInputText] = useState('');

  // Regular expression to match email patterns
  const extractEmail = (text) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const result = text.match(emailRegex);
    return result ? result[0] : 'No email found';
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleExtractEmail = () => {
    const extractedEmail = extractEmail(inputText);
    setEmail(extractedEmail);
  };

  return (
    <div>
      <h2>Email Extractor</h2>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Paste or type some text here"
      />
      <br />
      <button onClick={handleExtractEmail}>Extract Email</button>
      <p>Email: {email}</p>
    </div>
  );
};

export default EmailExtractor;
