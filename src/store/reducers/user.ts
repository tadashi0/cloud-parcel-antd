interface IUser {
    id: number
    name: string
}

export interface IUserState {
    user: IUser
}

const initUserState: IUserState = {
    user: {
        id: 1,
        name: '111'
    }
}

export enum IUserActionTypes {
    INIT,
    CHANGE,
}

interface IAction {
    type: IUserActionTypes
    payload: any
}


const user = (state: IUserState = initUserState, action: IAction) => {

    console.log(state)
    const { type, payload } = action
    switch (type) {
        case IUserActionTypes.INIT:
            return state
        case IUserActionTypes.CHANGE:
            return { ...state, ...payload }
        default:
            return state
    }
}

export default user