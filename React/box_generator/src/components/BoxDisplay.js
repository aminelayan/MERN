import React, { useState } from 'react';

const BoxDisplay=(props)=> {
    return (
    <>
    <div>
        {props.colors.map((x,id) => {
            return <div key={id} style={{width:20,height:200,backgroundColor:x.color,margin:20}}></div>
        })}
    </div>  
        </>
        );
}
export default BoxDisplay;