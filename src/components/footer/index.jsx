import React from 'react'
import { Instagram, TwitterIcon, FacebookIcon, Youtube } from 'lucide-react'



const Footer = (props) => {
    return (
        <footer className='py-5 bg-black text-white/60 border-t-2 border-white/20'>
            <div className='container'>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
                    <div className='text-center'>
                        © 2024 Accredian, Inc. All rights reserved
                    </div>
                    <ul className='flex justify-center gap-2.5 botdert'>
                            <li><Instagram/></li>
                            <li><TwitterIcon/></li>
                            <li><FacebookIcon/></li>
                            <li><Youtube/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer