import Link from 'next/link'
import React from 'react'

const StudentList = () => {

    const studentlist = [
        {
            id: 1,
            name: 'Usman',
            route: '/studentlist/usman'
        },
        {
            id: 2,
            name: 'Ahmad',
            route: '/studentlist/ahmad'
        },
        {
            id: 3,
            name: 'Sufyan',
            route: '/studentlist/sufyan'
        },
        {
            id: 4,
            name: 'Ayan',
            route: '/studentlist/ayan'
        }
    ]

  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {/* <li><Link href='/studentlist/1'>Usman</Link></li>
            <li><Link href='/studentlist/2'>Ahmad</Link></li>
            <li><Link href='/studentlist/3'>Sufyan</Link></li>
            <li><Link href='/studentlist/4'>Ayan</Link></li> */}
            {/* <li><Link href='/studentlist/usman'>Usman</Link></li>
            <li><Link href='/studentlist/ahmad'>Ahmad</Link></li>
            <li><Link href='/studentlist/sufyan'>Sufyan</Link></li>
            <li><Link href='/studentlist/ayan'>Ayan</Link></li> */}

            {
                studentlist.map((data) => {
                    return(
                        <li key={data.id}><Link href={data.route}>{data.name}</Link></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default StudentList
