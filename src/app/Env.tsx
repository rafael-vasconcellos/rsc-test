'use client'
export default function Env() { 
    return ( 
        <p className="px-4">Running on: {typeof global !== "undefined"? 'node' : 'browser'}</p>
    )
}