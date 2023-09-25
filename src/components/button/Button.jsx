
const Button = ({ name, customClass, onClick,children, type }) => {
    return (
        <button
            className={`rounded-sm font-medium py-2.5 ${customClass}`}
            onClick={onClick}
            type={type}
        >
            {children}
            {name}
        </button>
    );
};

export default Button;
