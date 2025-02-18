import { use } from "react";


async function getData() { 
    await new Promise((resolve) => setTimeout(resolve, 3 * 1000));
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.text())
}

export default function Todos() { 
    const response = use(getData());

    return ( 
        <>
            <p>{response}</p>
        </>
    )
}