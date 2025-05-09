// https://github.com/baunov/gradients-bg
import React from 'react';
import BackButton from "../../../components/BackButton";

const About = () =>{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <h1 className="text-4xl text-sky-400 font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
            Hi! My name is Enora, a Computer Science student at UBC. 
            I love building projects that promote **gender equality** in tech and exploring innovative ways to use **technology for social good**.
            </p>

            <div className="mt-6">
                <h2 className="text-2xl text-sky-400 font-semibold text-center"> Fun Facts</h2>
                <ul className="mt-2 list-disc text-gray-600">
                    <li>🌟 I have a twelve year old ipod that still works (barely).</li>
                    <li>🎨 If I could talk to one philosopher, I would chose Michel Foucault.</li>
                    <li>🎮 Merry is my favorite Animal Crossing character. </li>
                </ul>
            </div>
            <br></br>
            < BackButton />
        </div>
    )
}

export default About;

