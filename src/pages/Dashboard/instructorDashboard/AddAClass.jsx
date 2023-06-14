import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../../../components/input/Input";

const AddAClass = ({ name, email }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { className, image, seats, price, description } = data;
        try {
            // console.log(className, image, name, email, price);
            const response = await axios.post(
                `${import.meta.env.VITE_RHYTHMIC_SERVER}/api/add-class`,
                JSON.stringify({
                    name: className,
                    image,
                    instructor: name,
                    email,
                    seats,
                    price,
                    status: "pending",
                    description: description || "",
                })
            );
            if (response.data.message) {
                alert(response.data.message);
            } else if (response.data.error) {
                alert(response.data.error);
            }
        } catch (error) {
            alert("Failed to Add! Try again.");
            console.log(error);
        }
    };

    return (
        <div className="overflow-auto">
            <h1 className="text-3xl font-bold text-center text-[#D1A054]">
                Add A Class
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="Enter class name"
                    options={{
                        ...register("className", { required: true }),
                    }}
                />
                {errors.className?.type === "required" && (
                    <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                        Class name is required
                    </span>
                )}

                <Input
                    placeholder="add class image link"
                    options={{
                        ...register("image", { required: true }),
                    }}
                />
                {errors.image?.type === "required" && (
                    <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                        Image is required
                    </span>
                )}

                <Input readOnly value={name} />
                <Input readOnly value={email} />
                <Input
                    placeholder="Available Seats"
                    options={{
                        ...register("seats", {
                            required: true,
                        }),
                    }}
                />
                {errors.seats?.type === "required" && (
                    <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                        seats is required
                    </span>
                )}
                <Input
                    placeholder="Price"
                    options={{
                        ...register("price", {
                            required: true,
                        }),
                    }}
                />
                {errors.price?.type === "required" && (
                    <span className="text-red-600 bg-black p-2 rounded mt-1 inline-block">
                        Price is required
                    </span>
                )}
                <Input
                    placeholder="Class description (Optional)"
                    options={{
                        ...register("description", { required: false }),
                    }}
                />

                <div className="form-control mt-6">
                    <input
                        type="submit"
                        className="btn w-[fit-content] bg-[#D1A054] text-white hover:bg-[#060330]"
                        value="Add Class"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;
