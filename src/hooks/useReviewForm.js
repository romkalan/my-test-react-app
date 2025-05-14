import {useReducer} from "react";

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 1,
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'setName':
            return {
                ...INITIAL_VALUE,
                name: payload,
            }
        case 'setText':
            return {
                ...INITIAL_VALUE,
                text: payload,
            }
        case 'setRating':
            return {
                ...INITIAL_VALUE,
                rating: payload,
            }
        default:
            return state;
    }
};

const useReviewForm = (initialValue = INITIAL_VALUE) => {
    const [form, dispatch] = useReducer(reducer, initialValue);

    return {
        form,
        setName: (event) => dispatch({type: "setName", payload: event.target.value}),
        setText: (event) => dispatch({type: "setText", payload: event.target.value}),
        setRating: (event) => dispatch({type: "setRating", payload: event.target.value}),
    };
}

export default useReviewForm;
