import React from "react";
import FanComponent from "./FanComponent";
import FanCountComponent from "./FanCountComponent";

export default function ApplianceComponent()
{
    return(
        <>
            <FanComponent isOn={false} />
            <FanCountComponent totalFan={11} />
        </>
    )
}