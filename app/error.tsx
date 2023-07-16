import { useEffect } from "react";
"use client"

export default function Error({
    error,
    reset,
}: {
    error: Error & {digest?: string}
    reset: () => void
}) {
    useEffect(() =>{
        console.error(error)
    }, [error])

    return(
        <div>
            <h2 className="text-red content-center "> Alert!!!!! You pressed the wrong button!!! </h2>
            <button className ="text:red rounded bg-color:blue" onClick ={() => reset()}> Press the right one</button>
        </div>
    )
}