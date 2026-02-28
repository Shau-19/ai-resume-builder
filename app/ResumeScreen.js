// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// 
// function ResumeScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [experience, setExperience] = useState('');
//   const [skills, setSkills] = useState('');
//   const [education, setEducation] = useState('');
//   const [objective, setObjective] = useState('');
//   const [resume, setResume] = useState('');
// 
//   const handleResume = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/resume', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, experience, skills, education, objective })
//       });
//       const data = await response.json();
//       setResume(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// 
//   return (
//     <View>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Experience"
//         value={experience}
//         onChangeText={setExperience}
//       />
//       <TextInput
//         placeholder="Skills"
//         value={skills}
//         onChangeText={setSkills}
//       />
//       <TextInput
//         placeholder="Education"
//         value={education}
//         onChangeText={setEducation}
//       />
//       <TextInput
//         placeholder="Objective"
//         value={objective}
//         onChangeText={setObjective}
//       />
//       <Button title="Generate Resume" onPress={handleResume} />
//       <Text>{resume}</Text>
//     </View>
//   );
// }
// 
// export default ResumeScreen;