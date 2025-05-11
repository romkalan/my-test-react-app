import classNames from "classnames";
import styles from "./styles.module.scss";
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

function ReviewForm() {
    const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

    return (
        <div className={classNames(styles.root)}>
            <div className={classNames(styles.field)}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => dispatch({
                        type: 'setName',
                        payload: event.target.value
                    })}
                />
            </div>
            <div className={classNames(styles.field)}>
                <label htmlFor="text">Text</label>
                <input
                    id="text"
                    type="text"
                    value={form.text}
                    onChange={(event) => dispatch({
                        type: 'setText',
                        payload: event.target.value
                    })}
                />
            </div>
            <div className={classNames(styles.field)}>
                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    type="number"
                    min="1" max="5"
                    value={form.rating}
                    onChange={(event) => dispatch({
                        type: 'setRating',
                        payload: Number(event.target.value)
                    })}
                />
            </div>
        </div>
    );
}

export default ReviewForm;
