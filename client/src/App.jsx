import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainLayout from "./components/layout/main/MainLayout";
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
