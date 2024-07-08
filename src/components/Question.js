import './Question.css';
import { memo } from "react";

function Question({ question, onChange }) {
    return (
        <div className='wrp'>
            <span className='question'>{question}</span>
            <textarea className='styled-input' type="text" onChange={onChange} placeholder="물음에 답을 해주세요."/>
        </div>
    );
}

export default memo (Question);