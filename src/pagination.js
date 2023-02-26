import React from "react";


export default function Pagination({gotonextpage,gotoprevpage}){
    return(
        <>
        {gotoprevpage &&<button onClick={gotoprevpage}>Prev</button>}
        {gotonextpage && <button onClick={gotonextpage}>Next</button>}
        
        </>
    )
}