import Layout from "./components/layout/Layout.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import ReviewForm from "./components/reviewForm/ReviewForm.jsx";
import ThemeContext from "./contexts/theme.js";
import {useState} from "react";
import Button from "./components/button/Button.jsx";

function App() {
    const [theme, setTheme] = useState('default');
    const changeTheme = ()  => {
        return theme === 'default' ? 'darkTheme' : 'default';
    }

    return (
        <ThemeContext.Provider value={theme}>
            <Layout>
                <Button size={'m'} isDisabled={false} onClick={() => setTheme(changeTheme)} children={'Change Theme'}/>
                <RestaurantPage/>
                <ReviewForm/>
            </Layout>
        </ThemeContext.Provider>
    );
}

export default App;
