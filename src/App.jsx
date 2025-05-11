import Layout from "./components/layout/Layout.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import ReviewForm from "./components/reviewForm/ReviewForm.jsx";

function App() {
    return (
        <Layout>
            <RestaurantPage/>
            <ReviewForm/>
        </Layout>
    );
}

export default App;
