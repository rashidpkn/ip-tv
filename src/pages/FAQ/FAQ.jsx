import React, { useState } from 'react'

function FAQ({ question, ans }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full flex flex-col justify-center gap-5 divide-y divide-[#333]">
            <div className="flex justify-between cursor-pointer" onClick={() => { setShow(!show) }}>
                <p className='text-lg md:text-2xl'>{question}</p>
                <button className='text-3xl text-[#333]' >+</button>
            </div>
            <div className={`${show ? 'block text-white/75 text-md md:text-xl px-[2%] text-justify' : 'hidden'}`}>{ans}</div>
        </div>
    )
}

export default FAQ