import React, { useState } from 'react';

function ChatAssistant() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', sender: 'assistant' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessages = [
      ...messages,
      { text: userInput, sender: 'user' }
    ];

    // Simulating a response from the AI Assistant
    setTimeout(() => {
      const assistantResponse = getAssistantResponse(userInput);
      setMessages([
        ...newMessages,
        { text: assistantResponse, sender: 'assistant' }
      ]);
    }, 500);

    setMessages(newMessages);
    setUserInput('');
  };

  const getAssistantResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();

    if (lowerCaseInput.includes('hello')) {
      return 'Hi there! How can I help you today?';
    } else if (lowerCaseInput.includes('calendar')) {
      return 'I see you want to check the calendar. You can pick a date to view.';
    } else if (lowerCaseInput.includes('alarm')) {
      return 'You can set an alarm for any time you want. Just specify the time!';
    } else {
      return "Sorry, I don't understand that. Could you please ask something else?";
    }
  };

  return (
    <div className="chat-container">
      <h3>AI Chat Assistant</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatAssistant;
