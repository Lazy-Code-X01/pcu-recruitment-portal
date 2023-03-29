import React, { useState } from 'react';


import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import GetStarted from '../Components/FIxedBaner'

import './style.css'
import { Button } from '@mui/material';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';



import { ConstructionRounded, SettingsSystemDaydreamOutlined } from '@mui/icons-material';
import { set } from 'firebase/database';
import { async } from '@firebase/util';

const AcademicForm = () => {
    

    const [ userData, setUserData ] = useState({
        firstName:"",
        lastName:"",
        dept:"computer science",
        email:"",
        phone:"",
        position:"professor",
        sex:"rather not say",
        cv:"",
    });

    const regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )

    const formValid = ({ isError, ...rest }) => {
        let isValid = false;
        Object.values(isError).forEach(val => {
            if(val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
        return isValid;
    };

    let name, value;
    const postUserData = (event) =>{
        name = event.target.name;
        value = event.target.value;


        setUserData({ ...userData, [name]: value });

    };


    const handleFormValidation = () => {    
        const { firstName, lastName, dept, email, phone, position, sex, cv } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //First name     
        if (!firstName) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = "First name is required.";    
        }    

        //Last name
        if (!lastName) {    
            formIsValid = false;    
            formErrors["lastNameErr"] = "Last name is required.";    
        }

        //Last name
        if (!dept) {    
            formIsValid = false;    
            formErrors["deptErr"] = "Dept is required.";    
        }
    
        //Email    
        if (!email) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailErr"] = "Invalid email address.";    
        } 
        
        //Phone number    
        if (!phone) {    
            formIsValid = false;    
            formErrors["phoneErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phone)) {    
                formIsValid = false;    
                formErrors["phoneErr"] = "Invalid phone number.";    
            }    
        }
        
        //Position    
        if (position === '') {    
            formIsValid = false;    
            formErrors["positionErr"] = "Select position.";    
        }  
    
        //sex    
        if (sex === '' || sex === "rather not say") {    
            formIsValid = false;    
            formErrors["sexErr"] = "Select gender.";    
        }    
        
        //cv    
        if (!cv === '' || cv === "") {    
            formIsValid = true;    
                
        }  
          
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    };    

    const submitToConsole = () => {
        console.log(userData.firstName,userData.lastName,userData.dept,userData.email,userData.phone,userData.position,userData.sex,userData.cv);
    };

    const submitData = async (event) => {
        event.preventDefault();
        const {firstName, lastName, dept, email, phone, position, sex, cv} = userData;
        if(firstName && lastName && dept && email && phone && position && sex && cv){
            const res = await fetch(
                "https://pcu-application-portal-default-rtdb.firebaseio.com//userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({
                        firstName,
                        lastName,
                        dept,
                        email,
                        phone,
                        position,
                        sex,
                        cv,
                    }),
                }
            );
            if(res){
                alert("Application Submitted");
            } else{
                alert("Please fill the form correctly");
            }
        }
    };
    
    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div>
        <Navbar 
            text={<Link to={'/'} style={{color: '#fff', fontWeight: '600'}} onClick={scrollToTop}> Home </Link>}
        />
        <GetStarted 
            text={'Provide all required information to proceed'}
            headText={'Get Started'}
        />

        

        <div className="academicFormContainer">
            <div className="academicForm">
                <form method="POST">
                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="first-name" className='inputLabel'>First name *</label>
                            <TextField id=""  placeholder='First Name' required name='firstName' value={userData.firstName} onChange={postUserData} variant="outlined" color='success' type={'text'} required />
                            <small className="text-danger">First name is required </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name" className='inputLabel'>Last name *</label>
                            <TextField id=""  placeholder='Last Name' required name='lastName' value={userData.lastName} onChange={postUserData} variant="outlined" color='success' type={'text'} required />
                            <small className="text-danger">Last name is required </small>
                        </div>
                    </div>
                    
                    <div className="line"></div>
                    
                    <div className="form-group">
                        <label htmlFor="faculty" className='inputLabel'>Department *</label>
                        <Select
                            // labelId="demo-simple-select-label"
                            required
                            name='dept' value={userData.dept} onChange={postUserData}
                            variant="outlined"
                            color='success'
                            defaultValue={'computer science'}
                        >
                            <MenuItem value='computer science'>Computer Science</MenuItem>
                            <MenuItem value='accounting'>Accounting</MenuItem>
                            <MenuItem value='bio chemistry'>Bio Chemistry</MenuItem>
                            <MenuItem value='microbiology'>Microbiology</MenuItem>
                            <MenuItem value='business administation'>Business Administation</MenuItem>
                            <MenuItem value='physics'>Physics</MenuItem>
                        </Select>
                        <small className="text-danger">Department is required </small>
                    </div>

                    <div className="line"></div>

                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="email" className='inputLabel'>Email *</label>
                            <TextField id="" required name='email'  placeholder='Email' value={userData.email} onChange={postUserData} variant="outlined" color='success' type={'email'} />
                            <small className="text-danger">Email is required </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className='inputLabel'>Phone number *</label>
                            <TextField placeholder='Phone number' required name='phone' value={userData.phone} onChange={postUserData} variant="outlined" color='success' type={'number'} />
                            <small className="text-danger">Phone Number is required </small>
                        </div>
                    </div>

                    <div className="line"></div>
                                        
                    <div className="form-group">
                        <label htmlFor="position" className='inputLabel'>Position applied for *</label>
                        <Select
                            id=""  required
                            name='position' value={userData.position} onChange={postUserData} 
                            variant="outlined"
                            color='success'
                            defaultValue={'professor'}
                        >
                            <MenuItem value='professor'>Professor</MenuItem>
                            <MenuItem value='lecturer'>Lecturer</MenuItem>
                            <MenuItem value='associate professor'>Associate Professor</MenuItem>
                        </Select>
                        <small className="text-danger">Position is required </small>
                    </div>

                    <div className="line"></div>

                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="sex" className='inputLabel'>Sex *</label>
                            <Select id='sex'  required
                            name='sex' value={userData.sex} onChange={postUserData} 
                            variant="outlined"
                            color='success'
                            defaultValue={'male'}
                        >
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            <MenuItem value='rather not say'>Rather not say</MenuItem>
                        </Select>
                        <small className="text-danger">Gender is required </small>

                        </div>

                        <div className="form-group">
                            <label htmlFor="cv" className='inputLabel'>Upload cv *</label>
                            <TextField id="" name='cv' value={userData.cv} onChange={postUserData} variant="outlined" color='success' type='file'/>
                        </div>
                        
                    </div>

                    <div className="form-group" style={{
                        marginBottom: '0px'
                    }}>
                        <Button onClick={submitData} variant="contained" color='success' className='formButton'> Submit </Button>
                    </div>

                </form>
            </div>
        </div>


       
      

        <Footer />

    </div>
  )
}

export default AcademicForm