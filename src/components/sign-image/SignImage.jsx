import React from 'react'

function SignImage() {
  return (
    <div className='hidden relative xl:flex flex-col justify-center items-center min-h-256 w-177.5 max-w-177.5 text-white bg-[url("/images/sign-image.webp")] bg-cover bg-center h-screen'>
      <div className='relative z-20 text-center flex flex-col gap-3.25 max-w-102.5'>
        <h1 className='text-3xl font-bold'>Chuks Kitchen</h1>
        <p className='text-xl font-medium'>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
      </div>
      <div className="absolute inset-0  bg-login-overlay"></div>
    </div>
  )
}

export default SignImage