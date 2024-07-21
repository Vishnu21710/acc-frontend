import React, { useState } from 'react'
import { PlusIcon, MinusIcon } from 'lucide-react'
import clsx from 'clsx'


const items = [
    {
        question: "What is the referral program?",
        answer: "Our referral program allows you to earn rewards by inviting others to join our platform. Simply share your unique referral code through mail and start earning when your friends sign up and engage with our courses."
    },
    {
        question: "How do I track my referrals?",
        answer: "You can track your referrals and see your earnings in real-time through your dashboard. We provide detailed reports on your referrals' activities and the rewards you've accumulated."
    },
    {
        question: "What rewards can I earn?",
        answer: "Rewards vary based on the number of successful referrals and the courses your friends enroll in. You can earn cash bonuses, discounts on future courses, or exclusive access to premium content."
    },
    {
        question: "Can I refer multiple friends?",
        answer: "Absolutely! There is no limit to the number of friends you can refer. The more you refer, the more rewards you can earn. Share your referral link as widely as possible to maximize your earnings."
    },
]



const Faq = () => {
    return (
        <div className='bg-black  text-white bg-gradient-to-t from-[#5D2CAB] to-black py-[72px] sm:py-24'>
            <div className='container'>
                <h1 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Frequently asked questions</h1>
                <div className='max-w-[648px] mx-auto '>
                    {
                        items.map(({ question, answer }) => (
                            <AccordianItem key={question} question={question} answer={answer} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const AccordianItem = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='mt-12 py-7 border-b cursor-pointer border-white/30' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex items-center   text-lg font-bold'>
                <span className='flex-1 text-2xl'>{question}</span>
                {!isOpen ? <PlusIcon /> : <MinusIcon />}
            </div>
                {
                    isOpen && <div 
                       
                        className={clsx(!isOpen ? "hidden" : "", "mt-4")}>{answer}</div>

                }
        </div>
    )
}

export default Faq