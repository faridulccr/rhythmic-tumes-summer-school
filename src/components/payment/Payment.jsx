import { useParams } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const Payment = () => {
    const { currentUser } = useAuth();
    const { classId } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your payment processing logic here
        // You can send the payment details to a server-side script for processing
        // or integrate with a payment gateway using their provided APIs
        alert("Payment processing is not implemented in this example.");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-[#FDA7DF]">
                    Payment Page
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="font-bold block mb-2 text-white"
                        >
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="cardNumber"
                            className="font-bold block mb-2 text-white"
                        >
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="expiry"
                            className="font-bold block mb-2 text-white"
                        >
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            placeholder="MM / YY"
                            className="w-full border border-gray-300 px-3 py-2 rounded text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="cvv"
                            className="font-bold block mb-2 text-white"
                        >
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            className="w-full border border-gray-300 px-3 py-2 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
