import React from "react";

function EyesOnMe() {
    function focused() {
        console.log('Good!');
    }
    function blurred(){
        console.log('Hey! Eyes on me!');
    }
    return <button onFocus={focused} onBlur={blurred}>'Eyes on me'</button>
    
}
export default EyesOnMe