import React from "react";

function Keypad() {
    function consoledKeys(){
        console.log('Entering password...');
    }
    return <input type={"password"} onChange={consoledKeys}></input>
    
}
export default Keypad