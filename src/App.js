import './App.css';
import { useCallback, useState } from 'react';
import Question from './components/Question';
import Gender from './components/Gender';

function App() {

  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState(0);
  const [description , setDescription] = useState('');

  const handleGender = useCallback(function handleGender(value) {
    setGender(value);
  }, []);
  const handleAge = useCallback(function handleAge(event) {
    setAge(event.target.value);
  }, []);
  const handleDescription = useCallback(function handleDescription(event) {
    setDescription(event.target.value);
  }, []);

  const testButtonClick = () => {
    console.log("TEST");
    console.log(gender);
    console.log(age);
    console.log(description);
  };

  return (
    <div className="questions">
      <Gender setGenderToFemale={handleGender("Female")} setGenderToMale={handleGender("Male")}/>
      <br></br>
      <Question question="나이" onChange={handleAge}/>
      <br></br>
      <Question question="자신을 잘 표현할 수 있는 단어 3개와 그 이유를 말해보세요." onChange={handleDescription}/>
      <br></br>
      <span>{gender}</span>
      <button onClick={testButtonClick}>Test</button>
    </div>
  );
}

export default App;
