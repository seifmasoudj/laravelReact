import React from "react";

export default function FanCountComponent(){
    const {totalFan} = props;
    return(
        <>
        <h1>Fans</h1>
        {totalFan > 0 && <h2>You have {totalFan} fan in your House</h2>}
        </>
    )
}