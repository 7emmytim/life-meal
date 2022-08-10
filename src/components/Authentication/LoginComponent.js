import { BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const LoginComponent = ({ handleToggle }) => {
    return (
        <div className='overlay-panel overlay-left'>
            <h1 className='text-[#2E266F] font-bold text-2xl'>Welcome Back!</h1>
            <p className='text-[#2E266F] text-sm mt-5'>The burner’s cold, hungry stomachs are waiting for you.</p>
            <div className='mt-11 flex items-center gap-7'>
                <div className='bg-white pt-[13px] pr-[18px] pb-[11px] pl-4 shadow-lg' style={{ borderRadius: '20px 0px 23.5px' }} >
                    <FcGoogle className='w-8 h-8' />
                </div>
                <div className='bg-white pt-[13px] pr-[18px] pb-[11px] pl-4 shadow-lg' style={{ borderRadius: '0px 20px 0px 23.5px' }} >
                    <BsTwitter className='w-8 h-8 text-[#10C6FF]' />
                </div>
            </div>

            <div class='flex flex-row justify-center items-center mt-7 w-full'>
                <hr class='border-[0.6px] w-[22px] border-[#CACAD5]' />
                <p className='flex flex-shrink-0 text-xs text-[#CACAD5] leading-4 px-[7px]'>OR</p>
                <hr class='border-[0.6px] w-[22px] border-[#CACAD5]' />
            </div>
            <div className='mt-10 w-3/4'>
                <div className='text-left'>
                    <label className='text-sm text-[#2E266F]'>Email</label>
                    <input
                        type='email'
                        className='bg-transparent mt-[15px] border-black border-opacity-30 border-[0.6px] rounded-[5px] w-full px-3 py-4 text-xs focus:outline-none focus:border-[#FF7A00] placeholder:text-[#C9C8C6]'
                        placeholder=''
                    />
                </div>
                <div className='text-left mt-6'>
                    <label className='text-sm text-[#2E266F]'>Authorization PIN</label>
                    <input
                        type='password'
                        className='bg-transparent mt-[15px] border-black border-opacity-30 border-[0.6px] rounded-[5px] w-full px-3 py-4 text-xs focus:outline-none focus:border-[#FF7A00] placeholder:text-[#C9C8C6]'
                        placeholder=''
                    />
                </div>
            </div>
            <div className='mt-14 flex items-center justify-between w-3/4'>
                <p className='text-sm text-[#2E266F]'>Lost PIN?</p>
                <button className='bg-[#FF7A00] rounded-[10px] font-semibold text-[13px] text-white py-[18px] px-10'>Login</button>
            </div>
            <div className='mt-[50px] text-sm text-[#2E266F]'>
                <span>Are you new here?</span>
                <button className='font-semibold ml-2' onClick={handleToggle} id='signIn'>Create Account</button>
            </div>
        </div>
    )
}

export default LoginComponent