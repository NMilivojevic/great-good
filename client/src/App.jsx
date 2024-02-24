import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainLayout from "./components/layout/MainLayout";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <MainLayout>
            <Header />
            <MainPage />
            <Footer />
        </MainLayout>
    );
}

export default App;
