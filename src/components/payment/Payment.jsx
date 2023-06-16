// import { useParams } from "react-router-dom";
// import { useAuth } from "../../providers/AuthProvider";

// stripe import
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
    // const { currentUser } = useAuth();
    // const { classId } = useParams();

    const options = {
        mode: "payment",
        amount: 1099,
        currency: "usd",
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full mx-auto p-4 pt-24 xs:pt-4">
                <h1 className="text-2xl text-center font-bold mb-4 text-[#FDA7DF]">
                    Payment Page
                </h1>
                <div className="bg-white p-10 rounded">
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
