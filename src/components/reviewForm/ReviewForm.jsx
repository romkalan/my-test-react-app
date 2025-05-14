import classNames from "classnames";
import styles from "./styles.module.scss";
import useReviewForm from "../../hooks/useReviewForm.js";

function ReviewForm() {
    const {form, setName, setText, setRating} = useReviewForm();

    return (
        <div className={classNames(styles.root)}>
            <div className={classNames(styles.field)}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={setName}
                />
            </div>
            <div className={classNames(styles.field)}>
                <label htmlFor="text">Text</label>
                <input
                    id="text"
                    type="text"
                    value={form.text}
                    onChange={setText}
                />
            </div>
            <div className={classNames(styles.field)}>
                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    type="number"
                    min="1" max="5"
                    value={form.rating}
                    // onChange={(event) => dispatch({
                    //     type: 'setRating',
                    //     payload: Number(event.target.value)
                    // })}
                    onChange={setRating}
                />
            </div>
        </div>
    );
}

export default ReviewForm;
