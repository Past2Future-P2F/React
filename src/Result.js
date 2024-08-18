import './Result.css';
import { useLocation, useNavigate } from "react-router-dom";
import { React, useCallback, useEffect, useState } from 'react';
import { SyncLoader } from "react-spinners";

function Result() {
    console.log("result");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const navigator = useNavigate();
    const location = useLocation();

    const data = location.state;

    const handleClick = useCallback(function handleClick() {
        navigator('/', {
            replace: true
        });
    });

    const fetchImage = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/create', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'prompt': `${data["gender"]}, ${data["age"]}, ${data['description']}`
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            setImage(imageUrl);
        } catch (error) {
            console.error('Fetch error:', error);
            window.alert('Error fetching image');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(data);
        fetchImage();
    }, [data]);
    
    return (
        <div className='questions'>
            {image == null ? 
                <>
                <p>이미지를 가져오고 있습니다!</p>
                <SyncLoader/>
                </>
            :
                <img src={image} alt="icons"/>
            }
            <br/>
            <button onClick={handleClick}>이전으로</button>
        </div>
    );
}

export default Result;