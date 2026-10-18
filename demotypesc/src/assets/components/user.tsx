import React from 'react'

type userShape = {
    name: string,
    age: number,
    isStudent: boolean

}

const User = ({ name, age, isStudent }: userShape) => {
    return (
        <div>{name} {age} {isStudent ? "Student" : "Not a Student"}</div>
    )
}

export default User