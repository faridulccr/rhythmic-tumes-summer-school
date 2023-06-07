const Input = ({ label, children, className, options, ...rest }) => {
    return (
        <div className={`form-control ${className}`}>
            <label className="label font-semibold">
                <span className="label-text text-white">{label}</span>
            </label>
            <input className="input input-bordered" {...options} {...rest} />
            {children || ""}
        </div>
    );
};

export default Input;
