import React, {useContext, useState} from "react";

const ModalsContext = React.createContext()

export const ModalsProvider = ({children}) => {
    const [isAlertModal, setIsAlertModal] = useState(false)
    const [isMsg, setIsMsg] = useState('')

    const alertModal = () => {
        setIsAlertModal(prevState => !prevState)
    }

    return (
        <ModalsContext.Provider value={{
            alertModal,
            isAlertModal,
            setIsAlertModal,
            isMsg,
            setIsMsg
        }}>
            {children}
        </ModalsContext.Provider>
    )
}

export const useModalsContext = () => useContext(ModalsContext)