import React from 'react'
import acme_logo from "../../assets/images/acme.png"
import echo_logo from "../../assets/images/echo.png"
import apex_logo from "../../assets/images/apex.png"
import celestial_logo from "../../assets/images/celestial.png"
import pulse_logo from "../../assets/images/pulse.png"
import quantum_image from "../../assets/images/quantum.png"
import {motion} from "framer-motion"


const images= [
    {
        alt: "acme logo",
        src: acme_logo
    },
    {
        alt: "celestial logo",
        src: celestial_logo
    },
    {
        alt: "apex logo",
        src: apex_logo
    },
    {
        alt: "echo logo",
        src: echo_logo
    },
    
    {
        alt: "pulse logo",
        src: pulse_logo
    },
    {
        alt: "quantum logo",
        src: quantum_image
    }
]

const LogoTicker = (props) => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24  '>
        <div className='container '>
            <h2 className='text-xl text-center text-white text-opacity-70'>Trusted by the world&apos;s most innovative teams</h2>
            <div className='flex xl:max-w-6xl mx-auto  overflow-hidden mt-9 before:content[""] before:z-10 after:content[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]'>
                <motion.div className='flex flex-none gap-16 pr-16'
                transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity
                }}
                    initial={{translateX: 0}}
                    animate={{translateX: '-50%'}}
                >
                    {
                        images.map((image, index)=><img className='flex-none h-8 w-auto ' src={image.src} key={index} alt={image.alt}/>)
                    }
                    {
                        images.map((image, index)=><img className='flex-none h-8 w-auto ' src={image.src} key={index} alt={image.alt}/>)
                    }
                    
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker