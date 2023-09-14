const Input = ({ customClass, name, type, onChange, id }) => {
    return (
        <input
            type={type}
            id={id}
            name={name}
            className={`bg-input-bg rounded-sm w-full p-2.5 outline-none ${customClass}`}
            onChange={onChange}
        />
    );
};

export default Input;
