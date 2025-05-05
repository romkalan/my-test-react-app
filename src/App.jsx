import Layout from "./components/layout/Layout.jsx";
import Restaurants from "./components/restaurants/Restaurants.jsx";
import restaurants from "./materials/mock.js";

function App() {
    return (
        <Layout>
            <Restaurants restaurants={restaurants}/>
        </Layout>
    );
}

export default App;
