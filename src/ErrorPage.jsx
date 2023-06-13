import { useRouteError } from "react-router-dom";
import img from "./assets/404.gif";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            className="h-screen flex justify-center items-center"
            id="error-page"
        >
            <div className="w-full md:w-1/2 text-center google-font">
                <img
                    className="max-w-sm h-auto mx-auto rounded-lg"
                    src={img}
                    alt=""
                />
                <div>
                    <h1 className="font-bold text-2xl">Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i className="font-bold text-2xl">
                            {error.statusText || error.message}
                        </i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
