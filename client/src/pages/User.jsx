import React, { useState, useEffect } from 'react'
import departmentService from '../services/departmentService'
import UserForm from '../components/UserForm'

const User = () => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        departmentService.getAll()
            .then(departments => {
                setDepartments(departments)
            })
    }, [])

    return (
        <UserForm 
            departments={departments}
        />
    )
}

export default User
