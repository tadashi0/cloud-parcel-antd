import React, { createContext, useContext } from 'react'

interface IContextProps {
    name: string
}

const initialContext: IContextProps = {
    name: 'tadashi'
}

const Context = createContext(initialContext)

const ExampleUseContext = () => {
    return (
        <div>
            <Context.Provider value={initialContext}>
                <FunContext />
            </Context.Provider>
        </div>
    )
}

const FunContext = () => {
    const context = useContext(Context)
    return (
        <div>
            {context.name}
        </div>
    )
}

export default ExampleUseContext
