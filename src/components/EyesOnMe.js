// Code EyesOnMe Component Here


import React from 'react';

function focusing(){
    console.log('Good!')
}
function blurring(){
    console.log('Hey! Eyes on me!')
}

function EyesOnMe(){
    return(
       <button onFocus={focusing} onBlur={blurring}>Eyes on me</button>
    )
}

export default EyesOnMe