import React from 'react'

const Student = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h>Student Details</h>
            <h1>Name : {params.student}</h1>
        </div>
    )
}

export default Student
