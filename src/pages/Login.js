import { useState } from 'react'
import LoginComponent from '../components/Authentication/LoginComponent'
import SignUpComponent from '../components/Authentication/SignUpComponent'
import './Login.scss'

const Login = () => {

    const [toggled, setToggled] = useState(true)

    const handleToggle = () => setToggled(prev => !prev)

    return (
        <div className={`container ${toggled ? 'right-panel-active' : ''}`} id='container'>
            <div className='form-container sign-up-container'>
                <img src='/images/sign-in-overlay.png' className='w-full' alt='life meal' />
            </div>
            <div className='form-container sign-in-container'>
                <img src='/images/life-meal-bg.png' className='w-full' alt='life meal' />
            </div>
            <div className='overlay-container'>
                <div className='overlay'>
                    <LoginComponent handleToggle={handleToggle} />
                    <SignUpComponent handleToggle={handleToggle} />
                </div>
            </div>
        </div>
    )
}

export default Login