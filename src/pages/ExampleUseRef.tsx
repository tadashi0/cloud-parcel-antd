import React, { useRef } from 'react'

const ExampleUseRef = () => {
    const inputEl = useRef<HTMLInputElement>(null)

    const onButtonClick = (value: number) => {
        if (inputEl && inputEl.current) {
            inputEl.current.focus()
            inputEl.current.value = value.toString()
        }
    }

    return (
        <div>
            <input type="text" ref={inputEl} />
            <button onClick={() => { onButtonClick(1111) }}>Focus</button>
        </div>
    )
}

export default ExampleUseRef
