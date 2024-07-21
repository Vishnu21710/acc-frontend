import { createContext, useState } from "react";

export const ReferalModalContext = createContext()

const ReferalModalProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = ()=>setIsOpen(true)
    const onClose = (callback)=>{
        setIsOpen(false)
        if(callback){
            callback()
        }
    }

    const values = {
        isOpen,
        onClose,
        onOpen
    }

    return <ReferalModalContext.Provider value={values}>{children}</ReferalModalContext.Provider>
}

export default ReferalModalProvider