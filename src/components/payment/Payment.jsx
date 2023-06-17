import { useLocation } from "react-router-dom";

// stripe import
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK); //published key (pk)

const Payment = () => {
    const location = useLocation();

    const options = {
        mode: "payment",
        amount: Math.floor((location.state?.price || 0) * 100),
        currency: "usd",
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <div className="flex justify-center items-center h-screen pt-24 mb-24">
            <div className="max-w-md w-full mx-auto p-4">
                <h1 className="text-2xl text-center font-bold mb-4 text-[#FDA7DF]">
                    Payment Page
                </h1>
                <div className="bg-[rgba(255,255,255,0.5)] p-10 rounded">
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm price={location.state?.price} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
