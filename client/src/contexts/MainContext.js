import React, { createContext, useState } from 'react'


export const MainContext = createContext()

const MainProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const data = {
        open,
        setOpen
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider
