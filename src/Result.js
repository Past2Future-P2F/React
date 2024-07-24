import './Result.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from 'react';

function Result() {
    const navigator = useNavigate();
    const location = useLocation();

    const data = { ...location.state };

    const handleClick = useCallback(function handleClick() {
        navigator('/', {
            replace: true
        });
    });
    
    return (
        <div className='questions'>
            <p>{data["gender"]}</p>
            <p>{data["age"]}</p>
            <p>{data["description"]}</p>
            <br/>
            <button onClick={handleClick}>이전으로</button>
        </div>
    );
}

export default Result;