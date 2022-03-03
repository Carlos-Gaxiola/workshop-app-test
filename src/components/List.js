import React, { useState, useEffect } from 'react'

const List = ({ multiplyNumbers }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Implementation goes here
  }, [multiplyNumbers]);


  return (
    <></>
    /*items.map(item =>
        <div key={item}>{item}</div>
    )*/
  )
}

export default List
