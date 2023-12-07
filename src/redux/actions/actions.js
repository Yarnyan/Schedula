export const setLogin = (email) =>{
    return {
        type: 'SET_EMAIL',
        payload: email
    }
}

export const setPassword = (password) => {
    return {
        type: 'SET_PASSWORD',
        payload: password
    }
}

export const setStatusLoginLoader = (status) => {
    return {
        type: 'SET_STATUS_LOGI_LOADER',
        payload: status
    }
}

export const setSchedule = (Schedule) => {
    return {
        type: 'SET_SCHEDULE',
        payload: Schedule
    }
}

export const setActiveItem = (item) => {
    return {
        type: 'SET_ACTIVE_ITEM',
        payload: item
    }
}