import React, { useState } from 'react';
import axios from 'axios';

const ChatModal = ({ toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: generatePrompt([...messages, newMessage]),
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const aiMessage = { sender: 'ai', text: response.data.choices[0].text.trim() };
      setMessages([...messages, newMessage, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  const generatePrompt = (messages) => {
    return messages.map((msg) => `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`).join('\n') + '\nAI:';
  };

  return (
    <div className="bg-gradient-to-r from-golden to-primarycontent p-4 rounded-lg shadow-lg mt-4 w-80 rounded-[10px]">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <h2 className="text-lg font-bold text-gray-800">Chat</h2>
        <button
          onClick={toggleChat}
          className="text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
      <div className="mt-2 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg bg-white text-gray-800 placeholder-gray-500"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatModal;