import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    
    console.log(location.state);
    console.log("called");

    const data = { ...location.state };
    
    return (
        <>
            <p>{data["gender"]}</p>
            <p>{data["age"]}</p>
            <p>{data["description"]}</p>
        </>
    );
}

export default Result;