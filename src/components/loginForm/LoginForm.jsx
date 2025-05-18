import {useContext, useState} from "react";
import UserContext from "../../contexts/user.js";
import classNames from "classnames";
import styles from "./styles.module.scss";

function LoginForm({onClose}) {
    const {user, setUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target;
        setFormData({...formData, [name]: value});
    }

    const logIn = () => {
        onClose();
        setUser(formData);
    }

    return (
        <div>
            {user
                ? <>
                    <h1 className={styles.root}>
                        Hello {user.name}
                    </h1>
                    <button onClick={() => setUser(null)}>
                        Log Out
                    </button>
                  </>
                : <>
                    <input className={classNames(styles.filed)} type="text" name="name" value={formData.name} onChange={handleFieldChange}/>
                    <input className={classNames(styles.filed)} type="text" name="email" value={formData.email} onChange={handleFieldChange}/>
                    <button type="submit" onClick={logIn}>Log In</button>
                  </>
            }
        </div>
    );
}

export default LoginForm;
