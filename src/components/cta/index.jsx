import React from 'react'

const Cta = (props) => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24 text-center '>
      <div className='container max-w-xl relative '>
        <h1 className='text-5xl tracking-tighter sm:text-6xl font-bold'>Join Our Referral Program</h1>
        <p className='text-xl text-white/70 mt-5'>Start earning rewards by referring friends to our courses. Sign up now to get your unique referral link and begin sharing!</p>
        <form className="mt-10 flex flex-col sm:flex-row items-center gap-2.5 max-w-sm mx-auto">
          <input type="email" placeholder='your@email.com' className='h-12 bg-white/20 placeholder:text-[#9CA3AF] rounded-lg px-5 font-medium sm:flex-1' />
          <button className='rounded-lg bg-white text-black h-12 px-5'>Get Started</button>
        </form>
      </div>
    </div>
  )
}

export default Cta
