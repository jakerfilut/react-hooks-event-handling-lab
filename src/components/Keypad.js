// Code Keypad Component Here

import React from 'react';

function changeEvent(){
    console.log('Entering password...')
}

function Keypad(){
    return(
       <input type="password" onChange={changeEvent} />
    )
}

export default Keypad