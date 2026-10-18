import React from 'react'

const Main = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const userlist=[
        {id:1,name:'ansh',age:21,isStudent:false},
        {id:2,name:'ashish',age:22,isStudent:true},
        {id:3,name:'bhola',age:23,isStudent:false},
        {id:4,name:'bholu',age:24,isStudent:true}
    ]
    return (
        <main>
            <h1>Main content</h1>
            <p>this is main content box</p>
            <p>{2+2}</p>
            <p>Current time: {hours}:{minutes}:{seconds}</p>
            <p> today date {date.toDateString()}</p>

            {userlist.map(user=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.age}</p>
                    <p>{user.isStudent}</p>

                </div>
                
            ))}

        </main>
    )
}

export default Main