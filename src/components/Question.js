import { memo } from "react";

function Question({ question, onChange }) {
    return (
        <div>
            <span>{question}</span>
            <input type="text" onChange={onChange} placeholder="물음에 답을 해주세요."/>
        </div>
    );
}

export default memo (Question);