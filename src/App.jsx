import { Outlet, useLocation, useNavigation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    // for showing spinner when loading
    const navigation = useNavigation();
    const location = useLocation();
    const isLoginPage = location.pathname.includes("login");
    const isSigninPage = location.pathname.includes("sign-up");

    return (
        <section className="max-w-screen-xl mx-auto">
            {isLoginPage || isSigninPage || <Header />}
            <main>
                {navigation.state === "loading" ? (
                    <div className="h-[100vh] flex items-center justify-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
            {isLoginPage || isSigninPage || <Footer />}
        </section>
    );
}

export default App;
