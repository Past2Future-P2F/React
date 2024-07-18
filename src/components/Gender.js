import React from 'react';
import './Gender.css';
import './Question.css';

const Gender = ( {onChange} ) => {
    return (
        <div className='wrp'>
        <span className='question'>성별</span>
            <div className='radio-container'>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={onChange}
                    />
                    남성
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={onChange}
                    />
                    여성
                </label>
            </div>
        </div>
    );
};

export default Gender;
