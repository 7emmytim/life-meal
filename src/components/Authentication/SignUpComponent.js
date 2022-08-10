const SignUpComponent = ({ handleToggle }) => {
    return (
        <div className='overlay-panel overlay-right'>
            <h1 className='text-[#2E266F] font-bold text-2xl'>Do you want to collaborate with us to provide healthy, tasty and home-made meals?</h1>
            <p className='text-[#2E266F] text-sm mt-5'>Fill in your details below and let’s get started!</p>
            <div className='mt-14 flex items-center justify-between w-3/4'>
                <p className='text-sm text-[#2E266F]'></p>
                <button className='bg-[#FF7A00] rounded-[10px] font-semibold text-[13px] text-white py-[18px] px-10'>Next</button>
            </div>
            <div className='mt-[50px] text-sm text-[#2E266F]'>
                <span>Already have an account?</span>
                <button className='font-semibold ml-2' onClick={handleToggle} id='signIn'>Login</button>
            </div>
        </div>
    )
}

export default SignUpComponent