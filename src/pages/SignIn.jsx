import ImageBg from '../components/AuthImageBg.jsx'

import {AuthForm, Input} from '../components/AuthForm.jsx'

function SignIn(){

    return(
        <div className='flex h-screen bg-[#F9FAFB]'>
            <div className='w-1/2 flex items-center justify-center'>
                <AuthForm>
                    heading = "Log In"
                    subHeading = "Log in and start exploring"

                    inputs={
                        <>
                            <Input
                                labelText={"Email"}
                                placeholder={"Email address"}
                                name={"emailAddress"}
                                inputType={"email"}
                            />

                            <Input
                                labelText={"Password"}
                                placeholder={"Password"}
                                name={"loginPassword"}
                                inputType={"password"}
                            />
                        </>
                    }
                </AuthForm>
                
                buttonText = "Log In"

                buttonLink = ""

                bottomLinkText = "Forgot password?"

                noAccount = {true}

                forgotPassword = {true}
            </div>
            <ImageBg />
        </div>
    )

}

export default SignIn