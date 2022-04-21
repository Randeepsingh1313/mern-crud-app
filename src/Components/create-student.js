import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
    const [formValues, setFormValues] = useState({
        name: '', email: '', rollno: ''
    })

    // onSubmit handler
    const onSubmit = studentObject => {
        axios.post ( 'http://localhost:3000/students/create-student', studentObject)
        .then(res => {
            if (res.status === 200){
                alert('Student successfully created')
            }
            else {
                Promise.reject()
            }
        })
        .catch(err => alert('Something went wrong'))
    }

     // Return student form
     return (
            <StudentForm initailValues={formValues} onSubmit={onSubmit} enableReinitialize>
                Create Student
            </StudentForm>
     )
}

export default CreateStudent