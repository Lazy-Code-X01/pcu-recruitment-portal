import React from 'react'

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import GetStarted from '../Components/FIxedBaner'

import './style.css'
import { Button } from '@mui/material';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';


const AcademicForm = () => {
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
                <form action="">
                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="first-name" className='inputLabel'>First name *</label>
                            <TextField id="input" name='first-name' variant="outlined" color='success' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last-name" className='inputLabel'>Last name *</label>
                            <TextField id="input" name='last-name' variant="outlined" color='success' />
                        </div>
                    </div>
                    
                    <div className="line"></div>
                    
                    <div className="form-group">
                        <label htmlFor="faculty" className='inputLabel'>Department *</label>
                        <Select
                            // labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='Department'
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
                    </div>

                    <div className="line"></div>

                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="email" className='inputLabel'>Email *</label>
                            <TextField id="input" name='email' variant="outlined" color='success' type={'email'} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className='inputLabel'>Phone number *</label>
                            <TextField id="input" name='phone' variant="outlined" color='success' type={'number'}/>
                        </div>
                    </div>

                    <div className="line"></div>
                                        
                    <div className="form-group">
                        <label htmlFor="position" className='inputLabel'>Position applied for *</label>
                        <Select
                            id="demo-simple-select"
                            name='position'
                            variant="outlined"
                            color='success'
                            defaultValue={'professor'}
                        >
                            <MenuItem value='professor'>Professor</MenuItem>
                            <MenuItem value='lecturer'>Lecturer</MenuItem>
                            <MenuItem value='associate professor'>Associate Professor</MenuItem>
                        </Select>
                    </div>

                    <div className="line"></div>

                    <div className="flex">
                        <div className="form-group">
                            <label htmlFor="sex" className='inputLabel'>Sex *</label>
                            <Select
                            name='sex'
                            variant="outlined"
                            color='success'
                            defaultValue={'male'}
                        >
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            <MenuItem value='rather not say'>Rather not say</MenuItem>
                        </Select>

                        </div>

                        <div className="form-group">
                            <label htmlFor="cv" className='inputLabel'>Upload cv *</label>
                            <TextField id="input" name='cv' variant="outlined" color='success' type={'file'}/>
                        </div>
                    </div>

                    <div className="form-group" style={{
                        marginBottom: '0px'
                    }}>
                        <Button variant="contained" color='success' className='formButton'> Submit </Button>
                    </div>

                </form>
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default AcademicForm