import React from 'react'
import Input from '../../Component/Input/Input';
import { Button } from '../../Component';
import { FcGoogle} from 'react-icons/fc'
import { SiFacebook} from 'react-icons/si'

function Loginscreen() {
  return (
    <div>
    <div className='bg-[red] w-[640px]'>
    <div className='bg-[green] text-center'>
    <h1>Login with ElyX</h1>
    <p>Let’s set up your account so you can start a bidding.</p>
    </div>
    
    <Input
          label="Email address"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
    <Input
          label="password"
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          required
        />
        <div className='flex mt-5 justify-center'>
        <Button
              label="Login / Signup"
              height={"h-[60px]"}
              width={"w-[580px]"}
              variants="primary"
            />
        </div>

        <div className='flex justify-center mt-5 mb-5 gap-2  '>
        <div className='flex item-center '>
        <FcGoogle className='absolute w-8 h-8 mt-3 ml-1'/>
        <Button
              className="relative text-14px"
              label="LOGIN WITH GOOGLE"
              height={"h-[60px]"}
              width={"w-[282px]"}
              variants="secondary"
            />
        </div>
            <div className='flex item-center '>
        <SiFacebook className='absolute w-8 h-8 mt-3 ml-1'/>
        <Button
              className="relative text-[14px]  "
              label="LOGIN WITH GOOGLE"
              height={"h-[60px]"}
              width={"w-[282px]"}
              variants="secondary"
            />
        </div>
              
        </div>
        <h3 className='text-center text-[18px]'>Don't have an account?<a href='#'>Get started</a></h3>
         
    </div>
    </div>
  )
}

export default Loginscreen;
