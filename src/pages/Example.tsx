import { Button, message, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { biSearch } from '../components/Algorithm/biSearch'
import LoadingElement from '../components/LoadingElement'
import { rootStore } from '../store'
import { IUserActionTypes, IUserState } from '../store/reducers/user'

interface IExampleProps {
    title: string
}

const Example: React.FC<IExampleProps> = ({ title }) => {
    const { user } = useSelector<rootStore, IUserState>((state: rootStore) => state.user, shallowEqual)
    const dispatch = useDispatch()
    const location = useLocation()
    const [target, setTarget] = useState(1);
    const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    useEffect(() => {
        console.log(user.name)
    }, [user]);

    useEffect(() => {
        const result = biSearch(array, target)
        message.success(`当前查找值为: ${target}, 数组下标为: ${result}`)
    }, [target]);

    return (
        <>
            <h1>数组为: {array.toLocaleString()}</h1>
            <Button type="primary" onClick={() => setTarget(Math.ceil(Math.random() * 10))}>二分查找</Button>
            {/* <LoadingElement /> */}
            <h1>{title}</h1>
            {user.id}
            <br />
            {user.name}
            <br />
            <button
                onClick={() => dispatch({
                    type: IUserActionTypes.CHANGE,
                    payload: {
                        user: {
                            ...user,
                            name: 'tadashi' + new Date().toLocaleDateString()
                        }
                    }
                })}
            > change user name</button>
            <br />
        </>
    )
}

export default Example
