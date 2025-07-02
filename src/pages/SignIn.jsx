import ImageBg from '../components/AuthImageBg.jsx'

import {AuthForm, Input} from '../components/AuthForm.jsx'

function SignIn(){

    return(
        <div className='flex h-screen bg-[#F9FAFB]'>
            <div className='w-1/2 flex items-center justify-center'>
                <AuthForm 

                    heading="Log In"
                    subHeading="Log in and start exploring"
                
                    inputs={
                        <>

                            <Input

                                labelText="Email Address"
                                placeholder="moses12345@gmail.com"

                            />

                            <Input

                                labelText="Password"
                                name="password"

                            />
                        
                        </>
                    }

                    buttonText="Sign In"

                    forgotPasswordText="Forgot your password?"
                />
            </div>
            <ImageBg />
        </div>
    )

}

export default SignIn