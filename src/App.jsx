import Layout from "./components/layout/Layout.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import ThemeContext from "./contexts/theme.js";
import UserContext from "./contexts/user.js";
import {useState} from "react";
import Button from "./components/button/Button.jsx";
import {Provider} from "react-redux";
import store from "./redux/index.js";

function App() {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('default');
    const changeTheme = () => theme === 'default' ? 'darkTheme' : 'default';

    return (
        <Provider store={store}>
            <UserContext.Provider value={{user, setUser}}>
                <ThemeContext.Provider value={theme}>
                    <Layout>
                        <Button size={'l'} isDisabled={false}
                                onClick={() => setTheme(changeTheme)}
                                children={'Change Theme'}
                        />
                        <RestaurantPage/>
                    </Layout>
                </ThemeContext.Provider>
            </UserContext.Provider>
        </Provider>
    );
}

export default App;
