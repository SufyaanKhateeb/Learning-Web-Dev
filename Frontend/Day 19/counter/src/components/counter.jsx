import React,{ useState } from 'react';

function Counter() {
    let [count,setCount] = useState(0);
    function increase() {
        setCount(++count);
    }
    return (
        <button onClick={increase}>{count}</button>
    );
}

export default Counter;