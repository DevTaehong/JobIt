"use client"
import { useEffect } from "react";


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
        <div className="content-center bg-Natural5 mx-auto w-[500px]">
            <h1 className="text-black content-center text-xl bg-Primary"> Something Went Wrong </h1>
            <button className ="text-red-600 rounded bg-blue-400" onClick ={() => reset()}> Reload Page</button>
        </div>
    )
}