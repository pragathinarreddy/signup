import React, { useState } from 'react'

function Signup() {
    const [inputValues, setInputValue] = useState({
        studentName : "",
        age : "",
        className : "",
        date : "",
        fee : ""
    })
   const [studentNameError, setStudentNameError] = useState("")
   const [ageError, setAgeError] = useState("")
   const [classNameError, setClassNameError] = useState("")
   const [dateError, setDateError] = useState("")
   const [feeError, setFeeError] = useState("")

       
    const handleChange = (e) => {
        setInputValue(
            {
                ...inputValues, [e.target.name] : e.target.value
            }
        )

    }
    
   
    const handleClick = () => {

        if(inputValues.studentName.length > 5 && inputValues.age <" 50" && inputValues.className < "10"){
            setStudentNameError("your name should not have more than 5 characters")
            
        }else if(inputValues.age > "50" && inputValues.studentName.length < 5  && inputValues.className < "10"){
            setAgeError("your age is more than 50")
        }
        else if (inputValues.className > "10" &&   inputValues.studentName.length < 5 && inputValues.age < "50"){
            setClassNameError("you are not eligible")

        }
        else if (inputValues.className > "10" &&  inputValues.age > "50" ){
            setAgeError("your age is more than 50")
            setClassNameError("you are not eligible")



        }
        else if(inputValues.studentName.length > 5 && inputValues.age > "50" && inputValues.className > "10" ){
            setStudentNameError("your name should not have more than 5 characters")
            setAgeError("your age is more than 50")
            setClassNameError("you are not eligible")


        }
        
        else{
            alert (`
            name--- ${inputValues.studentName} 
            age --- ${inputValues.age}
           className --- ${inputValues.className} 
            date --- ${inputValues.date}
            fee --- ${inputValues.fee}
            `)
            setInputValue({
                studentName: "",
                age: "",
                className: "",
                date: "",
                fee : ""
            })
        }
        
        
        
      
            
           
           
    }
  return (
    <div className='container'>
        <h2>SignUp</h2>
        <div className='width'>
            <label htmlFor="studentName">Name</label>
            <input value={inputValues.studentName} onChange={(e) => handleChange(e)} name='studentName' type="text" />
            <p className='error'>{studentNameError}</p>
        </div>
        <div className='width'>
            <label htmlFor="age">Age</label>
            <input value={inputValues.age} onChange={(e) =>  handleChange(e)} name='age' type="text" /> 
            <p className='error'>{ageError}</p>  
        </div>
        <div className='width'>
            <label htmlFor="className">Class</label>
            <input value={inputValues.className} onChange={(e) =>  handleChange(e)} name='className' type="text" />
            <p className='error'>{classNameError}</p>
        </div>
        <div className='width'>
            <label htmlFor="date">Joining Date</label>
            <input value={inputValues.date} onChange={(e) =>  handleChange(e)} className='date' name='date' type="date" />
        </div>
        <div className='width'>
            <label htmlFor="fee">Fee</label>
            <input value={inputValues.fee} onChange={(e) =>  handleChange(e)} name='fee' type="text" />
        </div>
        <button onClick={() => handleClick()} className='register'>Register</button>
        
    </div>
  )
}

export default Signup