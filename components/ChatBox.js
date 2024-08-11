// import React, { useState } from 'react';
// import { searchProducts } from '../services/api';

// const ChatBox = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');

//     const handleSend = async () => {
//         setMessages([...messages, { user: 'You', text: input }]);
        
//         const response = await searchProducts(input);
//         setMessages([...messages, { user: 'You', text: input }, { user: 'System', text: response.data.results }]);

//         setInput('');
//     };

//     return (
//         <div>
//             <h2>Chat with the System</h2>
//             <div>
//                 {messages.map((msg, index) => (
//                     <p key={index}>
//                         <strong>{msg.user}: </strong>{msg.text}
//                     </p>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={handleSend}>Send</button>
//         </div>
//     );
// };

// export default ChatBox;
