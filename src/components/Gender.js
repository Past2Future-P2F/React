import React, { useState } from 'react';
import './Question.css';

const Gender = ( {setGenderToMale, setGenderToFemale} ) => {
    return (
        <div className='wrp'>
        <span className='question'>성별</span>
            <div>
                <label>
                    <input
                        type="radio"
                        onChange={setGenderToMale}
                    />
                    남성
                </label>
                <label>
                    <input
                        type="radio"
                        onChange={setGenderToFemale}
                    />
                    여성
                </label>
            </div>
        </div>
    );
};

export default Gender;
