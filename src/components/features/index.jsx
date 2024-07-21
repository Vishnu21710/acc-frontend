import React from 'react'
import Feature from './feature'

const features = [
    {
        title: "Easy Referrals",
        description: "Invite friends with a simple click and track your referral status effortlessly."
    },
    {
        title: "Reward Tracking",
        description: "Monitor your earnings and rewards in real-time, and see how much you've earned with each referral."
    },
    {
        title: "Exclusive Offers",
        description: "Get access to special offers and bonuses exclusive to our referral program members."
    },
]

const Features = () => {
    return (
        <div className='bg-black text-white py-[72px] sm:py-24'>
            <div className='container'>
                <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Maximize Your Earnings</h2>
                <div className='sm:max-w-xl mx-auto '>
                    <p className='text-center mt-5 text-xl text-white/70'>Join our referral program and start earning today. Share your unique referral code, invite friends, and watch your rewards grow.</p>
                </div>
                <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                    {
                        features.map(({ title, description }) => {
                            return (
                                <Feature title={title} description={description} key={title}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features
