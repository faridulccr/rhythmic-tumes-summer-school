const Input = ({ type, name, label, placeholder, ...rest }) => {
    return (
        <div className="form-control">
            <label className="label font-semibold">
                <span className="label-text text-white">{label}</span>
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="input input-bordered"
                required
                {...rest}
            />
        </div>
    );
};

export default Input;
