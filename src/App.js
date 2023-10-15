import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(' ').filter(word => word !== '').length;

  return (
    <div className="app">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
