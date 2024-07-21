import React, { useContext } from 'react'
import { ArrowBigRight, ArrowRight } from 'lucide-react'
import cursorImage from "../../assets/images/cursor.png"
import messageImage from "../../assets/images/message.png"
import { motion } from "framer-motion"
import { ReferalModalContext } from '../../contexts/ReferralModalContext'

const Hero = (props) => {

    const {onOpen, onClose} = useContext(ReferalModalContext)

    return (
        <div className=' relative   overflow-clip bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-[96px]'>
            <div className='absolute top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px] xl:w-[4000px] xl:h-[1300px] h-[375px] w-[750px] rounded-[100%] sm:w-[1536px] sm:h-[768px] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]'>

            </div>
            <div className='container relative'>
                <div className='flex items-center justify-center '>
                    <a href="" className='border inline-flex gap-3 py-1 px-2 rounded-lg border-white/30 '>
                        <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text]'>Refer & Earn Program</span>
                        <span className='inline-flex items-center gap-1'>
                            <span>Learn More</span>
                            <ArrowRight className='h-4 w-4' />
                        </span>
                    </a>
                </div>
                <div className='flex justify-center mt-8 '>
                    <div className='inline-flex relative '>
                        <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex'>Refer And<br />Earn Rewards</h1>
                        <motion.div className='absolute hidden sm:inline right-[720px] top-[108px]'
                            drag
                            dragSnapToOrigin

                        >
                            <img draggable={false} src={cursorImage} height={200} width={200} className='max-w-none' alt='cursor image' />
                        </motion.div>
                        <motion.div className='absolute hidden sm:inline top-[56px] left-[750px]'
                            drag
                            dragSnapToOrigin
                        >
                            <img draggable={false} src={messageImage} height={200} width={200} className='max-w-none' alt='message image' />
                        </motion.div>

                    </div>
                </div>
                <p className='text-center text-xl mt-8 max-w-md mx-auto'>Join our referral program and earn amazing rewards for every friend you invite. Start sharing and earning today!</p>
                <div className='flex justify-center mt-8'>
                    <button onClick={onOpen} className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Start Referring</button>
                </div>

            </div>
        </div>
    )
}

export default Hero
