import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

const CheckoutForm = ({ price }) => {
    const { currentUser } = useAuth();
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (elements == null) {
            setLoading(false);
            return;
        }
        // console.log(elements);

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await axios.post(
            `${
                import.meta.env.VITE_RHYTHMIC_SERVER
            }/api/create-payment-intent?price=${price}`
        );
        // console.log(res);
        const { clientSecret } = res.data;
        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: `https://rhythmic-tunes.web.app/dashboard`,
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setLoading(false);
            setErrorMessage(error.message);
            console.log("in error scope");
        } else {
            console.log("out error scope");
            const res = await axios.put(
                `${
                    import.meta.env.VITE_RHYTHMIC_SERVER
                }/api/enrolled-class?email=${currentUser.email}`
            );

            res.data.message && console.log(res.data.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />

            <button
                type="submit"
                disabled={!stripe || !elements || loading}
                className="bg-green-500 text-white py-2 px-4 my-5 rounded hover:bg-green-600"
            >
                Pay
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CheckoutForm;
