import React, {useEffect, useState} from "react";

export const AlertContext = React.createContext()

const AlertContextProvider = ({children}) => {
    const [alert, setAlert] = useState()
    const [remainingTime, setRemainingTime] = useState(5000)
    const showAlert = (type, message) => {setAlert({type, message})}
    const closeAlert = () => {setAlert(); setRemainingTime(5000)}

    useEffect(() => {
        let timeout
        if (remainingTime === 0) {
            closeAlert()
        } else if (alert) {
            timeout = setTimeout(() => {
                setRemainingTime(prev => prev - 10)
            }, 10)
        }
        return () => {clearTimeout(timeout)}
    }, [remainingTime,alert])
    return (
        <AlertContext.Provider value={{showAlert, closeAlert}}>
            {children}
            {alert && <AlertComponent {...alert} remainingTime={remainingTime} closeHandler={closeAlert}/>}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider

export const AlertComponent = ({type, message, closeHandler, remainingTime}) => {
    const classes = {
        success: "success-alert",
        error: "error-alert"
    }
    return (
        <div className={`alert-container`}>
            <div className={`alert-item ${classes[type]}`}>
                <span>{message}</span>
                <span className={"close-icon"} onClick={closeHandler}>x</span>
                <span className={`underline ${classes[type]}`} style={{width: remainingTime * 100 / 5000 + "%"}}></span>
            </div>
        </div>
    )
}