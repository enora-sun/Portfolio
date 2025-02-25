import React from 'react';
import BackButton from "../../../components/BackButton";

const Resume = () =>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-4xl text-sky-400 font-bold mb-4">Resume</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
            Space holder for my resume and contact info.
            </p>
            <br></br>
            <BackButton />
            </div>
            )
}

export default Resume;