"use client"

import { useState } from "react"
import { addSubscriber } from "../actions"


export const SubscribeSection = () => {

    const [isPending, setIsPending] = useState(false)
    const [subscribeSuccess, setSubscribeSuccess] = useState("")
    const [subscribeError, setSubscribeError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsPending(true)
        setSubscribeSuccess("")
        setSubscribeError("")
        const formData = new FormData(e.target)
        const res = await addSubscriber(formData)
        if(res.successMessage) {
            setSubscribeSuccess(res.successMessage)
        } else {
            setSubscribeError(res.errorMessage)
        }
        setIsPending(false)
    }


    return(
        <div className="px-5 h-auto pt-14 bg-gray-200/80">
            <div className="max-w-[700px] mx-auto">
                <div className="text-3xl mb-4 text-gray-400/80 text-center">Subscribe to my monthly newsletter!</div>
                <form className="flex flex-col sm:flex-row justify-center items-center gap-y-4 gap-x-4" onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        type="text"
                        name="firstName" 
                        className="h-10 w-full rounded px-3 text-gray-500 border-2 border-gray-300 bg-white" 
                        placeholder="first name" 
                        required 
                    />
                    <input 
                        type="text"
                        name="lastName" 
                        className="h-10 w-full rounded px-3 text-gray-500 border-2 border-gray-300 bg-white" 
                        placeholder="last name" 
                        required 
                    />
                    <input 
                        type="email"
                        name="email"
                        className="h-10 w-full rounded px-3 text-gray-500 border-2 border-gray-300 bg-white" 
                        placeholder="email address" 
                        required />
                    <button className="h-10 w-full rounded text-white bg-green-400 hover:bg-green-500 cursor-pointer" disabled={isPending}>{isPending ? "Processing..." : "SUBSCRIBE"}</button>
                </form>
                <div className="min-h-[75px] flex justify-center items-center">
                    {subscribeSuccess && <p className="text-green-500">{subscribeSuccess}</p>} 
                    {subscribeError && <p className="text-red-500">{subscribeError}</p>}
                </div>
            </div>
        </div>
    )
}