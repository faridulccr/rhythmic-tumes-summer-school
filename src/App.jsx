import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    // for showing spinner when loading
    const navigation = useNavigation();

    return (
        <section className="max-w-screen-xl mx-auto">
            <Header />
            <main className="google-font">
                {navigation.state === "loading" ? (
                    <div className="h-[100vh] flex items-center justify-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
            <Footer />
        </section>
    );
}

export default App;
