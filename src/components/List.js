import React, { useState, useEffect } from 'react'

const List = ({ multiplyNumbers }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Uploading items')
        setItems(multiplyNumbers())
    }, [multiplyNumbers]);


    return (
        items.map(item => 
            <div key={item}>{item}</div>    
        )
    )
}

export default List