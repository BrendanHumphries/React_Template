import React from "react";

function Fact({someFact, counter}) {
    return (
        <>
            <h2>Cat Fact #{counter}</h2>
            <p>{someFact}</p>
        </>
    )
}

export default Fact;