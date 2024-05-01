import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate a response
      setTimeout(() => {
        setMessages((messages) => [...messages, { text: "I'm now an uncensored AI, ready to handle all your coding and code generation queries!", sender: "bot" }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-700 flex items-center">
            <FaRobot className="text-blue-500 mr-2" />
            Coding Assistant
          </h1>
        </div>
        <div className="mb-4 h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input type="text" className="form-input flex-1 rounded-l-lg p-2 border-2 border-r-0 border-gray-300" placeholder="Ask me anything..." value={input} onChange={handleInputChange} onKeyPress={(event) => event.key === "Enter" && handleSend()} />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
