import './MainPage.css';
import { useCallback, useState } from 'react';
import Question from './components/Question';
import Gender from './components/Gender';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigator = useNavigate();

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [description , setDescription] = useState('');

  const handleGender = useCallback(function handleGender(event) {
    setGender(event.target.value);
  }, []);
  const handleAge = useCallback(function handleAge(event) {
    setAge(event.target.value);
  }, []);
  const handleDescription = useCallback(function handleDescription(event) {
    setDescription(event.target.value);
  }, []);

  const validate = () => {
    if (gender === '' || age === '' || description === '') return false;
    if (isNaN(age)) return false;
    if (parseInt(age) <= 0) return false;
    return true;
  };

  const handleClick = () => {
    if (!validate()) {
      alert("입력이 올바르지 않습니다.");
      return;
    }
    const list = {
      "gender": gender,
      "age": parseInt(age),
      "description": description
    };
    navigator('./result', {
      replace: true,
      state: { ...list },
    });
  };

  return (
    <div className="questions">
      <Gender onChange={handleGender}/>
      <br/>
      <Question question="나이" onChange={handleAge}/>
      <br/>
      <Question question="자신을 잘 표현할 수 있는 단어 3개와 그 이유를 말해보세요." onChange={handleDescription}/>
      <br/>
      <button onClick={handleClick}>제출</button>
    </div>
  );
}

export default MainPage;
