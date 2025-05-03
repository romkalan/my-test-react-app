import Layout from "./components/layout/Layout.jsx";
import restaurants from "./materials/mock.js";

function App() {
    return (
        <Layout>
            <h3>{restaurants[0].name}</h3>
            <h3>{restaurants[1].name}</h3>
        </Layout>
    );
}

export default App;
