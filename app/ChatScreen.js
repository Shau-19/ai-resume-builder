// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// 
// function ChatScreen() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');
// 
//   const handleChat = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message })
//       });
//       const data = await response.json();
//       setResponse(data.message);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// 
//   return (
//     <View>
//       <TextInput
//         placeholder="Type a message"
//         value={message}
//         onChangeText={setMessage}
//       />
//       <Button title="Chat" onPress={handleChat} />
//       <Text>{response}</Text>
//     </View>
//   );
// }
// 
// export default ChatScreen;