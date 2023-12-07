const initialState = {
    emailForm: '',
    passwordForm: '',
    loaderLoginIsTrue: false,
    PatientsSchedule: [
        {

        }
    ],
    activeItem: false,
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                emailForm: action.value
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                passwordForm: action.value
            }
        case 'SET_STATUS_LOGI_LOADER':
            return {
                ...state,
                loaderLoginIsTrue: action.value
            }
        case 'SET_SCHEDULE':
            return {
                ...state,
                PatientsSchedule: action.value
            }
        case 'SET_ACTIVE_ITEM':
            return {
                ...state,
                activeItem: action.value
            }
        default:
            return state;
    }
};

export default currencyReducer;