import React, { memo, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

const ExampleUseMemo = () => {
    let { id } = useParams()
    const [index, setIndex] = useState(0)
    const [str, setStr] = useState('')
    const add = useMemo(() => {
        console.log(index)
        return index * 100
    }, [index])
    return (
        <div>
            这是个useMemo组件,id是{id}
            <div>{index}-{str}-{add}</div>
            <div>
                <button
                    onClick={() => {
                        setIndex(index + 1)
                    }}>+</button>
                <input type="text" onChange={e => setStr(e.target.value)} />
            </div>
        </div >
    )
}

interface IProps {
    value: number
}

export default memo(ExampleUseMemo, (prevProps: IProps, nextProps: IProps) => {
    console.log('ExampleUseMemo')
    return prevProps.value === nextProps.value
})
