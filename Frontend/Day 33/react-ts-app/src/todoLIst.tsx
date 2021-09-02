import React from 'react';

interface todoLIstProps {
    title: string,
    done: boolean,
}

const TodoLIst = ({title,done}:todoLIstProps) => {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
}

export default TodoLIst;