import { createContext, useState } from "react";

export const AuthModalContext = createContext()

const AuthModalProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = ()=>setIsOpen(true)
    const onClose = ()=>{
        setIsOpen(false)
        
    }

    const values = {
        isOpen,
        onClose,
        onOpen
    }

    return <AuthModalContext.Provider value={values}>{children}</AuthModalContext.Provider>
}

export default AuthModalProvider