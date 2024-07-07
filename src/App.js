import './App.css';
import { useCallback, useState } from 'react';
import Question from './components/Question';

function App() {

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const handleChange1 = useCallback(function handleChange1(event) {
    setAnswer1(event.target.value);
  }, []);
  const handleChange2 = useCallback(function handleChange2(event) {
    setAnswer2(event.target.value);
  }, []);
  const handleChange3 = useCallback(function handleChange3(event) {
    setAnswer3(event.target.value);
  }, []);

  const testButtonClick = () => {
    console.log("TEST");
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
  };

  return (
    <div className="Questions">
      <Question question="질문 1" onChange={handleChange1}/>
      <br></br>
      <Question question="질문 2" onChange={handleChange2}/>
      <br></br>
      <Question question="질문 3" onChange={handleChange3}/>
      <br></br>
      <button onClick={testButtonClick}>Test</button>
    </div>
  );
}

export default App;
