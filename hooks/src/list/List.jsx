import React from "react";

const List = () => {
    const fruits = [
        "apple",
        "banana",
        "orange",
        "grapes",
        "mango",
        "strawberry",
        "pineapple",
        "peach",
        "watermelon",
        "blueberry",
    ];

    return (
        <>
            {
                fruits.map((fruit,index)=>{
                    return (
                        <>
                            <h1 key={index}>{fruit}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

export default List;    