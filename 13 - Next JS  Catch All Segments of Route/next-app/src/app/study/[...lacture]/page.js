'use client'
import React from 'react'

const Lecture = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>{params.Lecture[0]}</h1>
            <h1>{params.Lecture[1]}</h1>
        </div>
    )
}

export default Lecture
