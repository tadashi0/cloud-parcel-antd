import React, { memo, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface IAppChildProps {
    callback: () => number
}

const AddChild = ({ callback }: IAppChildProps) => {
    const [index, setIndex] = useState(callback);
    useEffect(() => {
        setIndex(callback)
    }, [callback]);
    return (
        <div>{index}</div>
    )
}

const ExampleUseCallback = () => {
    let { id } = useParams()
    const [index, setIndex] = useState(0);
    const [str, setStr] = useState('');
    const callback = useCallback(() => {
        return index * 100
    }, [index])

    return (
        <div>
            这是个useCallback组件,id是{id}
            <h1>{str}</h1>
            <AddChild callback={callback} />
            <div>
                <button
                    onClick={() => {
                        setIndex(index + 1)
                    }}>+</button>
                <input type="text" onChange={e => setStr(e.target.value)} />
            </div>
        </div>
    )
}

interface IProps {
    value: number
}

export default memo(ExampleUseCallback, (prevProps: IProps, nextProps: IProps) => {
    return prevProps.value === nextProps.value
})
