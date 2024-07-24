import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    
    console.log(location.state);
    console.log("called");

    return (
        <a>Hello World!</a>
    );
}

export default Result;